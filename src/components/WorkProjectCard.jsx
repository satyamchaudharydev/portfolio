import ProjectActionChip from "./ProjectActionChip";

export default function WorkProjectCard({
  featured = false,
  title,
  roleLine,
  years,
  summary,
  tags = [],
  mediaStyle,
  mediaTiles = [],
  imageSrc,
  videoSrc,
  actionLabel = "View Project",
  actionHref
}) {
  const articleClass =
    "group relative flex h-full cursor-pointer flex-col border border-[rgba(52,43,32,0.54)] p-[0.56rem] shadow-[inset_0_0_0_1px_rgba(118,101,79,0.21)] before:pointer-events-none before:absolute before:inset-[4px] before:border before:border-dashed before:border-[rgba(53,44,33,0.34)] before:content-['']";

  const mediaClass = `relative w-full overflow-hidden border border-[rgba(20,20,19,0.66)] bg-[#111418] bg-cover bg-center ${
    featured ? "aspect-[16/10] md:aspect-[16/7.2]" : "aspect-[16/10] md:aspect-[16/10.1]"
  }`;

  const titleClass = featured
    ? "m-0 text-balance font-domaine text-[clamp(2.2rem,7vw,4.45rem)] uppercase leading-[0.86] tracking-[-0.01em] text-[#17130f] md:text-[clamp(4.25rem,4.8vw,6.7rem)]"
    : "m-0 text-balance font-domaine text-[clamp(1.45rem,4.4vw,2rem)] uppercase leading-[0.9] tracking-[-0.01em] text-[#17130f]";

  const summaryClass = featured
    ? "mt-[0.5rem] m-0 font-body text-[0.98rem] leading-[1.28] tracking-[-0.006em] text-[#1f1a15] md:text-[clamp(1.46rem,1.34vw,2.1rem)]"
    : "mt-[0.5rem] m-0 font-body text-[0.98rem] leading-[1.28] tracking-[-0.006em] text-[#1f1a15] md:text-[clamp(1.18rem,1.12vw,1.7rem)]";


  return (
    <article className={articleClass}>
      {actionHref ? (
        <span
          className="pointer-events-none absolute inset-0 z-[2] bg-[rgba(9,10,12,0.04)] opacity-0 transition-opacity duration-200 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
          aria-hidden="true"
        />
      ) : null}
      <div className={mediaClass} style={mediaStyle}>
        {videoSrc ? (
          <video
            className="absolute inset-0 h-full w-full object-cover saturate-50"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${title} preview video`}
          />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 h-full w-full object-cover saturate-50"
            aria-hidden="true"
            loading="lazy"
          />
        ) : mediaTiles.length ? (
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-[2px] bg-[rgba(14,15,18,0.94)]" aria-hidden="true">
            {mediaTiles.map((tileSrc, tileIndex) => (
              <span
                key={`${title}-tile-${tileIndex}`}
                className="relative block bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(172deg, rgba(8, 10, 14, 0.2), rgba(6, 7, 10, 0.82)), url(${tileSrc})`
                }}
              >
                <span
                  className="absolute inset-0 bg-[linear-gradient(170deg,rgba(255,255,255,0.06),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.58))]"
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        ) : null}
        <span
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.6)),radial-gradient(120%_116%_at_100%_0%,rgba(255,255,255,0.18),transparent_36%)]"
          aria-hidden="true"
        />
        {actionHref ? (
          <div className="absolute inset-0 z-[3] flex items-end justify-start p-4 opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
            <ProjectActionChip label={actionLabel} href={actionHref} size="compact" />
          </div>
        ) : null}
      </div>

      <div className="relative z-[1] mt-[0.45rem] flex flex-1 flex-col gap-2 px-2 py-3 sm:py-4">
        <div className="grid grid-cols-1 items-baseline gap-x-[0.72rem] gap-y-[0.32rem] border-b border-[rgba(42,33,23,0.45)] pb-[0.41rem] md:grid-cols-[minmax(0,auto)_minmax(0,1fr)]">
          <h3 className={titleClass}>{title}</h3>
          <div className="mt-2 flex min-w-0 flex-col gap-[0.1rem] pt-[0.16rem] md:mt-4 md:items-end md:justify-end">
            <p className="m-0 text-balance font-domaine text-[0.72rem] uppercase leading-[1.18] tracking-[0.04em] text-[rgba(34,28,21,0.92)] md:text-[1rem]">
              {roleLine}
            </p>
            <p className="m-0 font-domaine text-[0.72rem] uppercase leading-[1.08] tracking-[0.04em] text-[rgba(34,28,21,0.92)] md:text-[0.9rem]">
              {years}
            </p>
          </div>
        </div>

        <p className={summaryClass}>{summary}</p>

        <ul
          className="m-0 mt-auto flex list-none flex-wrap gap-[0.4rem] border-t border-[rgba(40,32,24,0.34)] pb-0 pl-0 pr-0 pt-[0.58rem]"
          aria-label={`${title} tech stack`}
        >
          {tags.map((item) => (
            <li
              key={`${title}-${item}`}
              className="inline-flex min-h-[1.34rem] font-domaine items-center justify-center rounded-[1px] border border-[rgba(54,44,33,0.46)] bg-[rgba(246,239,226,0.76)] px-[0.54rem] py-[0.16rem] text-[0.62rem] uppercase tracking-[0.03em] text-[#2b231b] sm:text-[0.68rem] md:text-[0.9rem]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
