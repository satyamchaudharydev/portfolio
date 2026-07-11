import { useId } from "react";

export default function PixelPatternRule({
  label = "MAKING SOFTWARE",
  className = "",
  height = 10
}) {
  const patternId = `pixel-pattern-${useId().replace(/:/g, "")}`;

  return (
    <div className={`pixel-pattern-rule ${className}`} style={{ "--rule-height": `${height}px` }}>
      <svg width="100%" height={height} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="14"
          height={height}
          patternUnits="userSpaceOnUse"
          viewBox={`0 0 14 ${height}`}
        >
          <g fill="currentColor">
            <rect x="1" y="1" width="1.25" height="1.25" />
            <rect x="4" y="1" width="1.25" height="1.25" />
            <rect x="7" y="1" width="1.25" height="1.25" />
            <rect x="10" y="1" width="1.25" height="1.25" />
            <rect x="2.5" y="3.25" width="1.25" height="1.25" />
            <rect x="5.5" y="3.25" width="1.25" height="1.25" />
            <rect x="8.5" y="3.25" width="1.25" height="1.25" />
            <rect x="1" y="5.5" width="1.25" height="1.25" />
            <rect x="4" y="5.5" width="1.25" height="1.25" />
            <rect x="7" y="5.5" width="1.25" height="1.25" />
            <rect x="10" y="5.5" width="1.25" height="1.25" />
            <rect x="2.5" y="7.75" width="1.25" height="1.25" />
            <rect x="5.5" y="7.75" width="1.25" height="1.25" />
            <rect x="8.5" y="7.75" width="1.25" height="1.25" />
          </g>
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>

      {label ? <span className="pixel-pattern-rule__label">{label}</span> : null}
    </div>
  );
}
