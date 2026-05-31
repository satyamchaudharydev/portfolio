const CHIP_PALETTE = {
  outer: "bg-[#f1e7d8] text-[#2a2118]",
  inner: "border-[#b7a58f]/70",
  divider: "border-[#756c638a]",
  icon: "text-[#e5791b]",
  text: "text-[#2a2118]"
};

const CHIP_SHAPE_STYLE = {
  clipPath:
    "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)"
};

function getActionIcon(label) {
  if (label === "View Project") return "↗";
  if (label === "Download APK") return "↓";
  return "▶";
}

const sizeClasses = {
  default: {
    root: "min-h-[2.55rem] sm:min-h-[3.25rem]",
    iconWrap: "h-[3.1rem] w-[3.3rem]",
    icon: "text-[1.7rem]",
    text: "px-5 text-[1.02rem]"
  },
  compact: {
    root: "min-h-[2.35rem] sm:min-h-[2.55rem]",
    iconWrap: "h-[2.45rem] w-[2.55rem]",
    icon: "text-[1.25rem]",
    text: "px-3 text-[0.78rem] sm:px-4 sm:text-[0.86rem]"
  }
};

export default function ProjectActionChip({ label, href, size = "default", className = "" }) {
  const palette = CHIP_PALETTE;
  const classes = sizeClasses[size] ?? sizeClasses.default;
  const isVideo = label === "View Video";
  const icon = getActionIcon(label);

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-[3px] border border-dashed ${palette.inner}`}
        style={CHIP_SHAPE_STYLE}
      />
      <span className="relative z-[1] flex items-center">
        <span className={`grid ${classes.iconWrap} place-items-center border-r ${palette.divider} ${palette.icon}`}>
          <span className={`font-display ${classes.icon} leading-none ${isVideo ? "translate-x-[1px]" : ""}`}>
            {icon}
          </span>
        </span>
        <span className={`${classes.text} font-domaine uppercase tracking-[0.06em] ${palette.text}`}>{label}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <span
        className={`relative inline-flex ${classes.root} overflow-hidden opacity-60 ${palette.outer} ${className}`}
        style={CHIP_SHAPE_STYLE}
        aria-disabled="true"
      >
        {content}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group relative inline-flex ${classes.root} overflow-hidden shadow-[0_1px_0_rgba(255,255,255,0.24)] transition-transform duration-200 hover:-translate-y-[1px] ${palette.outer} ${className}`}
      style={CHIP_SHAPE_STYLE}
    >
      {content}
    </a>
  );
}

export { ProjectActionChip };
