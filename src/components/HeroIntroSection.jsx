import ArchiveStamp from "./ArchiveStamp";
import { RibbonEndIcon } from "./icons";

const heroTickerItems = [
  "Building Sigma so developers can edit UI as easily as Figma",
  "700K+ views on Uiverse.io",
  "Invited by freeCodeCamp founder Quincy Larson"
];

export default function HeroIntroSection({ heroPortrait }) {
  return (
    <section className="bg-transparent shadow-none border-b border-ink/30">
        <div className="relative w-[97%] mx-auto mt-2">
          <RibbonEndIcon
            side="left"
            className="pointer-events-none absolute left-0 top-1/2 z-[1] h-[calc(100%+0.6rem)] w-7 -translate-x-[58%] -translate-y-1/2 text-ink sm:w-8"
          />
          <RibbonEndIcon
            side="right"
            className="pointer-events-none absolute right-0 top-1/2 z-[1] h-[calc(100%+0.6rem)] w-7 translate-x-[58%] -translate-y-1/2 text-ink sm:w-8"
          />
          <div className="overflow-hidden bg-ink py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-paper sm:text-xs">
            <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap px-4 sm:gap-10 sm:px-6">
              {[...Array(4)].map((_, index) => (
                <span key={index} className="inline-flex items-center gap-8 sm:gap-10">
                  {heroTickerItems.map((item) => (
                    <span key={`${index}-${item}`} className="inline-flex items-center gap-3">
                      <span aria-hidden="true">◆</span>
                      <span>{item}</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>

      <div className="px-3 py-4 sm:px-6 md:py-4">
        <h1
          className="mt-2 text-center text-[clamp(2.2rem,10vw,7.5rem)] leading-[0.95] text-ink"
          style={{ fontFamily: '"UnifrakturCook", serif' }}
        >
          The Satyam Gazette
        </h1>
      </div>

      <div className="mt-4 grid gap-0 border-t-[1px] border-inkSoft px-4 sm:px-8 lg:grid-cols-[1fr_1.35fr]">
        <article className="px-0 pb-6 pt-6 lg:border-r-[1px] lg:border-inkSoft lg:pr-8">
          <div className="relative flex flex-col items-start gap-3 pt-3 lg:flex-row lg:items-center">
            <h2 className="pr-[6.4rem] font-display uppercase leading-[0.84] tracking-[-0.02em] text-ink sm:pr-[7.8rem] lg:pr-0 lg:text-[clamp(2.7rem,12vw,7.75rem)] lg:leading-[0.88]">
              <span className="ml-1 block text-[3.35rem] font-[700] tracking-[-0.01em] sm:text-[clamp(3.9rem,8.6vw,5.65rem)] lg:text-[clamp(1.8rem,7vw,6.25rem)]">
                I <span className="font-domaine">co</span>de <span className="font-headline">&amp;</span>
              </span>
              <span className="block text-[5rem] font-[800] tracking-[0.02em] sm:text-[clamp(5.7rem,12vw,7.2rem)] lg:text-[clamp(2.3rem,9vw,7.5rem)]">
                <span className="font-domaine">cr</span>eate
              </span>
              <span className="ml-1 block text-[4rem] font-[600] tracking-[0.02em] sm:text-[clamp(4.7rem,10vw,6.7rem)] lg:text-[clamp(2rem,8vw,7.5rem)]">
                Stuff
              </span>
            </h2>
            <ArchiveStamp className="absolute right-0 top-5 h-[4.9rem] w-[4.9rem] shrink-0 rotate-[8deg] opacity-80 sm:top-7 sm:h-[6.1rem] sm:w-[6.1rem] lg:relative lg:top-24 lg:h-[6.2rem] lg:w-[6.2rem] lg:self-start" />
          </div>
          <div className="mt-3 border-b border-ink/30" />


          <div className="mt-5 space-y-4 text-[clamp(1.02rem,4.4vw,1.38rem)] leading-[1.38] text-[#17130f] sm:text-[1.18rem] md:text-[1.28rem]">
            <p className="dropcap font-body text-justify font-[400]">
              I started coding to build things—it's what keeps me going and gives
              me confidence. Creating through code empowers me, and I'm inspired
              by the idea that{" "}
              <em>everything around us is someone's life's work.</em>
            </p>
            <div className="flex flex-col items-start gap-2 text-[#17130f] sm:flex-row sm:items-center sm:gap-3">
              <img
                width="20"
                height="20"
                src="https://cdn.prod.website-files.com/5f2429f172d117fcee10e819/6163fb37d21284071134f3d7_ams-logo.svg"
                loading="lazy"
                alt="Amterdam-based independent Designer &amp; Developer with focus on Art direction, Motion and Branding."
              />
              <span className="font-instrument text-[1.05rem] font-[500] italic leading-[1.15] sm:text-[1.12rem]">
                Everything around us is someone's life's work.
              </span>
              <img
                width="20"
                height="20"
                src="https://cdn.prod.website-files.com/5f2429f172d117fcee10e819/6163fb37d21284071134f3d7_ams-logo.svg"
                loading="lazy"
                alt="Amterdam-based independent Designer &amp; Developer with focus on Art direction, Motion and Branding."
              />
            </div>
            <p className="text-justify">
              That idea stays with me. I build to understand, design to express,
              and make things that carry a part of who I am. I want my work to
              show not just what I can do, but how I see the world.
            </p>

            <button
              type="button"
              className="group mt-[1.15rem] w-full max-w-[24rem] text-[#17130f] focus-visible:outline-none"
              aria-label="Show all work"
            >
              <span className="relative block min-h-0 aspect-[3.2/1] overflow-hidden rounded-[52%_48%_50%_50%/60%_60%_40%_40%] border border-[rgba(23,19,15,0.38)] bg-[#d3cbc2]">
                <span className="absolute inset-0 flex items-center justify-center px-4 text-center font-display text-[clamp(1.8rem,7vw,4.6rem)] font-bold leading-none tracking-[0.02em] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] will-change-[transform,opacity] group-hover:translate-x-[115%] group-hover:opacity-0 group-focus-visible:translate-x-[115%] group-focus-visible:opacity-0">
                  ALL WORK
                </span>
                <span
                  className="absolute inset-0 flex translate-x-[-115%] items-center justify-center opacity-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] will-change-[transform,opacity] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 280 62" className="h-[26px] w-[180px] sm:h-[34px] sm:w-[240px]" fill="none">
                    <path d="M14 31H226" stroke="currentColor" strokeWidth="3.2" />
                    <path
                      d="M226 31C213 22 204 14 191 8"
                      stroke="currentColor"
                      strokeWidth="3.2"
                    />
                    <path
                      d="M226 31C213 40 204 48 191 54"
                      stroke="currentColor"
                      strokeWidth="3.2"
                    />
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </article>

        <aside className="px-0 pb-6 pt-6 lg:pl-8">
          <figure className="h-[300px] overflow-hidden border-[1px] border-ink sm:h-[390px] md:h-[500px] lg:h-[720px] xl:h-[700px]">
            <img
              src={heroPortrait}
              alt="Split portrait and design tools illustration of Satyam Chaudhary"
              className="h-full w-full object-cover object-center"
            />
          </figure>

        </aside>
      </div>
    </section>
  );
}
