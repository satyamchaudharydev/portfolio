import glitchHousePreview from "../assets/work/glitch tb-new.mp4";
import brightchampsPreview from "../assets/work/brightchamps-preview.png";
import tekiePreview from "../assets/work/tekie-preview.png";
import zuaiPreview from "../assets/work/zuAi-preview.png";
import texture1 from "../assets/textures/ink-texture-1.png";
import texture2 from "../assets/textures/ink-texture-2.png";
import texture3 from "../assets/textures/ink-texture-3.png";
import WorkProjectCard from "./WorkProjectCard";
import Separator from "./Separator";

const workCards = [
  {
    title: "GLITCH.HOUSE",
    category: "DIGITAL PRODUCT",
    roleLine: "FOUNDING ENGINEER + FULL STACK ENGINEER",
    years: "2024 - PRESENT",
    summary:
      "Discover and build high-quality projects through structured build guides, comprehensive component lists, and personalised recommendations. Launching soon on iOS, Android & Web.",
    tags: ["NEXT.JS", "EXPO", "NATIVEWIND", "POSTGRES", "DRIZZLE", "TRPC", "REDIS"],
    actionHref: "https://glitch.house",
    videoSrc: glitchHousePreview,
    texture: texture2,
    overlayTint: "rgba(10, 17, 24, 0.36)",
    mediaTiles: [texture2, texture3, texture1, texture1, texture2, texture3]
  },
  {
    title: "ZUAI",
    category: "AI TUTORING",
    roleLine: "FRONTEND ENGINEER",
    years: "2024 - 2025",
    summary: "Streaming AI tutoring UI and collaborative lesson experiences.",
    tags: ["NEXT.JS", "REACT", "ZUSTAND", "SSE", "MARKDOWN"],
    actionHref: "https://www.zuai.co",
    imageSrc: zuaiPreview,
    texture: texture1,
    overlayTint: "rgba(14, 10, 26, 0.34)",
    mediaTiles: [texture2, texture1, texture3, texture3, texture2, texture1]
  },
  {
    title: "BRIGHTCHAMPS",
    category: "EDUCATION PLATFORM",
    roleLine: "FRONTEND DEVELOPER",
    years: "2024 - 2024",
    summary: "Interactive classroom flows and student-first learning interfaces.",
    tags: ["REACT NATIVE", "EXPO", "TYPESCRIPT", "FRAMER"],
    actionHref: "https://brightchamps.com",
    imageSrc: brightchampsPreview,
    texture: texture3,
    overlayTint: "rgba(8, 16, 22, 0.36)",
    mediaTiles: [texture1, texture2, texture3, texture2, texture1, texture3]
  },
  {
    title: "TEKIE",
    category: "CODING EDUCATION",
    roleLine: "FRONTEND ENGINEER",
    years: "2022 - 2025",
    summary: "Coding tools and browser-based lessons for early STEM learners.",
    tags: ["REACT", "VITE", "PYODIDE", "BLOCKLY", "FLASK"],
    actionHref: "https://www.tekie.in",
    imageSrc: tekiePreview,
    texture: texture1,
    overlayTint: "rgba(10, 17, 24, 0.38)",
    mediaTiles: [texture3, texture2, texture1, texture1, texture3, texture2]
  }
];

const makeCardMediaStyle = (textureUrl, overlayTint) => ({
  backgroundImage: `linear-gradient(165deg, ${overlayTint}, rgba(8, 8, 10, 0.86)), url(${textureUrl})`,
  backgroundSize: "cover",
  backgroundPosition: "center"
});

export default function WorkHighlightsSection() {
  const featuredCard = workCards[0];
  const projectCards = workCards.slice(1);

  return (
    <section className="relative isolate overflow-hidden bg-transparent p-4 text-primary sm:p-5 md:max-lg:p-3 sm:pt-0">
      <div className="flex flex-col items-start gap-5 sm:py-8 py-1 max-md:gap-4 md:flex-row md:items-stretch md:gap-[1.5vw]">
        <div className="paper-knockout-panel grid w-full shrink-0 place-items-center px-[0.95rem] pt-4 shadow-[inset_0_0_0_1px_rgba(247,240,227,0.08),inset_0_0_138px_rgba(0,0,0,0.76)] max-md:py-5 md:w-auto md:max-lg:px-[0.72rem] lg:px-[1.28rem]">
          <span className="m-0 block font-display text-[clamp(2.65rem,16vw,50.25rem)] leading-[0.78] tracking-[-0.02em] uppercase max-md:whitespace-nowrap md:max-lg:leading-[0.72] lg:leading-[0.68]">
            Experien<span className="font-domaine">c</span>e
          </span>
        </div>
        <p className="m-0 max-w-[28ch] font-body text-[clamp(1.05rem,4.2vw,1.35rem)] leading-[1.32] tracking-[-0.008em] text-[#1a1814] max-md:max-w-none md:text-[2vw] md:leading-[1.08] lg:self-start lg:pt-[0.74rem]">
          Over the past 5+ years, I've worked across product, AI tutoring, hardware discovery, and coding education -
          shipping interfaces, systems, and product foundations with a focus on clarity and craft.
        </p>
      </div>
      <Separator variant="normal" className="mb-0 !mt-0" />
      <div className="grid items-start gap-[2rem] sm:pt-8 pt-2 min-[720px]:max-lg:grid-cols-1 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
        <aside className="flex min-w-0 flex-col">
          <span className="mt-[0.54rem]  max-w-[7.18ch] font-display text-[clamp(2.55rem,9.4vw,6.95rem)] uppercase leading-[0.88] tracking-[-0.01em] text-[#17130f] md:max-lg:text-[clamp(2.35rem,6.2vw,4.35rem)] max-md:max-w-none">
            <span className="hero-baseline-rule">Shippin<span className="font-domaine">g</span></span><br />
            <span className="hero-baseline-rule">Interfa<span className="font-domaine">c</span>es</span>,  <br />
            <span className="hero-baseline-rule">Systems, and </span> <br />
            <span className="hero-baseline-rule">Pr<span className="font-domaine">o</span>du<span className="font-domaine"  >c</span>t</span> <br />
            <span className="hero-baseline-rule">F<span className="font-domaine">o</span>undati<span className="font-domaine">o</span>ns.</span>
          </span>
          <Separator variant="normal" />
          <p className="mt-[0.66rem] max-w-[36.8ch] font-body text-[clamp(1rem,3.7vw,1.8rem)] leading-[1.24] tracking-[-0.004em] text-[#211b14] md:max-lg:text-[clamp(0.98rem,2.25vw,1.22rem)] max-md:max-w-none lg:max-w-[40ch]">
            Across four teams, from hardware discovery to AI tutoring and coding education.
          </p>
        </aside>

        <div className="min-w-0">
          <WorkProjectCard
            featured
            title={featuredCard.title}
            roleLine={featuredCard.roleLine}
            years={featuredCard.years}
            summary={featuredCard.summary}
            tags={featuredCard.tags}
            mediaStyle={makeCardMediaStyle(featuredCard.texture, featuredCard.overlayTint)}
            mediaTiles={featuredCard.mediaTiles}
            imageSrc={featuredCard.imageSrc}
            videoSrc={featuredCard.videoSrc}
            actionHref={featuredCard.actionHref}
          />
        </div>
      </div>

      <div className="mt-[2rem] grid grid-cols-1 gap-[2rem] min-[720px]:max-lg:grid-cols-2 lg:grid-cols-3">
        {projectCards.map((card) => (
          <WorkProjectCard
            key={card.title}
            title={card.title}
            roleLine={card.roleLine}
            years={card.years}
            summary={card.summary}
            tags={card.tags}
            mediaStyle={makeCardMediaStyle(card.texture, card.overlayTint)}
            mediaTiles={card.mediaTiles}
            imageSrc={card.imageSrc}
            videoSrc={card.videoSrc}
            actionHref={card.actionHref}
          />
        ))}
      </div>

    </section>
  );
}
