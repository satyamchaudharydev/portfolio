import { getGlobalApi, registerPlugin, unregisterPlugin } from "react-grab";

const PLUGIN_NAME = "portfolio-ai-prompt";
const UPDATED_NOTES_STORAGE_KEY = "portfolio:last-updated-properties";
const MAX_HTML_SNIPPET_LENGTH = 2500;
const MAX_TEXT_LENGTH = 180;

const PANEL_ROOT_ID = "portfolio-ai-prompt-panel";
const CURSOR_TOOLBAR_ROOT_ID = "portfolio-ai-prompt-cursor-toolbar";
const CURSOR_TOOLBAR_TOGGLE_ID = "portfolio-ai-prompt-cursor-toolbar-toggle";
const PANEL_STYLE_ID = "portfolio-ai-prompt-panel-style";
const PANEL_SELECTED_META_ID = "portfolio-ai-prompt-selected-meta";
const PANEL_RESET_BUTTON_ID = "portfolio-ai-prompt-reset";
const PANEL_NOTES_ID = "portfolio-ai-prompt-notes";
const PANEL_FONT_FAMILY_ID = "portfolio-ai-prompt-font-family";
const PANEL_FONT_SIZE_ID = "portfolio-ai-prompt-font-size";
const PANEL_FONT_WEIGHT_ID = "portfolio-ai-prompt-font-weight";
const PANEL_LINE_HEIGHT_ID = "portfolio-ai-prompt-line-height";
const PANEL_LETTER_SPACING_ID = "portfolio-ai-prompt-letter-spacing";
const PANEL_TEXT_ALIGN_ID = "portfolio-ai-prompt-text-align";
const PANEL_LOADED_FONTS_ID = "portfolio-ai-prompt-loaded-fonts";
const PANEL_TEXT_COLOR_ID = "portfolio-ai-prompt-text-color";
const PANEL_BG_COLOR_ID = "portfolio-ai-prompt-bg-color";
const PANEL_BORDER_RADIUS_ID = "portfolio-ai-prompt-radius";
const PANEL_PADDING_ID = "portfolio-ai-prompt-padding";
const PANEL_MARGIN_ID = "portfolio-ai-prompt-margin";
const PANEL_CURSOR_MODE_ID = "portfolio-ai-prompt-cursor-mode";
const PANEL_INSPECT_TOGGLE_ID = "portfolio-ai-prompt-inspect-toggle";
const PANEL_COPY_CHANGES_BUTTON_ID = "portfolio-ai-prompt-copy-all";
const PANEL_COPY_STATUS_ID = "portfolio-ai-prompt-copy-status";
const PANEL_PROMPT_PREVIEW_ID = "portfolio-ai-prompt-preview";
const CURSOR_MODE_STORAGE_KEY = "portfolio:cursor-mode";
const CUSTOM_CURSOR_STYLE_ID = "portfolio-ai-prompt-cursor-style";
const HIGHLIGHT_BORDER = "2px solid #f97316";
const HIGHLIGHT_OFFSET = "2px";
const REACT_GRAB_BUILTIN_PLUGIN_NAMES = [
  "copy",
  "comment",
  "copy-html",
  "copy-styles",
  "open",
];

const liveEditsByElement = new Map();

const selectedState = {
  element: null,
  filePath: "",
  lineNumber: null,
  componentName: "",
  highlightedElement: null,
};

let panelNodesCache = null;
let cursorToolbarNodesCache = null;
let cursorMode = "same";
let panelTouchStartY = null;
let hasBoundFontEvents = false;
let inspectModeEnabled = false;

const sanitizeWhitespace = (value) => value.replace(/\s+/g, " ").trim();

const truncate = (value, maxLength) =>
  value.length > maxLength ? `${value.slice(0, maxLength)}...` : value;

const parsePixelValue = (value) => {
  if (!value || value === "normal") {
    return "";
  }
  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed)) {
    return "";
  }
  return String(Math.round(parsed * 100) / 100);
};

const normalizeFontWeightValue = (value) => {
  if (!value || value === "normal") {
    return "400";
  }
  if (value === "bold") {
    return "700";
  }
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) {
    return "400";
  }
  const rounded = Math.round(parsed / 100) * 100;
  return String(Math.max(300, Math.min(800, rounded)));
};

const normalizeTextAlignValue = (value) => {
  if (value === "start") {
    return "left";
  }
  if (value === "end") {
    return "right";
  }
  return ["left", "center", "right", "justify"].includes(value) ? value : "left";
};

const toKebabCase = (value) =>
  value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

const normalizeFontFamilyName = (value) =>
  value.replace(/^['"]|['"]$/g, "").trim();

const readLoadedFonts = () => {
  if (typeof document === "undefined" || !document.fonts) {
    return [];
  }

  const names = new Set();
  document.fonts.forEach((fontFace) => {
    if (fontFace.status === "loaded") {
      names.add(normalizeFontFamilyName(fontFace.family));
    }
  });

  return Array.from(names).sort((a, b) => a.localeCompare(b));
};

const getStoredNotes = () => {
  try {
    return window.localStorage.getItem(UPDATED_NOTES_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
};

const getStoredCursorMode = () => {
  try {
    const storedMode = window.localStorage.getItem(CURSOR_MODE_STORAGE_KEY);
    return storedMode === "custom" ? "custom" : "same";
  } catch {
    return "same";
  }
};

const setStoredCursorMode = (mode) => {
  try {
    window.localStorage.setItem(CURSOR_MODE_STORAGE_KEY, mode);
  } catch {
    // Ignore storage failures.
  }
};

const setStoredNotes = (value) => {
  try {
    window.localStorage.setItem(UPDATED_NOTES_STORAGE_KEY, value);
  } catch {
    // Ignore storage issues in locked-down browser environments.
  }
};

const syncCursorStyle = () => {
  const styleId = CUSTOM_CURSOR_STYLE_ID;
  let styleElement = document.getElementById(styleId);

  if (!inspectModeEnabled || cursorMode !== "custom") {
    if (styleElement) {
      styleElement.remove();
    }
    return;
  }

  if (!styleElement) {
    styleElement = document.createElement("style");
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }

  styleElement.textContent = `
    body *:not([data-ui-helper="design-panel"]):not([data-ui-helper="design-panel"] *):not([data-ui-helper="cursor-toolbar"]):not([data-ui-helper="cursor-toolbar"] *) {
      cursor: crosshair !important;
    }
  `;
};

const applyCursorMode = (mode) => {
  cursorMode = mode === "custom" ? "custom" : "same";
  setStoredCursorMode(cursorMode);
  syncCursorStyle();
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browser security contexts.
  }

  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textArea);
    return copied;
  } catch {
    return false;
  }
};

const colorStringToHex = (value, fallback) => {
  if (!value) {
    return fallback;
  }

  const lowered = value.toLowerCase().trim();
  if (lowered === "transparent") {
    return fallback;
  }

  const hexMatch = lowered.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hexMatch) {
    if (hexMatch[1].length === 3) {
      const [r, g, b] = hexMatch[1].split("");
      return `#${r}${r}${g}${g}${b}${b}`;
    }
    return `#${hexMatch[1]}`;
  }

  const rgbMatch = lowered.match(
    /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*([0-9.]+))?\s*\)$/i
  );
  if (rgbMatch) {
    const alpha = rgbMatch[4] !== undefined ? Number.parseFloat(rgbMatch[4]) : 1;
    if (alpha === 0) {
      return fallback;
    }
    const toHex = (channel) =>
      Math.max(0, Math.min(255, Number.parseInt(channel, 10)))
        .toString(16)
        .padStart(2, "0");
    return `#${toHex(rgbMatch[1])}${toHex(rgbMatch[2])}${toHex(rgbMatch[3])}`;
  }

  return fallback;
};

const getElementSummary = (element) => {
  if (!element) {
    return "No element selected";
  }

  const tag = element.tagName.toLowerCase();
  const idSuffix = element.id ? `#${element.id}` : "";
  const classSuffix =
    typeof element.className === "string" && element.className.trim().length > 0
      ? `.${element.className
          .trim()
          .split(/\s+/)
          .slice(0, 2)
          .join(".")}`
      : "";
  return `${tag}${idSuffix}${classSuffix}`;
};

const formatFileLocation = (filePath, lineNumber) => {
  if (!filePath) {
    return "Unknown";
  }
  if (typeof lineNumber !== "number") {
    return filePath;
  }
  return `${filePath}:${lineNumber}`;
};

const getCurrentEditableElement = () =>
  selectedState.element && selectedState.element.isConnected ? selectedState.element : null;

const getPanelNodes = () => {
  if (panelNodesCache?.root?.isConnected) {
    return panelNodesCache;
  }

  const root = document.getElementById(PANEL_ROOT_ID);
  if (!root) {
    return null;
  }

  const nodes = {
    root,
    selectedMeta: root.querySelector(`#${PANEL_SELECTED_META_ID}`),
    cursorMode: root.querySelector(`#${PANEL_CURSOR_MODE_ID}`),
    inspectToggle: root.querySelector(`#${PANEL_INSPECT_TOGGLE_ID}`),
    promptPreview: root.querySelector(`#${PANEL_PROMPT_PREVIEW_ID}`),
    copyAllButton: root.querySelector(`#${PANEL_COPY_CHANGES_BUTTON_ID}`),
    copyStatus: root.querySelector(`#${PANEL_COPY_STATUS_ID}`),
    resetButton: root.querySelector(`#${PANEL_RESET_BUTTON_ID}`),
    notes: root.querySelector(`#${PANEL_NOTES_ID}`),
    fontFamily: root.querySelector(`#${PANEL_FONT_FAMILY_ID}`),
    fontSize: root.querySelector(`#${PANEL_FONT_SIZE_ID}`),
    fontWeight: root.querySelector(`#${PANEL_FONT_WEIGHT_ID}`),
    lineHeight: root.querySelector(`#${PANEL_LINE_HEIGHT_ID}`),
    letterSpacing: root.querySelector(`#${PANEL_LETTER_SPACING_ID}`),
    textAlign: root.querySelector(`#${PANEL_TEXT_ALIGN_ID}`),
    loadedFonts: root.querySelector(`#${PANEL_LOADED_FONTS_ID}`),
    textColor: root.querySelector(`#${PANEL_TEXT_COLOR_ID}`),
    backgroundColor: root.querySelector(`#${PANEL_BG_COLOR_ID}`),
    borderRadius: root.querySelector(`#${PANEL_BORDER_RADIUS_ID}`),
    padding: root.querySelector(`#${PANEL_PADDING_ID}`),
    margin: root.querySelector(`#${PANEL_MARGIN_ID}`),
  };
  panelNodesCache = nodes;
  return nodes;
};

const getCursorToolbarNodes = () => {
  if (cursorToolbarNodesCache?.root?.isConnected) {
    return cursorToolbarNodesCache;
  }

  const root = document.getElementById(CURSOR_TOOLBAR_ROOT_ID);
  if (!root) {
    return null;
  }

  const nodes = {
    root,
    toggleButton: root.querySelector(`#${CURSOR_TOOLBAR_TOGGLE_ID}`),
  };
  cursorToolbarNodesCache = nodes;
  return nodes;
};

const clearSelectionHighlight = () => {
  const highlighted = selectedState.highlightedElement;
  if (!highlighted) {
    return;
  }

  highlighted.style.outline = "";
  highlighted.style.outlineOffset = "";
  selectedState.highlightedElement = null;
};

const applySelectionHighlight = (element) => {
  clearSelectionHighlight();
  if (!element) {
    return;
  }

  element.style.outline = HIGHLIGHT_BORDER;
  element.style.outlineOffset = HIGHLIGHT_OFFSET;
  selectedState.highlightedElement = element;
};

const getElementIdentity = (element) => {
  const tag = element.tagName.toLowerCase();
  const idPart = element.id ? `#${element.id}` : "";
  const classPart =
    typeof element.className === "string" && element.className.trim().length > 0
      ? `.${element.className
          .trim()
          .split(/\s+/)
          .slice(0, 2)
          .join(".")}`
      : "";
  return `${tag}${idPart}${classPart}`;
};

const getSelectionTextPreview = (element) => {
  if (!element) {
    return "No selection";
  }
  const preview = sanitizeWhitespace(element.textContent ?? "");
  if (preview) {
    return truncate(preview, 180);
  }
  return truncate(element.outerHTML, 180);
};

const setCopyStatus = (message) => {
  const nodes = getPanelNodes();
  if (nodes?.copyStatus instanceof HTMLElement) {
    nodes.copyStatus.textContent = message;
  }
};

const updateLoadedFontsSummary = () => {
  const nodes = getPanelNodes();
  if (!(nodes?.loadedFonts instanceof HTMLTextAreaElement)) {
    return;
  }

  const loadedFonts = readLoadedFonts();
  nodes.loadedFonts.value = loadedFonts.length
    ? loadedFonts.join(", ")
    : "No loaded fonts detected yet.";
};

const updateInspectToggleUi = () => {
  const nodes = getPanelNodes();
  const toolbarNodes = getCursorToolbarNodes();

  if (nodes?.root) {
    nodes.root.setAttribute("data-inspect-enabled", String(inspectModeEnabled));
    nodes.root.setAttribute("data-panel-visible", String(inspectModeEnabled));
    if (nodes.inspectToggle instanceof HTMLButtonElement) {
      nodes.inspectToggle.textContent = inspectModeEnabled ? "Disable Inspect" : "Enable Inspect";
      nodes.inspectToggle.dataset.enabled = String(inspectModeEnabled);
      nodes.inspectToggle.setAttribute("aria-pressed", String(inspectModeEnabled));
    }
  }

  if (toolbarNodes?.root) {
    toolbarNodes.root.setAttribute("data-inspect-enabled", String(inspectModeEnabled));
  }
  if (toolbarNodes?.toggleButton instanceof HTMLButtonElement) {
    toolbarNodes.toggleButton.textContent = inspectModeEnabled ? "Cursor On" : "Cursor Off";
    toolbarNodes.toggleButton.dataset.enabled = String(inspectModeEnabled);
    toolbarNodes.toggleButton.setAttribute("aria-pressed", String(inspectModeEnabled));
  }
};

const toggleInspectMode = (nextValue) => {
  inspectModeEnabled =
    typeof nextValue === "boolean" ? nextValue : !inspectModeEnabled;

  ensurePanel();
  syncGrabRuntime(getGlobalApi());
  setCopyStatus(
    inspectModeEnabled
      ? "Cursor enabled. Click any element to select."
      : "Cursor disabled. Panel hidden."
  );
};

const bindFontEvents = () => {
  if (
    hasBoundFontEvents ||
    typeof document === "undefined" ||
    !document.fonts ||
    typeof document.fonts.addEventListener !== "function"
  ) {
    return;
  }

  document.fonts.addEventListener("loadingdone", updateLoadedFontsSummary);
  hasBoundFontEvents = true;
};

const pruneDisconnectedLiveEdits = () => {
  for (const [element] of liveEditsByElement.entries()) {
    if (!(element instanceof Element) || !element.isConnected) {
      liveEditsByElement.delete(element);
    }
  }
};

const getElementEditMap = (element) => {
  const target = element ?? getCurrentEditableElement();
  if (!target) {
    return null;
  }

  let editMap = liveEditsByElement.get(target);
  if (!editMap) {
    editMap = new Map();
    liveEditsByElement.set(target, editMap);
  }
  return editMap;
};

const applyStyleValue = (styleProperty, rawValue) => {
  const element = getCurrentEditableElement();
  if (!element) {
    return;
  }

  const editMap = getElementEditMap(element);
  if (!editMap) {
    return;
  }

  const normalizedValue = typeof rawValue === "string" ? rawValue.trim() : "";
  if (!normalizedValue) {
    element.style[styleProperty] = "";
    editMap.delete(styleProperty);
    if (editMap.size === 0) {
      liveEditsByElement.delete(element);
    }
    updatePromptPreview();
    return;
  }

  element.style[styleProperty] = normalizedValue;
  editMap.set(styleProperty, normalizedValue);
  updatePromptPreview();
};

const applyPixelStyle = (styleProperty, rawInput) => {
  const value = String(rawInput ?? "").trim();
  if (!value) {
    applyStyleValue(styleProperty, "");
    return;
  }
  const numeric = Number.parseFloat(value);
  if (!Number.isFinite(numeric)) {
    return;
  }
  applyStyleValue(styleProperty, `${numeric}px`);
};

const applyRawStyle = (styleProperty, rawInput) => {
  applyStyleValue(styleProperty, String(rawInput ?? ""));
};

const updateSelectedMeta = () => {
  const nodes = getPanelNodes();
  if (!nodes?.selectedMeta) {
    return;
  }

  const element = getCurrentEditableElement();
  if (!element) {
    nodes.selectedMeta.textContent = inspectModeEnabled
      ? "No element selected. Click an element on the page."
      : "Inspect mode is off. Enable inspect, then click an element.";
    return;
  }

  const summary = getElementSummary(element);
  const source = [];
  if (selectedState.componentName) {
    source.push(selectedState.componentName);
  }
  if (selectedState.filePath) {
    source.push(formatFileLocation(selectedState.filePath, selectedState.lineNumber));
  }
  const sourceText = source.length > 0 ? ` | ${source.join(" | ")}` : "";
  nodes.selectedMeta.textContent = `${summary}${sourceText}`;
};

const setControlDisabledState = (disabled) => {
  const nodes = getPanelNodes();
  if (!nodes) {
    return;
  }

  const controlNodes = [
    nodes.resetButton,
    nodes.fontFamily,
    nodes.fontSize,
    nodes.fontWeight,
    nodes.lineHeight,
    nodes.letterSpacing,
    nodes.textAlign,
    nodes.textColor,
    nodes.backgroundColor,
    nodes.borderRadius,
    nodes.padding,
    nodes.margin,
  ];

  controlNodes.forEach((node) => {
    if (
      node instanceof HTMLButtonElement ||
      node instanceof HTMLInputElement ||
      node instanceof HTMLSelectElement
    ) {
      node.disabled = disabled;
    }
  });
};

const syncControlsFromSelection = () => {
  const nodes = getPanelNodes();
  if (!nodes) {
    return;
  }

  const element = getCurrentEditableElement();
  if (!element) {
    if (nodes.fontFamily instanceof HTMLInputElement) {
      nodes.fontFamily.value = "";
    }
    setControlDisabledState(true);
    updateSelectedMeta();
    updatePromptPreview();
    updateLoadedFontsSummary();
    return;
  }

  setControlDisabledState(false);
  const styles = window.getComputedStyle(element);
  if (nodes.fontFamily instanceof HTMLInputElement) {
    nodes.fontFamily.value = styles.fontFamily;
  }
  if (nodes.fontSize instanceof HTMLInputElement) {
    nodes.fontSize.value = parsePixelValue(styles.fontSize);
  }
  if (nodes.fontWeight instanceof HTMLSelectElement) {
    nodes.fontWeight.value = normalizeFontWeightValue(styles.fontWeight);
  }
  if (nodes.lineHeight instanceof HTMLInputElement) {
    nodes.lineHeight.value = parsePixelValue(styles.lineHeight);
  }
  if (nodes.letterSpacing instanceof HTMLInputElement) {
    nodes.letterSpacing.value = parsePixelValue(styles.letterSpacing);
  }
  if (nodes.textAlign instanceof HTMLSelectElement) {
    nodes.textAlign.value = normalizeTextAlignValue(styles.textAlign);
  }
  if (nodes.textColor instanceof HTMLInputElement) {
    nodes.textColor.value = colorStringToHex(styles.color, "#111827");
  }
  if (nodes.backgroundColor instanceof HTMLInputElement) {
    nodes.backgroundColor.value = colorStringToHex(styles.backgroundColor, "#ffffff");
  }
  if (nodes.borderRadius instanceof HTMLInputElement) {
    nodes.borderRadius.value = parsePixelValue(styles.borderRadius);
  }
  if (nodes.padding instanceof HTMLInputElement) {
    nodes.padding.value = styles.padding;
  }
  if (nodes.margin instanceof HTMLInputElement) {
    nodes.margin.value = styles.margin;
  }

  updateSelectedMeta();
  updatePromptPreview();
  updateLoadedFontsSummary();
};

const fetchSelectedSourceInfo = async (element) => {
  const api = getGlobalApi();
  if (!api || !element) {
    return;
  }

  try {
    const source = await api.getSource(element);
    if (getCurrentEditableElement() !== element) {
      return;
    }
    selectedState.filePath = source?.filePath ?? "";
    selectedState.lineNumber = source?.lineNumber ?? null;
    selectedState.componentName = source?.componentName ?? "";
    updateSelectedMeta();
    updatePromptPreview();
  } catch {
    // Source metadata is best effort.
  }
};

const setSelectedElement = (element) => {
  selectedState.element = element ?? null;
  selectedState.filePath = "";
  selectedState.lineNumber = null;
  selectedState.componentName = "";
  applySelectionHighlight(selectedState.element);
  syncControlsFromSelection();
  setCopyStatus(element ? "Selection updated." : "No element selected.");

  const current = getCurrentEditableElement();
  if (current) {
    void fetchSelectedSourceInfo(current);
  }
};

const disableReactGrabDropdownUi = (api) => {
  if (!api) {
    return;
  }

  REACT_GRAB_BUILTIN_PLUGIN_NAMES.forEach((pluginName) => {
    api.unregisterPlugin(pluginName);
  });
  api.setToolbarState({ enabled: false });
};

const syncGrabRuntime = (api) => {
  if (!api) {
    syncCursorStyle();
    updateInspectToggleUi();
    updateSelectedMeta();
    return;
  }

  disableReactGrabDropdownUi(api);
  api.setOptions({
    freezeReactUpdates: false,
    allowActivationInsideInput: true,
  });

  if (inspectModeEnabled) {
    api.setEnabled(true);
    if (!api.isActive()) {
      api.activate();
    }
    applySelectionHighlight(getCurrentEditableElement());
  } else {
    clearSelectionHighlight();
    if (api.isActive()) {
      api.deactivate();
    }
    api.setEnabled(false);
  }

  syncCursorStyle();
  updateInspectToggleUi();
  updateSelectedMeta();
  const nodes = getPanelNodes();
  if (nodes?.root) {
    nodes.root.setAttribute("data-grab-active", String(inspectModeEnabled && api.isActive()));
  }
};

const resetLiveEditsForSelection = () => {
  const element = getCurrentEditableElement();
  if (!element) {
    return;
  }

  const editMap = liveEditsByElement.get(element);
  if (!editMap || editMap.size === 0) {
    return;
  }

  for (const styleProperty of editMap.keys()) {
    element.style[styleProperty] = "";
  }
  liveEditsByElement.delete(element);
  syncControlsFromSelection();
};

const collectCurrentProperties = (element) => {
  const fields = [];
  const textContent = truncate(
    sanitizeWhitespace(element.textContent ?? ""),
    MAX_TEXT_LENGTH
  );

  fields.push({ label: "tag", value: element.tagName.toLowerCase() });

  if (element.id) {
    fields.push({ label: "id", value: element.id });
  }

  if (typeof element.className === "string" && element.className.trim()) {
    fields.push({
      label: "className",
      value: truncate(element.className, MAX_TEXT_LENGTH),
    });
  }

  const role = element.getAttribute("role");
  if (role) {
    fields.push({ label: "role", value: role });
  }

  const ariaLabel = element.getAttribute("aria-label");
  if (ariaLabel) {
    fields.push({
      label: "aria-label",
      value: truncate(ariaLabel, MAX_TEXT_LENGTH),
    });
  }

  if (textContent) {
    fields.push({ label: "text", value: textContent });
  }

  const notableAttributes = Array.from(element.attributes)
    .filter(
      (attribute) =>
        /^(data-|aria-)/.test(attribute.name) && attribute.name !== "aria-label"
    )
    .slice(0, 6)
    .map(
      (attribute) => `${attribute.name}="${truncate(attribute.value, MAX_TEXT_LENGTH)}"`
    );

  if (notableAttributes.length > 0) {
    fields.push({ label: "attributes", value: notableAttributes.join(", ") });
  }

  return fields.length > 0 ? fields : [{ label: "info", value: "No properties detected." }];
};

const getWhereToChangeText = () => {
  const location = formatFileLocation(selectedState.filePath, selectedState.lineNumber);
  if (selectedState.componentName) {
    return `${selectedState.componentName} | ${location}`;
  }
  return location;
};

const getAllLiveEditsText = () => {
  pruneDisconnectedLiveEdits();
  if (liveEditsByElement.size === 0) {
    return "- No live style edits yet.";
  }

  const lines = [];
  for (const [element, editMap] of liveEditsByElement.entries()) {
    if (!(element instanceof Element) || editMap.size === 0) {
      continue;
    }
    lines.push(`- ${getElementIdentity(element)}`);
    for (const [styleProperty, value] of editMap.entries()) {
      lines.push(`  - ${toKebabCase(styleProperty)}: ${value}`);
    }
  }

  return lines.length > 0 ? lines.join("\n") : "- No live style edits yet.";
};

const buildPromptFromPanelState = () => {
  const selectedElement = getCurrentEditableElement();
  const nodes = getPanelNodes();
  const notesValue =
    nodes?.notes instanceof HTMLTextAreaElement
      ? nodes.notes.value.trim()
      : getStoredNotes().trim();
  const whereToChange = getWhereToChangeText();
  const selectedText = getSelectionTextPreview(selectedElement);
  const currentProps = selectedElement
    ? collectCurrentProperties(selectedElement)
        .map((field) => `- ${field.label}: ${field.value}`)
        .join("\n")
    : "- No element selected";
  const selectedHtml = selectedElement
    ? truncate(selectedElement.outerHTML, MAX_HTML_SNIPPET_LENGTH)
    : "No element selected";

  return [
    "## Selected Element",
    `- Identity: ${selectedElement ? getElementIdentity(selectedElement) : "No selection"}`,
    `- Component: ${selectedState.componentName || "Unknown"}`,
    `- File: ${whereToChange}`,
    `- Text: ${selectedText}`,
    "",
    "## Selected HTML",
    "```html",
    selectedHtml,
    "```",
    "",
    "## Current Properties",
    currentProps,
    "",
    "## Updated Properties (Live)",
    getAllLiveEditsText(),
    "",
    "## Change Body",
    notesValue || "No change body provided yet.",
    "",
    "## Request",
    "Apply these changes in code for the targeted component only. Keep unrelated code untouched.",
  ].join("\n");
};

const updatePromptPreview = () => {
  const nodes = getPanelNodes();
  if (!(nodes?.promptPreview instanceof HTMLTextAreaElement)) {
    return;
  }
  nodes.promptPreview.value = buildPromptFromPanelState();
};

const injectPanelStyles = () => {
  if (document.getElementById(PANEL_STYLE_ID)) {
    return;
  }

  const style = document.createElement("style");
  style.id = PANEL_STYLE_ID;
  style.textContent = `
    #${PANEL_ROOT_ID} {
      position: fixed;
      top: 64px;
      right: 16px;
      width: min(360px, calc(100vw - 24px));
      max-height: calc(100vh - 32px);
      overflow-x: hidden;
      overflow-y: auto;
      overscroll-behavior: contain;
      touch-action: pan-y;
      -webkit-overflow-scrolling: touch;
      border: 1px solid #2f2f34;
      border-radius: 12px;
      background: #1f1f24;
      color: #f3f4f6;
      box-shadow: 0 24px 60px rgba(0, 0, 0, 0.38);
      z-index: 2147483647;
      padding: 12px;
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    }

    #${PANEL_ROOT_ID}[data-panel-visible="false"] {
      display: none;
    }

    #${PANEL_ROOT_ID}[data-grab-active="false"] {
      opacity: 0.7;
    }

    #${PANEL_ROOT_ID} * {
      box-sizing: border-box;
    }

    #${PANEL_ROOT_ID} .uip-header {
      margin-bottom: 10px;
    }

    #${PANEL_ROOT_ID} .uip-title {
      margin: 0;
      font-size: 13px;
      letter-spacing: 0.01em;
      font-weight: 700;
      color: #f9fafb;
    }

    #${PANEL_ROOT_ID} .uip-subtitle {
      margin: 2px 0 0;
      font-size: 11px;
      color: #a1a1aa;
      line-height: 1.4;
    }

    #${PANEL_ROOT_ID} .uip-meta {
      margin-bottom: 10px;
      font-size: 11px;
      color: #d4d4d8;
      line-height: 1.4;
      padding: 8px;
      background: #151519;
      border: 1px solid #2f2f34;
      border-radius: 8px;
      word-break: break-word;
    }

    #${PANEL_ROOT_ID} .uip-group {
      margin-bottom: 10px;
      border: 1px solid #2f2f34;
      border-radius: 8px;
      padding: 8px;
      background: #18181c;
    }

    #${PANEL_ROOT_ID} .uip-group h4 {
      margin: 0 0 6px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #a1a1aa;
    }

    #${PANEL_ROOT_ID} .uip-group .uip-note {
      margin-top: 6px;
      font-size: 11px;
      color: #a1a1aa;
      line-height: 1.35;
    }

    #${PANEL_ROOT_ID} .uip-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      align-items: center;
      margin-bottom: 6px;
    }

    #${PANEL_ROOT_ID} .uip-row:last-child {
      margin-bottom: 0;
    }

    #${PANEL_ROOT_ID} label {
      font-size: 11px;
      color: #e4e4e7;
    }

    #${PANEL_ROOT_ID} input,
    #${PANEL_ROOT_ID} select,
    #${PANEL_ROOT_ID} textarea,
    #${PANEL_ROOT_ID} button {
      width: 100%;
      border-radius: 7px;
      border: 1px solid #3f3f46;
      background: #101014;
      color: #f4f4f5;
      font-size: 12px;
      line-height: 1.2;
      padding: 7px 8px;
    }

    #${PANEL_ROOT_ID} input[readonly],
    #${PANEL_ROOT_ID} textarea[readonly] {
      opacity: 0.9;
      cursor: default;
    }

    #${PANEL_ROOT_ID} input[type="color"] {
      padding: 3px;
      min-height: 34px;
    }

    #${PANEL_ROOT_ID} textarea {
      min-height: 72px;
      resize: vertical;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
    }

    #${PANEL_ROOT_ID} input:focus,
    #${PANEL_ROOT_ID} select:focus,
    #${PANEL_ROOT_ID} textarea:focus,
    #${PANEL_ROOT_ID} button:focus {
      outline: none;
      border-color: #4f46e5;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.25);
    }

    #${PANEL_ROOT_ID} .uip-actions {
      display: flex;
      gap: 8px;
      margin-top: 4px;
    }

    #${PANEL_ROOT_ID} .uip-actions button {
      font-weight: 600;
      cursor: pointer;
      background: #18181c;
    }

    #${PANEL_ROOT_ID} .uip-actions button:hover {
      background: #22222a;
    }

    #${PANEL_ROOT_ID} .uip-toggle-btn {
      cursor: pointer;
      font-weight: 600;
    }

    #${PANEL_ROOT_ID} .uip-toggle-btn[data-enabled="true"] {
      background: #312e81;
      border-color: #6366f1;
      color: #eef2ff;
    }

    #${PANEL_ROOT_ID} .uip-status {
      margin-top: 6px;
      font-size: 11px;
      color: #a1a1aa;
      line-height: 1.3;
    }

    #${CURSOR_TOOLBAR_ROOT_ID} {
      position: fixed;
      top: 16px;
      right: 16px;
      z-index: 2147483647;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px;
      border: 1px solid #2f2f34;
      border-radius: 10px;
      background: #111318;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.32);
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    }

    #${CURSOR_TOOLBAR_ROOT_ID} button {
      border: 1px solid #3f3f46;
      border-radius: 8px;
      background: #191c23;
      color: #f4f4f5;
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
      padding: 8px 12px;
      cursor: pointer;
    }

    #${CURSOR_TOOLBAR_ROOT_ID} button[data-enabled="true"] {
      background: #14532d;
      border-color: #22c55e;
      color: #dcfce7;
    }
  `;

  document.head.appendChild(style);
};

const ensureCursorToolbar = () => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return null;
  }

  injectPanelStyles();

  let root = document.getElementById(CURSOR_TOOLBAR_ROOT_ID);
  if (!root) {
    root = document.createElement("div");
    root.id = CURSOR_TOOLBAR_ROOT_ID;
    root.innerHTML = `
      <button id="${CURSOR_TOOLBAR_TOGGLE_ID}" type="button" aria-pressed="false">Cursor Off</button>
    `;
    document.body.appendChild(root);
  }

  root.setAttribute("data-ui-helper", "cursor-toolbar");
  root.setAttribute("data-react-grab-ignore-events", "true");
  root.setAttribute("data-react-grab", "true");

  cursorToolbarNodesCache = null;
  const nodes = getCursorToolbarNodes();
  if (!nodes?.root) {
    return null;
  }

  if (nodes.root.dataset.bound !== "true") {
    const stopPropagationOnly = (event) => {
      event.stopPropagation();
    };

    nodes.root.addEventListener("pointerdown", stopPropagationOnly, true);
    nodes.root.addEventListener("pointerup", stopPropagationOnly, true);
    nodes.root.addEventListener("mousedown", stopPropagationOnly, true);
    nodes.root.addEventListener("mouseup", stopPropagationOnly, true);
    nodes.root.addEventListener("click", stopPropagationOnly, true);

    if (nodes.toggleButton instanceof HTMLButtonElement) {
      nodes.toggleButton.addEventListener("click", () => {
        toggleInspectMode();
      });
    }
    nodes.root.dataset.bound = "true";
  }

  updateInspectToggleUi();
  return nodes;
};

const bindPanelEvents = () => {
  const nodes = getPanelNodes();
  if (!nodes || nodes.root.dataset.bound === "true") {
    return;
  }

  if (nodes.root instanceof HTMLElement) {
    const panelRoot = nodes.root;

    // Keep panel pointer events from bubbling to page-level selection handlers.
    const stopPropagationOnly = (event) => {
      event.stopPropagation();
    };

    panelRoot.addEventListener("pointerdown", stopPropagationOnly, true);
    panelRoot.addEventListener("pointerup", stopPropagationOnly, true);
    panelRoot.addEventListener("mousedown", stopPropagationOnly, true);
    panelRoot.addEventListener("mouseup", stopPropagationOnly, true);
    panelRoot.addEventListener("click", stopPropagationOnly, true);
    panelRoot.addEventListener("dblclick", stopPropagationOnly, true);

    // Keep panel scrolling usable even when React Grab is intercepting interactions.
    panelRoot.addEventListener(
      "wheel",
      (event) => {
        const maxScrollTop = panelRoot.scrollHeight - panelRoot.clientHeight;
        if (maxScrollTop > 0) {
          panelRoot.scrollTop = Math.max(0, Math.min(maxScrollTop, panelRoot.scrollTop + event.deltaY));
        }
        event.preventDefault();
        event.stopPropagation();
      },
      { passive: false }
    );

    panelRoot.addEventListener(
      "touchstart",
      (event) => {
        const touch = event.touches?.[0];
        panelTouchStartY = touch ? touch.clientY : null;
        event.stopPropagation();
      },
      { passive: false }
    );

    panelRoot.addEventListener(
      "touchmove",
      (event) => {
        const touch = event.touches?.[0];
        if (touch && panelTouchStartY !== null) {
          const maxScrollTop = panelRoot.scrollHeight - panelRoot.clientHeight;
          const deltaY = panelTouchStartY - touch.clientY;
          panelTouchStartY = touch.clientY;
          if (maxScrollTop > 0) {
            panelRoot.scrollTop = Math.max(0, Math.min(maxScrollTop, panelRoot.scrollTop + deltaY));
          }
        }
        event.preventDefault();
        event.stopPropagation();
      },
      { passive: false }
    );

    panelRoot.addEventListener(
      "touchend",
      (event) => {
        panelTouchStartY = null;
        event.stopPropagation();
      },
      { passive: false }
    );
  }

  if (nodes.inspectToggle instanceof HTMLButtonElement) {
    nodes.inspectToggle.addEventListener("click", () => {
      toggleInspectMode();
    });
  }

  if (nodes.cursorMode instanceof HTMLSelectElement) {
    nodes.cursorMode.addEventListener("change", (event) => {
      applyCursorMode(event.currentTarget.value);
    });
  }

  if (nodes.fontSize instanceof HTMLInputElement) {
    nodes.fontSize.addEventListener("input", (event) => {
      applyPixelStyle("fontSize", event.currentTarget.value);
    });
  }
  if (nodes.fontWeight instanceof HTMLSelectElement) {
    nodes.fontWeight.addEventListener("change", (event) => {
      applyRawStyle("fontWeight", event.currentTarget.value);
    });
  }
  if (nodes.lineHeight instanceof HTMLInputElement) {
    nodes.lineHeight.addEventListener("input", (event) => {
      applyPixelStyle("lineHeight", event.currentTarget.value);
    });
  }
  if (nodes.letterSpacing instanceof HTMLInputElement) {
    nodes.letterSpacing.addEventListener("input", (event) => {
      applyPixelStyle("letterSpacing", event.currentTarget.value);
    });
  }
  if (nodes.textAlign instanceof HTMLSelectElement) {
    nodes.textAlign.addEventListener("change", (event) => {
      applyRawStyle("textAlign", event.currentTarget.value);
    });
  }
  if (nodes.textColor instanceof HTMLInputElement) {
    nodes.textColor.addEventListener("input", (event) => {
      applyRawStyle("color", event.currentTarget.value);
    });
  }
  if (nodes.backgroundColor instanceof HTMLInputElement) {
    nodes.backgroundColor.addEventListener("input", (event) => {
      applyRawStyle("backgroundColor", event.currentTarget.value);
    });
  }
  if (nodes.borderRadius instanceof HTMLInputElement) {
    nodes.borderRadius.addEventListener("input", (event) => {
      applyPixelStyle("borderRadius", event.currentTarget.value);
    });
  }
  if (nodes.padding instanceof HTMLInputElement) {
    nodes.padding.addEventListener("input", (event) => {
      applyRawStyle("padding", event.currentTarget.value);
    });
  }
  if (nodes.margin instanceof HTMLInputElement) {
    nodes.margin.addEventListener("input", (event) => {
      applyRawStyle("margin", event.currentTarget.value);
    });
  }
  if (nodes.notes instanceof HTMLTextAreaElement) {
    nodes.notes.addEventListener("input", (event) => {
      setStoredNotes(event.currentTarget.value);
      setCopyStatus("Change body updated.");
      updatePromptPreview();
    });
  }
  if (nodes.copyAllButton instanceof HTMLButtonElement) {
    nodes.copyAllButton.addEventListener("click", async () => {
      const promptText = buildPromptFromPanelState();
      updatePromptPreview();
      const copied = await copyToClipboard(promptText);
      setCopyStatus(copied ? "Copied all changes. Paste into AI." : "Copy failed. Try again.");
    });
  }
  if (nodes.resetButton instanceof HTMLButtonElement) {
    nodes.resetButton.addEventListener("click", () => {
      resetLiveEditsForSelection();
      setCopyStatus("Live edits reset for current selection.");
      updatePromptPreview();
    });
  }

  nodes.root.dataset.bound = "true";
};

const ensurePanel = () => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return null;
  }

  injectPanelStyles();

  let root = document.getElementById(PANEL_ROOT_ID);
  const needsRebuild =
    !root ||
    !root.querySelector(`#${PANEL_INSPECT_TOGGLE_ID}`) ||
    !root.querySelector(`#${PANEL_FONT_FAMILY_ID}`) ||
    !root.querySelector(`#${PANEL_LOADED_FONTS_ID}`);

  if (needsRebuild) {
    if (root) {
      root.remove();
    }
    root = document.createElement("aside");
    root.id = PANEL_ROOT_ID;
    root.innerHTML = `
      <div class="uip-header">
        <h3 class="uip-title">Design Panel (Live)</h3>
        <p class="uip-subtitle">Select with React Grab, then tweak styles like a mini Figma inspector.</p>
      </div>
      <div class="uip-meta" id="${PANEL_SELECTED_META_ID}"></div>

      <section class="uip-group">
        <h4>Cursor Toolbar</h4>
        <div class="uip-row">
          <label for="${PANEL_INSPECT_TOGGLE_ID}">Inspect mode</label>
          <button id="${PANEL_INSPECT_TOGGLE_ID}" type="button" class="uip-toggle-btn" aria-pressed="false">Enable Inspect</button>
        </div>
        <div class="uip-row">
          <label for="${PANEL_CURSOR_MODE_ID}">Cursor mode</label>
          <select id="${PANEL_CURSOR_MODE_ID}">
            <option value="same">React Grab cursor</option>
            <option value="custom">Custom crosshair</option>
          </select>
        </div>
        <p class="uip-note">Keep inspect off while editing panel fields for normal focus and scroll behavior.</p>
      </section>

      <section class="uip-group">
        <h4>Typography</h4>
        <div class="uip-row">
          <label for="${PANEL_FONT_FAMILY_ID}">Font family</label>
          <input id="${PANEL_FONT_FAMILY_ID}" type="text" readonly />
        </div>
        <div class="uip-row">
          <label for="${PANEL_FONT_SIZE_ID}">Font size (px)</label>
          <input id="${PANEL_FONT_SIZE_ID}" type="number" min="1" step="1" />
        </div>
        <div class="uip-row">
          <label for="${PANEL_FONT_WEIGHT_ID}">Font weight</label>
          <select id="${PANEL_FONT_WEIGHT_ID}">
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
          </select>
        </div>
        <div class="uip-row">
          <label for="${PANEL_LINE_HEIGHT_ID}">Line height (px)</label>
          <input id="${PANEL_LINE_HEIGHT_ID}" type="number" min="1" step="1" />
        </div>
        <div class="uip-row">
          <label for="${PANEL_LETTER_SPACING_ID}">Letter spacing (px)</label>
          <input id="${PANEL_LETTER_SPACING_ID}" type="number" step="0.1" />
        </div>
        <div class="uip-row">
          <label for="${PANEL_TEXT_ALIGN_ID}">Text align</label>
          <select id="${PANEL_TEXT_ALIGN_ID}">
            <option value="left">left</option>
            <option value="center">center</option>
            <option value="right">right</option>
            <option value="justify">justify</option>
          </select>
        </div>
        <label for="${PANEL_LOADED_FONTS_ID}">Loaded fonts</label>
        <textarea id="${PANEL_LOADED_FONTS_ID}" rows="3" readonly></textarea>
      </section>

      <section class="uip-group">
        <h4>Color</h4>
        <div class="uip-row">
          <label for="${PANEL_TEXT_COLOR_ID}">Text color</label>
          <input id="${PANEL_TEXT_COLOR_ID}" type="color" />
        </div>
        <div class="uip-row">
          <label for="${PANEL_BG_COLOR_ID}">Background</label>
          <input id="${PANEL_BG_COLOR_ID}" type="color" />
        </div>
      </section>

      

      <section class="uip-group">
        
        <label for="${PANEL_PROMPT_PREVIEW_ID}">Prompt preview</label>
        <textarea id="${PANEL_PROMPT_PREVIEW_ID}" rows="8" readonly></textarea>
        <div class="uip-actions">
          <button id="${PANEL_COPY_CHANGES_BUTTON_ID}" type="button">Copy to AI</button>
          <button id="${PANEL_RESET_BUTTON_ID}" type="button">Reset Live Edits</button>
        </div>
        <div id="${PANEL_COPY_STATUS_ID}" class="uip-status">Ready to copy.</div>
      </section>
    `;
    document.body.appendChild(root);
  }

  root.setAttribute("data-ui-helper", "design-panel");
  root.setAttribute("data-react-grab-ignore-events", "true");
  root.setAttribute("data-react-grab", "true");
  root.setAttribute("data-grab-active", "false");
  root.setAttribute("data-inspect-enabled", String(inspectModeEnabled));
  root.setAttribute("data-panel-visible", String(inspectModeEnabled));

  panelNodesCache = null;
  const nodes = getPanelNodes();
  if (nodes?.notes instanceof HTMLTextAreaElement && !nodes.notes.value) {
    nodes.notes.value = getStoredNotes();
  }
  if (nodes?.cursorMode instanceof HTMLSelectElement) {
    nodes.cursorMode.value = cursorMode;
  }
  if (nodes?.copyStatus instanceof HTMLElement && !nodes.copyStatus.textContent) {
    nodes.copyStatus.textContent = "Ready to copy.";
  }
  updateInspectToggleUi();
  bindPanelEvents();
  bindFontEvents();
  if (typeof document.fonts?.ready?.then === "function") {
    document.fonts.ready.then(updateLoadedFontsSummary);
  }
  updateLoadedFontsSummary();
  updatePromptPreview();
  syncControlsFromSelection();
  return nodes;
};

if (typeof window !== "undefined" && typeof document !== "undefined") {
  cursorMode = getStoredCursorMode();
  applyCursorMode(cursorMode);
}

const plugin = {
  name: PLUGIN_NAME,
  theme: {
    selectionBox: {
      enabled: false,
    },
    dragBox: {
      enabled: false,
    },
    grabbedBoxes: {
      enabled: false,
    },
    elementLabel: {
      enabled: false,
    },
    toolbar: {
      enabled: false,
    },
  },
  setup: (api) => {
    ensureCursorToolbar();
    ensurePanel();
    syncGrabRuntime(api);
  },
  hooks: {
    onActivate: () => {
      ensureCursorToolbar();
      ensurePanel();
      const nodes = getPanelNodes();
      if (nodes?.root) {
        nodes.root.setAttribute("data-grab-active", "true");
      }
    },
    onDeactivate: () => {
      ensureCursorToolbar();
      const nodes = getPanelNodes();
      if (nodes?.root) {
        nodes.root.setAttribute("data-grab-active", "false");
      }
    },
    onElementSelect: (element) => {
      if (!inspectModeEnabled) {
        return false;
      }
      const nodes = ensurePanel();
      const isPanelElement =
        !!nodes?.root &&
        (nodes.root.contains(element) ||
          (element instanceof Element &&
            (element.closest('[data-ui-helper="design-panel"]') ||
              element.closest('[data-ui-helper="cursor-toolbar"]'))));
      if (isPanelElement) {
        return false;
      }
      setSelectedElement(element);
    },
    onStateChange: (state) => {
      const nodes = ensurePanel();
      if (nodes?.root) {
        nodes.root.setAttribute("data-grab-active", String(state.isActive));
      }
    },
  },
};

unregisterPlugin(PLUGIN_NAME);
registerPlugin(plugin);

const ensureUiControls = () => {
  ensureCursorToolbar();
  ensurePanel();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ensureUiControls, { once: true });
} else {
  ensureUiControls();
}
