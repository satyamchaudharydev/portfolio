import Separator from "./Separator";
import { PongPreview, ProjectActionChip, QuincyRecognitionStory, Quote } from "./SignalPieces";
import componentsThumbnail from "../assets/components.png";
import avatar1 from "../assets/signals/avatars/avatar-1.jpg";
import avatar2 from "../assets/signals/avatars/avatar-2.jpg";
import avatar3 from "../assets/signals/avatars/avatar-3.jpg";
import avatar4 from "../assets/signals/avatars/avatar-4.jpg";
import cssIllustrationCollection from "../assets/handdrawn-preview.png";
import hauntedHouse from "../assets/haunted-house.png";
import duckStateThumbnail from "../assets/duck-state.png";
import htmlMixedThumbnail from "../assets/html-mixed.png";
import ideThumbnail from "../assets/ide.png";
import avatar5 from "../assets/signals/avatars/avatar-5.jpg";

const signalStats = [
  { value: "771K+", line1: "Uiverse Views" },
  { value: "36", line1: "Open Source Components" },
  { value: "1", line1: "FCC Module" },
  { value: "2", line1: "NPM Packages" }
];

const uiverseAvatarImages = [avatar1, avatar2, avatar3, avatar4, avatar5];

const signalClippings = [
  { name: "Madhu", quote: "Its good, not gonna lie. Its simple and very good to any app.", handle: "@madhu_6649", platform: "Uiverse", href: "https://uiverse.io/satyamchaudharydev/loud-seahorse-55" },
  { name: "Syknapse", quote: "Wow, you really have an eye for beautiful design and style. Great app.", handle: "@Syknapse", platform: "X", href: "https://x.com/satyamkdev/status/921755413342588928" },
  { name: "Mahlon", quote: "Wow this is crazy. Great works.", handle: "@mahlon_6390", platform: "Uiverse", href: "https://uiverse.io/satyamchaudharydev/quick-chicken-50" },
  { name: "shgr84", quote: "That's one of the best looking I've seen so far. Impressive.", handle: "@shgr84", platform: "X", href: "https://x.com/satyamkdev/status/921755413342588928" },
  { name: "Syknapse", quote: "Looks amazing. Four lines only.", handle: "@Syknapse", platform: "X", href: "https://x.com/satyamkdev/status/941928594225295360" },
  { name: "TheNoobiCat", quote: "thank you man this is amazing", handle: "@TheNoobiCat", platform: "Uiverse", href: "https://uiverse.io/satyamchaudharydev/red-cow-21" }
];

const signalCreations = [
  {
    title: "IDE / File Editor",
    description: "A browser-based editor experiment focused on file navigation, editing flow, and a compact developer workspace.",
    thumbnail: ideThumbnail,
    actions: [
      { label: "View Project", href: "https://ide-file-editor.vercel.app" },
      { label: "View Video", href: null }
    ]
  },
  {
    title: "Finance Management App",
    description: "A compact personal finance interface exploring flows for tracking, balance, and spending clarity.",
    thumbnail: cssIllustrationCollection,
    actions: [
      { label: "View Project", href: "https://codepen.io/satyamdev" },
      { label: "View Video", href: null },
      { label: "Download APK", href: null }
    ]
  },
  {
    title: "Duck-State",
    description: "A lightweight state management side quest designed to stay simple, predictable, and easy to wire into apps.",
    thumbnail: duckStateThumbnail,
    actions: [
      { label: "View Project", href: "https://www.npmjs.com/package/duck-state" }
    ]
  },
  {
    title: "HTML Mixed Linter",
    description: "A utility package for catching issues in mixed HTML content with a lightweight, developer-friendly workflow.",
    thumbnail: htmlMixedThumbnail,
    actions: [
      { label: "View Project", href: "https://www.npmjs.com/package/html-mixed-linter" }
    ]
  },
  {
    title: "Fisher-Yates Visualizer",
    description: "A side quest that turns the shuffle algorithm into a visual, interactive walkthrough.",
    thumbnail: componentsThumbnail,
    actions: [
      { label: "View Project", href: "https://fisher-seven.vercel.app" }
    ]
  }
];

const hauntedHouseTags = ["Three.js", "WebGL", "3D", "Interactive"];
const cssIllustrationTags = ["CSS", "Illustration", "Art Direction"];

export default function SignalsSection() {
  return (
    <section id="signals" className="relative overflow-hidden px-4 pb-5 pt-6 text-[#1d1712] sm:px-5">
      <div className="grid min-h-[5.25rem] place-items-center bg-[#131313] px-3 py-3 shadow-[inset_0_0_0_1px_rgba(247,240,227,0.08),inset_0_0_138px_rgba(0,0,0,0.76)] md:min-h-[7.5rem] md:px-4 md:py-3.5 lg:min-h-[12rem] lg:px-[1.28rem] lg:py-[0.92rem]">
          <span className="m-0 text-center font-display text-[clamp(2.25rem,12vw,12.7rem)] leading-[0.78] tracking-[-0.02em] uppercase text-[#e7dfce] md:text-[clamp(3.5rem,10.8vw,7.25rem)] xl:text-[clamp(3.25rem,14.2vw,12.7rem)]">
            Pr<span className="font-domaine">o</span>je<span className="c"></span>ts & Rea<span className="font-domaine">c</span>ti<span className="font-domaine">o</span>ns
          </span>
      </div>
      <Separator className="mb-4 mt-6 md:mt-8" variant="normal" />
      <div className="grid gap-5 border-b border-[#2c2217]/60 pb-4 pt-5 md:gap-0 md:pt-6 xl:grid-cols-[1fr_1.38fr]">
        <div className="order-2 pb-2 md:order-1 md:border-r md:border-[#2c2217]/45 md:pr-5 md:pb-0 xl:border-r xl:border-[#2c2217]/45 xl:pr-5 xl:pb-0">
          <h2 className="m-0 max-w-[10ch] font-display text-[clamp(3.35rem,15vw,11.7rem)] uppercase leading-[0.8] tracking-[-0.04em] text-[#17120d] sm:max-w-[8.4ch] md:max-w-[6.4ch] md:text-[clamp(4.2rem,8.5vw,7.2rem)] xl:max-w-none xl:text-[clamp(4.2rem,11vw,11.7rem)] xl:leading-[0.76]">
            Si<span className="font-domaine">g</span>nals
            <span className="mt-2 block text-[clamp(2.15rem,10vw,8.4rem)] leading-[0.88] tracking-[-0.02em] md:text-[clamp(2.7rem,5.8vw,5.5rem)] xl:text-[clamp(2.4rem,8.2vw,8.4rem)] xl:leading-[0.84]">Fr<span className="font-domaine">o</span>m the internet.</span>
          </h2>
          <div className="mt-4 flex items-center gap-[0.78rem] md:mt-[0.68rem]" aria-hidden="true">
            <span className="h-px flex-1 bg-[rgba(42,33,23,0.48)]" />
            <span className="text-[1.36rem] leading-none text-[#1f1913]">✦</span>
            <span className="h-px flex-1 bg-[rgba(42,33,23,0.48)]" />
          </div>

          <p className="mt-3 max-w-[30ch] font-body text-[clamp(1.02rem,4.1vw,1.5rem)] leading-[1.24] tracking-[-0.004em] text-[#211b14] sm:max-w-[34ch] md:max-w-[25ch] lg:max-w-[28ch] xl:max-w-[40ch]">
            A collection of recognition, reactions, and real impact from things I've built.
          </p>

          <dl className="mt-4 grid grid-cols-2 border border-[#5e503f]/55 p-2 sm:grid-cols-4">
            {signalStats.map((item, index) => (
              <div
                key={item.value + item.line1}
                  className={`px-4 py-4 sm:px-5 sm:py-5 ${
                  "border-b border-t border-r border-dashed border-[#5e503f]/55"
                } ${index === 0 ? "border-l" : ""}`}
              >
                <dt className="sr-only">{item.line1}</dt>
                <dd className="m-0">
                  <p className="font-display text-[clamp(3.2rem,7vw,1.2rem)] leading-[0.82] tracking-[-0.02em] text-[#14100b]">{item.value}</p>
                  <p className="mt-2 font-body text-[clamp(1.2rem,1.95vw,1.15rem)] leading-[1.06] tracking-[-0.01em] text-[#2c2218]">
                    <span className="block">{item.line1}</span>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 pt-0 md:order-2 md:pl-5 md:pt-0 xl:pl-5 xl:pt-0">
          <div className="grid gap-4 md:gap-5 xl:grid-cols-[1fr_1.02fr]">
            <article>
              <h3 className="max-w-[9.6ch] font-display text-[clamp(2.5rem,11vw,5.2rem)] uppercase leading-[0.88] md:max-w-[7ch] md:text-[clamp(2.5rem,4.9vw,4.1rem)] xl:max-w-none xl:text-[clamp(2.9rem,4.2vw,5.2rem)] xl:leading-[0.84]">
                <span>P<span className="font-domaine">o</span>n<span className="font-domaine">g</span></span> <span className="font-domaine">g</span>ame - 4
                <span className="block">lines <span className="font-domaine">o</span>f l<span className="font-domaine">o</span><span className="font-domaine">g</span>i<span className="font-domaine">c</span>.</span>
              </h3>
              <p className="mt-3 max-w-[32rem] font-body text-[clamp(1rem,3.7vw,1.55rem)] leading-[1.24] text-[#251d15] md:max-w-[29rem] md:text-[clamp(1rem,1.65vw,1.28rem)] xl:max-w-[36rem] xl:text-[clamp(1.03rem,1.2vw,1.55rem)]">
                A fully functional Pong game with a computer opponent - written in just 4 lines of core logic. Clean, minimal, playable.
              </p>

              <QuincyRecognitionStory />
            </article>

              <div className="grid content-start gap-4 md:gap-5">
                <PongPreview />
                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-[1fr_14rem] xl:grid-cols-[1fr_14rem]">
                  <Quote text="This little project turned out to be one of the most fun things I've coded and opened the door to freeCodeCamp." />
                  <a
                    href="https://freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-pong-game"
                    target="_blank"
                    rel="noreferrer"
                    className="block border border-[#b99d76]/70 bg-[#eadcc6]/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_1px_0_rgba(60,42,24,0.08)] md:max-w-[16rem] lg:max-w-none"
                  >
                  <p className="font-domaine font-bold text-[1.3rem] uppercase leading-[0.93]">Now part of the freeCodeCamp curriculum</p>
                  <p className="mt-3 font-body text-[1rem] leading-[1.26] underline underline-offset-2">freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-pong-game</p>
                  <span className="mt-2 block text-right font-display text-[1.6rem]">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-1">
        <div className="grid lg:grid-cols-2 xl:grid-cols-[2fr_1.55fr_1.55fr]">
          <article className="border-b border-[#1e1914]/25 p-3 lg:border-r xl:border-b-0">
            <div className="relative h-full overflow-hidden rounded-[0.9rem] border border-[#e1d4bb]/45 bg-[#1d1f1d] px-3 py-3 text-[#efe6d4] shadow-[inset_0_0_0_1px_rgba(255,242,216,0.05),inset_0_0_116px_rgba(0,0,0,0.78)] sm:rounded-none sm:px-5 sm:py-5">
              <div className="relative z-[1] grid items-start gap-4 sm:gap-5">
                <div className="min-w-0">
                  <div className="sm:hidden">
                    <p className="font-domaine text-[0.98rem] uppercase leading-none tracking-[0.02em] text-[#ece2cc]">Uiverse.io top creator</p>
                    <span className="mt-2 block border-t border-[#d9ccb14d]" />
                    <div className="mt-3 grid grid-cols-[1fr_7rem_1fr] items-start gap-3">
                      <div className="min-w-0">
                        <p className="font-display text-[clamp(3.2rem,13vw,7.35rem)] leading-[0.82] tracking-[-0.035em] text-[#f1e8d7]">771K+</p>
                        <p className="mt-2 font-domaine text-[1.05rem] uppercase leading-[0.88] text-[#e9ddc7]">Total Views</p>
                      </div>
                      <div className="relative flex justify-center self-center">
                        <img
                          src={componentsThumbnail}
                          alt=""
                          aria-hidden="true"
                          className="relative h-[7rem] w-[7rem] max-w-none select-none object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="grid grid-cols-1 gap-2 border-y border-[#d8ccb3]/55 py-2">
                          <div className="border-r border-[#d8ccb3]/55 pr-3">
                            <p className="font-display text-[1.95rem] leading-[0.82] tracking-[-0.02em] text-[#f1e8d7]">36</p>
                            <p className="mt-1 font-domaine text-[0.92rem] uppercase leading-[0.88] text-[#e9ddc7]">Components</p>
                          </div>
                          <div className="pt-2">
                            <p className="text-[1.95rem] font-display leading-[0.82] tracking-[-0.02em] uppercase text-[#f1e8d7]">T<span className="font-domaine">o</span>p 7</p>
                            <p className="mt-1 font-domaine text-[0.92rem] uppercase leading-[0.88] text-[#e9ddc7]">Creator</p>
                          </div>
                        </div>
                        <p className="mt-3 font-domaine text-[0.96rem] uppercase leading-none tracking-[0.01em] text-[#e8dcc5]">Used By Developers Worldwide</p>
                        <div className="mt-2 flex items-center gap-1.5">
                          {uiverseAvatarImages.map((avatar, index) => (
                            <span
                              key={avatar}
                              className="relative inline-flex h-8 w-8 overflow-hidden rounded-full border border-[#d7c8aa]/58 bg-[#11161e]"
                            >
                              <img
                                src={avatar}
                                alt={`Community member ${index + 1}`}
                                className="h-full w-full object-cover grayscale-[0.18] contrast-[1.03]"
                                loading="lazy"
                              />
                            </span>
                          ))}
                          <span className="inline-flex h-8 items-center justify-center rounded-full px-1.5 font-display text-[0.95rem] leading-none text-[#efe5d2]">
                            +120
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block">
                    <p className="font-domaine text-[1.24rem] uppercase leading-none tracking-[0.02em] text-[#ece2cc]">Uiverse.io top creator</p>
                    <span className="mt-3 block border-t border-[#d9ccb14d]" />
                    <div className="grid gap-5 md:grid-cols-[1fr_13rem]">
                      <div>
                        <div className="mt-6">
                          <p className="font-display text-[clamp(2.8rem,8vw,7.35rem)] leading-[0.82] tracking-[-0.035em] text-[#f1e8d7]">771K+</p>
                          <p className="mt-4 font-domaine text-[1.4rem] uppercase leading-[0.88] text-[#e9ddc7]">Total Views</p>
                        </div>
                        <div className="mt-4 grid grid-cols-2 border-y border-[#d8ccb3]/55 py-3">
                          <div className="border-r border-[#d8ccb3]/55 pr-3">
                            <p className="font-display text-[3.45rem] leading-[0.82] tracking-[-0.02em] text-[#f1e8d7]">36</p>
                            <p className="mt-3 font-domaine text-[1.4rem] uppercase leading-[0.88] text-[#e9ddc7]">Components</p>
                          </div>
                          <div className="pl-3">
                            <p className="text-[3.45rem] font-display leading-[0.82] tracking-[-0.02em] uppercase text-[#f1e8d7]">T<span className="font-domaine">o</span>p 7</p>
                            <p className="mt-3 font-domaine text-[1.4rem] uppercase leading-[0.88] text-[#e9ddc7]">Creator</p>
                          </div>
                        </div>
                        <p className="mt-8 font-domaine text-[1.4rem] uppercase leading-none tracking-[0.01em] text-[#e8dcc5]">Used By Developers Worldwide</p>
                        <div className="mt-3 flex items-center gap-2">
                          {uiverseAvatarImages.map((avatar, index) => (
                            <span
                              key={avatar}
                              className="relative inline-flex h-10 w-10 overflow-hidden rounded-full border border-[#d7c8aa]/58 bg-[#11161e]"
                            >
                              <img
                                src={avatar}
                                alt={`Community member ${index + 1}`}
                                className="h-full w-full object-cover grayscale-[0.18] contrast-[1.03]"
                                loading="lazy"
                              />
                            </span>
                          ))}
                          <span className="inline-flex h-10 items-center justify-center rounded-full px-3 font-display text-[1.06rem] leading-none text-[#efe5d2]">
                            +120
                          </span>
                        </div>
                      </div>
                      <div className="relative flex justify-center md:justify-end">
                        <img
                          src={componentsThumbnail}
                          alt=""
                          aria-hidden="true"
                          className="relative h-[10rem] w-[10rem] max-w-none select-none object-cover md:top-[100px] md:h-[16rem] md:w-[16rem]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 hidden border-t border-[#d8ccb3]/55 pt-4 sm:block">
                    <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                      <p className="font-body text-[2.6rem] leading-[0.8] text-[#d0b27b]">&ldquo;</p>
                      <div>
                        <p className="font-body text-[1.2rem] leading-[1.23] text-[#f1e8d8]">
                          People didn&apos;t just use it - they reused it. The components are clean and production ready.
                        </p>
                        <p className="mt-3 font-domaine text-[1.3rem] uppercase leading-none text-[#e8dcc5]">- Community Feedback</p>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </article>
          <article className="grid grid-cols-[42%_1fr] items-start gap-3 rounded-[0.9rem] border border-[#2c2217]/25 p-2.5 sm:grid-cols-1 sm:grid-rows-[1fr_auto] sm:gap-4 sm:rounded-none sm:border-0 sm:border-b sm:p-3 lg:border-r xl:border-b-0">
            <img src={hauntedHouse} alt="Haunted House" className="h-full min-h-[9.5rem] w-full rounded-[0.55rem] border border-[#2c2217]/45 object-cover sm:max-h-[320px] sm:min-h-0 sm:rounded-none lg:max-h-[400px]" />
            <div>
              <h3 className="font-display text-[1.8rem] uppercase leading-[0.92] sm:text-[2.05rem] sm:leading-[0.88]">Haunted House (Three.js)</h3>
              <p className="mt-2 font-body text-[1.02rem] leading-[1.22] sm:mt-3 sm:text-[1.15rem] sm:leading-[1.25]">3D scene with realistic shadows, lighting and dynamic sky built using Three.js.</p>
              <div className="mt-2">
                <Quote text="The scene brings together shadows, atmosphere and interactivity beautifully." />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 sm:hidden">
                {hauntedHouseTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-[0.45rem] border border-[#8f7b60]/65 px-3 py-1 font-domaine text-[0.88rem] uppercase leading-none text-[#2b2118]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className="grid grid-cols-[42%_1fr] items-start gap-3 rounded-[0.9rem] border border-[#2c2217]/25 p-2.5 sm:grid-cols-[11.4rem_1fr] sm:gap-4 sm:rounded-none sm:border-0 sm:p-3 xl:grid-cols-1 ">
            <img src={cssIllustrationCollection} alt="CSS Illustration Collection" className="h-full min-h-[9.5rem] w-full rounded-[0.55rem] border border-[#2c2217]/45 object-cover bg-[repeating-linear-gradient(100deg,rgba(35,27,20,0.02)_0_12px,transparent_12px_16px)] sm:max-h-[320px] sm:min-h-0 sm:rounded-none xl:max-h-[400px]" />
            <div>
              <h3 className="font-display text-[1.78rem] uppercase leading-[0.92] sm:text-[2.05rem] sm:leading-[0.88]"><span className="font-domaine">C</span>SS Illustrati<span className="font-domaine">o</span>n <span className="font-domaine">Co</span>lle<span className="font-domaine">c</span>ti<span className="font-domaine">o</span>n.</h3>
              <p className="mt-2 font-body text-[1.02rem] leading-[1.22] sm:mt-3 sm:text-[1.15rem] sm:leading-[1.25]">Hand-drawn illustrations and CSS art exploring detail, imagination and craft.</p>
              <div className="mt-2">
                <Quote text="Crazy detail. This is what CSS art should look like." />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 sm:hidden">
                {cssIllustrationTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex rounded-[0.45rem] border border-[#8f7b60]/65 px-3 py-1 font-domaine text-[0.88rem] uppercase leading-none text-[#2b2118]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="mt-3 py-3">
        <div className="grid gap-5 xl:grid-cols-[1.72fr_0.92fr]">
          <div className="overflow-hidden border border-[#6d5c49]/55 bg-[#efe6d7]/20 p-2">
            {signalCreations.map((item, index) => (
              <article
                key={item.title}
                className={`grid gap-4 px-3 py-4 sm:px-4 md:grid-cols-[11rem_1fr] md:items-start lg:grid-cols-[13rem_1fr] ${
                  index !== signalCreations.length - 1 ? "border-b border-[#6d5c49]/45" : ""
                }`}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-[8.5rem] w-full rounded-[0.8rem] border border-[#584837]/25 bg-transparent object-contain p-2 mix-blend-multiply opacity-[0.94] sm:h-[9.5rem] md:w-[11rem] lg:h-[10.5rem] lg:w-[13rem]"
                />
                <div className="max-w-[31rem] min-w-0">
                  <p className="m-0 text-balance font-domaine text-[clamp(1.45rem,6vw,3rem)] leading-[0.92] text-[#201710]">{item.title}</p>
                  <p className="mt-3 font-body text-[clamp(0.98rem,3.2vw,1.38rem)] leading-[1.3] text-[#30241a]/88">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.actions.map((action) => (
                      <ProjectActionChip
                        key={item.title + action.label}
                        label={action.label}
                        href={action.href}
                      />
                    ))}
                  </div>
                </div>
                <div className="hidden md:block" />
              </article>
            ))}
          </div>

          <aside className="border border-[#6d5c49]/55 bg-[#efe6d7]/20 px-4 py-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)] sm:px-6">
            <p className="m-0 font-domaine text-[clamp(1.7rem,6vw,2.25rem)] leading-[0.95] text-[#201710]">
              What people said & reacted
            </p>
            <span className="mt-4 block h-px w-full bg-[#6d5c49]/45" />

            <div className="mt-5 grid gap-3">
              {signalClippings.slice(0, 6).map((item) => (
                <article
                  key={item.handle + item.href + item.quote}
                  className="border border-dashed border-[#8a7864]/65 px-4 py-4 sm:px-5"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#201913] font-domaine text-[1.1rem] leading-none text-[#f6eddf]">
                      {item.name.slice(0, 1)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
                        <div className="min-w-0">
                          <p className="m-0 font-domaine text-[1.22rem] leading-none text-[#241a12]">{item.name}</p>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 inline-block break-all font-body text-[0.92rem] leading-none text-[#5a4c3f] hover:underline sm:break-normal"
                          >
                            {item.handle}
                          </a>
                        </div>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0 pt-0 font-domaine text-[0.78rem] uppercase tracking-[0.08em] text-[#5a4c3f] underline decoration-dotted underline-offset-4 sm:pt-1"
                        >
                          View on {item.platform}
                        </a>
                      </div>
                      <p className="mt-3 max-w-[32ch] font-body text-[1rem] leading-[1.35] text-[#2a2118] sm:text-[1.12rem]">
                        {item.quote}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-4 font-domaine text-[1.55rem] italic leading-none text-[#4e4134]">
              and many more...
            </p>
          </aside>
        </div>
      </div>

    </section>
  );
}
