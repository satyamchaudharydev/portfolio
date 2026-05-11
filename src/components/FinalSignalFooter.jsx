import billboardFrame from "../assets/footer/billboard-frame.png";
import billboardLegs from "../assets/footer/billboard-legs.png";
import billboardPaper from "../assets/footer/billboard-paper.png";
import bulletArrows from "../assets/footer/bullet-arrows.png";
import dividerLine from "../assets/footer/divider-line.png";
import footerBg from "../assets/footer/footer-bg.png";
import grungeOverlay from "../assets/footer/grunge-overlay.png";
import hireStamp from "../assets/footer/hire-stamp.png";
import lightLeft from "../assets/footer/light-left.png";
import lightMid from "../assets/footer/light-mid.png";
import lightRight from "../assets/footer/light-right.png";
import paperGrunge from "../assets/footer/paper-grunge.png";
import shadowOverlay from "../assets/footer/shadow-overlay.png";
import starIcon from "../assets/footer/star-icon.png";

const finalSignalBullets = [
  "Ship fast. Ship right.",
  "Systems that scale.",
  "Pixel-perfect interfaces.",
  "Clean code. Clear interfaces.",
  "Curiosity that never stops."
];

function BillboardLight({ src, className = "" }) {
  return (
    <div className={`pointer-events-none absolute ${className}`}>
      <span className="absolute left-1/2 top-[1.5rem] h-[17rem] w-[14.5rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,230,172,0.44)_0%,rgba(255,230,172,0.2)_23%,rgba(255,230,172,0.06)_44%,rgba(0,0,0,0)_72%)]" />
      <img src={src} alt="" aria-hidden="true" className="relative z-[1] w-[10.4rem] select-none object-contain mix-blend-darken" />
    </div>
  );
}

export default function FinalSignalFooter() {
  const arrowSpritePositions = ["0% 50%", "33.3% 50%", "66.6% 50%", "100% 50%", "66.6% 50%"];

  return (
    <section className="relative overflow-hidden pb-5 sm:pb-7" aria-label="Final signal footer">
      <div className="absolute inset-0 bg-[#0f0f0f]" />
      <div
        className="absolute inset-x-0 top-0 h-[52%] bg-repeat-x bg-top [background-size:922px_auto]"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      <div className="absolute inset-x-0 top-[37%] h-px bg-[#7d6346]/40" />

      <div className="relative z-[2] mx-auto w-[min(97%,1670px)] px-3 pb-5 pt-[4.7rem] sm:px-5 sm:pb-8 sm:pt-[5.8rem]">
        <div className="relative mx-auto w-[96%] max-w-[1430px]">
          <div className="pointer-events-none absolute inset-x-0 -top-[2.5rem] z-[4] hidden md:block">
            <BillboardLight src={lightLeft} className="left-[13.4%]" />
            <BillboardLight src={lightMid} className="left-1/2 -translate-x-1/2" />
            <BillboardLight src={lightRight} className="right-[13.4%]" />
          </div>

          <img
            src={shadowOverlay}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[0.9rem] left-1/2 z-[1] w-[72%] max-w-[39rem] -translate-x-1/2 select-none object-contain opacity-50 mix-blend-multiply"
          />

          <img src={billboardFrame} alt="" aria-hidden="true" className="pointer-events-none relative z-[1] block w-full select-none object-contain" />

          <div className="absolute inset-[3.7%_2.6%_3.6%_2.7%] z-[3] overflow-hidden">
            <img src={billboardPaper} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover" />
            <img
              src={paperGrunge}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover opacity-[0.18] mix-blend-multiply"
            />
            <img
              src={grungeOverlay}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-full w-[23%] select-none object-cover opacity-[0.26] mix-blend-multiply"
            />

            <div className="relative grid h-full grid-cols-1 px-[4.8%] pb-[4.6%] pt-[4.2%] lg:grid-cols-[1.06fr_0.94fr]">
              <div className="flex flex-col lg:pr-[5.8%]">
                <div className="mb-5 flex items-center gap-3 font-display text-[clamp(0.9rem,1.15vw,1.55rem)] uppercase leading-none tracking-[0.02em] text-[#17130e]">
                  <span>04</span>
                  <span className="text-[1.4em]">&mdash;</span>
                  <span>Final Signal</span>
                  <span className="h-px flex-1 bg-[#1f1710]/72" />
                </div>

                <h3 className="m-0 font-display text-[clamp(3.5rem,9.2vw,11.8rem)] uppercase leading-[0.84] tracking-[0.005em] text-[#0f1112]">
                  <span className="block">Available</span>
                  <span className="block">For Work.</span>
                </h3>
              </div>

              <div className="relative mt-6 border-t border-[#2e2419]/35 pt-5 lg:mt-0 lg:border-t-0 lg:pl-[6.6%] lg:pt-0">
                <img
                  src={dividerLine}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-1 hidden h-[96%] w-[0.52rem] select-none object-fill opacity-85 mix-blend-multiply lg:block"
                />

                <div className="lg:pl-[1.5rem]">
                  <div className="flex items-start gap-3">
                    <img src={starIcon} alt="" aria-hidden="true" className="mt-1.5 h-[2.85rem] w-[2.85rem] select-none object-contain mix-blend-multiply" />
                    <p className="m-0 font-display text-[clamp(2.05rem,2.95vw,3.85rem)] uppercase leading-[0.9] text-[#13100c]">
                      <span className="block">I Build Things</span>
                      <span className="block">That Work.</span>
                    </p>
                  </div>

                  <ul className="mt-4 grid gap-1.5 font-body text-[clamp(1.5rem,2.1vw,2.65rem)] leading-[1.22] text-[#16120d] sm:mt-5 sm:gap-1.5">
                    {finalSignalBullets.map((item, index) => (
                      <li key={item} className="flex items-baseline gap-3">
                        <span
                          className="mt-[0.18em] inline-block h-[1.03em] w-[1.16em] bg-no-repeat [background-size:390%_100%]"
                          style={{
                            backgroundImage: `url(${bulletArrows})`,
                            backgroundPosition: arrowSpritePositions[index]
                          }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <img
                    src={hireStamp}
                    alt="Hire me"
                    className="mt-5 w-[92%] max-w-[28.6rem] select-none object-contain mix-blend-multiply sm:mt-6 sm:w-[84%]"
                  />

                  <div className="mt-5 max-w-[82%] border-y border-[#1d1510]/72 py-3 sm:mt-6">
                    <p className="m-0 font-display text-[clamp(1.6rem,2.2vw,3.05rem)] uppercase leading-[1.13] tracking-[0.02em] text-[#17120e]">
                      Let&apos;s Build Something
                      <span className="block">Great Together.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src={billboardLegs}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-13%] left-1/2 z-[1] w-[84.8%] max-w-[1260px] -translate-x-1/2 select-none object-contain mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
