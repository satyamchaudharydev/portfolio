import { useId } from "react";

export default function ArchiveStamp({
  className = "",
  year = "2021",
  topText = "ARCHIVE",
  bottomText = "PORTFOLIO",
  centerLabel = "EST."
}) {
  const stampId = useId().replace(/:/g, "");
  const topArcId = `archive-stamp-top-${stampId}`;
  const bottomArcId = `archive-stamp-bottom-${stampId}`;
  const distressFilterId = `archive-stamp-distress-${stampId}`;

  return (
    <div
      className={className}
      aria-label={`${topText} ${centerLabel} ${year} ${bottomText}`}
    >
      <svg viewBox="0 0 160 160" className="h-full w-full text-[#4e453c]/70" role="img" aria-hidden="true">
        <defs>
          <path id={topArcId} d="M 25 80 A 55 55 0 0 1 135 80" />
          <path id={bottomArcId} d="M 135 80 A 55 55 0 0 1 25 80" />
          <filter id={distressFilterId} x="-12%" y="-12%" width="124%" height="124%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.06"
              numOctaves="3"
              seed="7"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3.8"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        <g filter={`url(#${distressFilterId})`}>
          <circle cx="80" cy="80" r="72" fill="none" stroke="currentColor" strokeWidth="2.4" />
          <circle cx="80" cy="80" r="68" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.72" />
          <circle cx="80" cy="80" r="50" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.9" />
          <circle cx="80" cy="80" r="46" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
          <text fill="currentColor" fontSize="14" fontFamily='"PPEditorialNew-Regular", serif' letterSpacing="5.4">
            <textPath href={`#${topArcId}`} startOffset="50%" textAnchor="middle">
              {topText}
            </textPath>
          </text>

          <text fill="currentColor" fontSize="14" fontFamily='"PPEditorialNew-Regular", serif' letterSpacing="4.6">
            <textPath href={`#${bottomArcId}`} startOffset="50%" textAnchor="middle">
              {bottomText}
            </textPath>
          </text>

          <text x="80" y="69" textAnchor="middle" fill="currentColor" fontSize="16" fontFamily='"PPEditorialNew-Regular", serif' letterSpacing="2.8">
            {centerLabel}
          </text>
          <text x="80" y="94" textAnchor="middle" fill="currentColor" fontSize="26" fontFamily='"PPEditorialNew-Ultrabold", serif' letterSpacing="1.2">
            {year}
          </text>
          <circle cx="38" cy="80" r="2.7" fill="currentColor" />
          <circle cx="122" cy="80" r="2.7" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}
