import Seperator from "./seperator";
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
import quincyLarsonPhoto from "../assets/quincy-larson.png";

import avatar5 from "../assets/signals/avatars/avatar-5.jpg";
import { RoughRoundedRectIcon, TweetIcon } from "./icons";

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
  { name: "TheNoobiCat", quote: "thank you man this is amazing", handle: "@TheNoobiCat", platform: "Uiverse", href: "https://uiverse.io/satyamchaudharydev/red-cow-21" },
  { quote: "Just like I'm looking for. fantastic", handle: "@cubbeliden", platform: "Codepen", badge: "C", href: "https://codepen.io/satyamdev/details/eVeaMY" }
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



function PongPreview() {
  return (
    <div className="relative aspect-[16/8.4] overflow-hidden rounded-[3px] border border-[#1d1b17]/60 bg-[#0f141c] shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_45%,rgba(45,66,99,0.35),transparent_42%),radial-gradient(circle_at_78%_40%,rgba(35,58,84,0.28),transparent_44%),repeating-linear-gradient(to_bottom,rgba(255,255,255,0.03)_0_1px,transparent_1px_8px)]" />
      <span className="absolute left-1/2 top-0 h-full -translate-x-1/2 border-l-2 border-dashed border-[#ece6d8]/80" />
      <span className="absolute left-[8%] top-[36%] h-[17%] w-[2.6%] bg-[#f2ecde]" />
      <span className="absolute right-[8%] top-[35%] h-[17%] w-[2.6%] bg-[#f2ecde]" />
      <span className="absolute left-[67%] top-[61%] h-[4.4%] w-[2.2%] bg-[#f2ecde]" />
      <div className="absolute inset-x-0 top-[8%] flex justify-center gap-[5.2rem] font-mono text-[clamp(1.15rem,2vw,1.7rem)] font-semibold text-[#ece6d8]">
        <span>2</span>
        <span>5</span>
      </div>
    </div>
  );
}



function NotificationPreview() {
  return (
    <div className="grid aspect-[1.2/1] max-h-[400px] place-items-center border border-[#231b14]/15 bg-[linear-gradient(140deg,#f0c8be_0%,#dfd3f3_55%,#f2ecde_100%)]">
      <div className="w-[74%] border border-white/55 bg-[#f7efe9] px-4 py-4 shadow-[0_16px_24px_rgba(47,32,22,0.15)]">
        <div className="flex items-start gap-3">
          <span className="grid h-8 w-8 place-items-center bg-[#111] text-sm text-[#f6efe2]">!</span>
          <div>
            <p className="font-body text-[1rem] font-semibold leading-none text-[#201812]">Message sent</p>
            <p className="mt-2 font-body text-[0.78rem] leading-[1.28] text-[#54483e]">Your message was sent successfully.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IllustrationPreview() {
  return (
    <div className="relative aspect-[1/1] overflow-hidden border border-[#231b14]/45 bg-[repeating-linear-gradient(100deg,rgba(35,27,20,0.02)_0_12px,transparent_12px_16px)]">
      <span className="absolute left-[45%] top-[8%] h-10 w-10 rounded-full border border-[#211911]/85" />
      <span className="absolute left-[23%] top-[30%] h-4 w-11 -rotate-6 border-2 border-b-0 border-[#211911]/75" />
      <span className="absolute right-[13%] top-[23%] h-4 w-11 rotate-[8deg] border-2 border-b-0 border-[#211911]/75" />
      <span className="absolute bottom-[16%] left-[24%] h-[16%] w-[56%] -skew-x-12 rotate-[-2deg] border-2 border-[#211911]/85 bg-[#ddd7c8]/35 shadow-[0_13px_0_-8px_rgba(33,25,17,0.6)]" />
      <span className="absolute bottom-[30%] left-[38%] h-[31%] w-[30%] border-2 border-[#211911]/85 bg-[#ece6d8]/90" />
      <span className="absolute bottom-[60%] left-[34%] h-0 w-0 border-b-[48px] border-l-[44px] border-r-[44px] border-b-[#211911]/90 border-l-transparent border-r-transparent" />
      <span className="absolute bottom-[61%] left-[35%] h-0 w-0 border-b-[40px] border-l-[42px] border-r-[42px] border-b-[#ece6d8] border-l-transparent border-r-transparent" />
      <span className="absolute bottom-[76%] left-[53%] h-10 w-[2px] bg-[#211911]" />
      <span className="absolute bottom-[83%] left-[50%] h-0 w-0 border-b-[22px] border-l-[12px] border-r-[12px] border-b-[#211911]/90 border-l-transparent border-r-transparent" />
      <span className="absolute left-[45%] top-[55%] h-4 w-4 border border-[#211911]/80 bg-[#6d6a61]/20" />
      <span className="absolute left-[53%] top-[62%] h-4 w-4 border border-[#211911]/80 bg-[#6d6a61]/20" />
      <span className="absolute left-[59%] top-[48%] h-4 w-4 border border-[#211911]/80 bg-[#6d6a61]/20" />
    </div>
  );
}

function Quote({ text, source }) {
  return (
    <figure className="m-0">
      <blockquote className="font-body text-[1.12rem] italic leading-[1.25] text-[#261d15]">&ldquo;{text}&rdquo;</blockquote>
    </figure>
  );
}

function HanddrawnLabel({ text }) {
  return (
    <span className="relative inline-flex select-none items-center justify-center">
      <svg
        aria-hidden="true"
        viewBox="0 0 270 64"
        preserveAspectRatio="none"
        className="h-[2.4rem] w-[10rem]"
      >
        <path
          d="M9 13 C34 8, 66 11, 92 9 C127 6, 158 11, 190 8 C220 6, 246 9, 262 13 L258 49 C228 53, 198 49, 166 52 C128 56, 94 51, 58 54 C34 56, 16 54, 8 50 Z"
          fill="#17120F"
        />
        <path
          d="M6 17 C68 9, 142 17, 264 12"
          stroke="#17120F"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.92"
        />
        <path
          d="M14 48 C76 55, 150 45, 254 50"
          stroke="#17120F"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.78"
        />
        <path
          d="M20 57 C80 51, 160 58, 242 53"
          stroke="#17120F"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M18 8 C48 5, 88 9, 118 7"
          stroke="#17120F"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center px-6 font-domaine text-[0.82rem] uppercase leading-none tracking-[0.18em] text-[#f4eee0] [text-shadow:0_1px_0_rgba(0,0,0,0.45)]">
        {text}
      </span>
    </span>
  );
}

function SketchUnderline({ className = "", strokeWidth = 2.35 }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 24"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M7 11 C 30 8, 53 13, 79 11 S 127 13, 153 10"
        fill="none"
        stroke="#1f1710"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 15 C 28 14, 52 17, 79 15 S 126 16, 151 14"
        fill="none"
        stroke="#1f1710"
        strokeWidth={strokeWidth * 0.72}
        strokeLinecap="round"
        opacity="0.78"
      />
    </svg>
  );
}


function SketchTweetCard({ children }) {
  return (
    <div className="relative mt-4">
      <div className="relative max-w-[20.5rem] overflow-hidden sm:max-w-[22rem]">
        <RoughRoundedRectIcon
          className="pointer-events-none absolute inset-0 h-full w-full"
          stroke="#1d1510"
        />
        <div className="relative z-[1] px-3 py-3 sm:px-3.5 sm:py-3.5">
          {children}
        </div>
      </div>
    </div>
  );
}

function QuincyPortraitMedallion() {
  return (
    <div className="relative ml-8 aspect-[1] w-[5.25rem] sm:w-[5.75rem] lg:w-[4rem]">
        <img
          src={quincyLarsonPhoto}
          alt="Quincy Larson"
          className="h-full w-full object-cover object-[center_22%] grayscale contrast-[1.07] brightness-[1.02] sepia-[0.14]"
          loading="lazy"
        />
    </div>
  );
}

function QuincyRecognitionStory() {
  return (
    <div className="mt-4 border-t border-[#2c2217]/45 pt-2">
        <div className="w-[100%]">
          <HanddrawnLabel text="Recognized by" />
          <div className="flex"> 
            <div className="mt-2">
              <p className="font-domaine text-[clamp(1.8rem,2.7vw,3.05rem)] uppercase leading-[0.88] tracking-[-0.03em] text-[#16100c]">
                Quincy Larson
              </p>
              <p className="mt-[1px] font-domaine text-[clamp(0.8rem,1.22vw,1.35rem)] italic leading-[0.98] text-[#1d1510]">
                (Founder, freeCodeCamp)
              </p>
            </div>
            <QuincyPortraitMedallion />
          </div>
          <div className="relative justify-self-start md:justify-self-center">
        </div>
        </div>

       

      <div className="mt-6 max-w-[42rem]">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-body text-[clamp(0.96rem,1.2vw,1.16rem)] leading-[1.15] text-[#1c150f]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#17110c] text-[#f5ecdd]">
            <TweetIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-balance">
            Quincy Larson{" "}
            <span className="relative inline-flex flex-col">
              <span className="relative z-[1]">noticed</span>
              <SketchUnderline className="-mt-1 h-3 w-full min-w-[1.8rem]" />
            </span> the project on Twitter.
          </span>
        </p>

        <SketchTweetCard>
          <div className="flex items-start justify-between gap-3 px-3 mt-2">
            <div className="flex min-w-0 items-start gap-2.5">
              <div className="min-w-0 flex gap-2">
                <img src={quincyLarsonPhoto} width={40} height={40} />
                <div>
                  <p className="flex flex-wrap items-center gap-1.5 font-body text-[0.84rem] font-semibold leading-none text-[#1e1710] sm:text-[0.92rem]">
                    <span>Quincy Larson</span>
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1e1710] text-[0.56rem] leading-none text-[#f3eadb]">
                      ✓
                    </span>
                  </p>
                  <p className="mt-1.5 font-body text-[0.82rem] leading-none text-[#5f5042] sm:text-[0.92rem]">@ossia</p>
                </div>
              </div>
            </div>
            <span className="shrink-0 font-display text-[1rem] uppercase leading-none text-[#1e1710]">X</span>
          </div>

          <div className="pl-1 sm:pl-1.5">
            <p className="mb-2 mt-2 ml-8 font-domaine text-[clamp(1.2rem,1.6vw,2.42rem)] italic leading-[0.98] tracking-[-0.04em] text-[#16100b] ">
              &ldquo;Awesome, can you link to the pen?&rdquo;
            </p>
          </div>
        </SketchTweetCard>

        <div className="mt-4 max-w-[33rem] font-body text-[clamp(1.2rem,1.04vw,1rem)] leading-[1.18] text-[#201710]">
          <span>That reply led to a </span>
          <span className="relative inline-flex items-center justify-center px-3 py-0.5 font-domaine text-[1.05em] uppercase leading-none text-[#1a120d]">
            DM
            <svg
              aria-hidden="true"
              viewBox="0 0 100 52"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              <ellipse cx="50" cy="26" rx="45" ry="20" fill="none" stroke="#1a120d" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
              <ellipse cx="50.8" cy="25.5" rx="43.8" ry="18.5" fill="none" stroke="#1a120d" strokeWidth="1.1" vectorEffect="non-scaling-stroke" opacity="0.72" />
            </svg>
          </span>{" "}
          <span className="font-display text-[1.06rem] leading-none text-[#1b140d]">&rarr;</span>{" "}
          <span className="relative inline-flex flex-col align-middle">
            <span className="relative z-[1]">eventually</span>
            <SketchUnderline className="-mt-1 h-3 w-full min-w-[5.2rem]" />
          </span>{" "}
          <span className="font-display text-[1.06rem] leading-none text-[#1b140d]">&rarr;</span>{" "}
          <span className="relative inline-flex max-w-none flex-col text-balance align-middle">
            <span className="relative z-[1]">a contribution to the freeCodeCamp curriculum.</span>
            <SketchUnderline className="-mt-1 h-3 w-[8.8rem] sm:w-[10.5rem]" />
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectActionChip({ label, href }) {
  const isProject = label === "View Project";
  const isVideo = label === "View Video";
  const isApk = label === "Download APK";

  const palette = {
          outer: "bg-[#f1e7d8] text-[#2a2118]",
          inner: "border-[#b7a58f]/70",
          divider: "border-[#756c638a]",
          icon: "text-[#e5791b]",
          text: "text-[#2a2118]"
        };

  const shapeStyle = {
    clipPath: "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)"
  };

  const icon = isProject ? "\u2197" : isApk ? "\u2193" : "\u25B6";

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-[3px] border border-dashed ${palette.inner}`}
        style={shapeStyle}
      />
      <span className="relative z-[1] flex items-center">
        <span className={`grid h-[3.1rem] w-[3.3rem] place-items-center border-r ${palette.divider} ${palette.icon}`}>
          <span className={`font-display text-[1.7rem] leading-none ${isVideo ? "translate-x-[1px]" : ""}`}>{icon}</span>
        </span>
        <span className={`px-5 font-domaine text-[1.02rem] uppercase tracking-[0.06em] ${palette.text}`}>
          {label}
        </span>
      </span>
    </>
  );

  if (!href) {
    return (
      <span
        className={`relative inline-flex min-h-[2.55rem] overflow-hidden opacity-60 sm:min-h-[3.25rem] ${palette.outer}`}
        style={shapeStyle}
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
      className={`group relative inline-flex min-h-[2.55rem] overflow-hidden shadow-[0_1px_0_rgba(255,255,255,0.24)] transition-transform duration-200 hover:-translate-y-[1px] sm:min-h-[3.25rem] ${palette.outer}`}
      style={shapeStyle}
    >
      
      {content}
    </a>
  );
}

export default function SignalsSection() {
  return (
    <section id="signals" className="relative overflow-hidden  px-4 pb-5 pt-6 text-[#1d1712] sm:px-5">
      <div className="grid min-h-[8rem] place-items-center bg-[#131313] px-[0.95rem] py-[0.68rem] shadow-[inset_0_0_0_1px_rgba(247,240,227,0.08),inset_0_0_138px_rgba(0,0,0,0.76)] lg:min-h-[12rem] lg:px-[1.28rem] lg:py-[0.92rem]">
          <span className="m-0 font-display text-[clamp(4.2rem,18.4vw,12.7rem)] leading-[0.715] tracking-[-0.02em] uppercase text-[#e7dfce]">
            Pr<span className="font-domaine">o</span>je<span className="c"></span>ts & Rea<span className="font-domaine">c</span>ti<span className="font-domaine">o</span>ns
          </span>
      </div>
      <Seperator className="mt-8 mb-4" variant="normal"/>
      <div className="grid gap-0 border-b border-[#2c2217]/60 pb-4 pt-6 xl:grid-cols-[1fr_1.38fr]">
        <div className="pb-5 xl:border-r xl:border-[#2c2217]/45 xl:pr-5 xl:pb-0">
          <h2 className="m-0 font-display text-[clamp(4.2rem,11vw,11.7rem)] uppercase leading-[0.76] tracking-[-0.04em] text-[#17120d]">
            Si<span className="font-domaine">g</span>nals
            <span className="mt-2 block text-[clamp(2.4rem,8.2vw,8.4rem)] tracking-[-0.02em] leading-[0.84]">Fr<span className="font-domaine">o</span>m the internet.</span>
          </h2>
          <div className="mt-[0.68rem] flex items-center gap-[0.78rem]" aria-hidden="true">
            <span className="h-px flex-1 bg-[rgba(42,33,23,0.48)]" />
            <span className="text-[1.36rem] leading-none text-[#1f1913]">✦</span>
            <span className="h-px flex-1 bg-[rgba(42,33,23,0.48)]" />
          </div>

          <p className="mt-[0.66rem] max-w-[36.8ch] font-body text-[clamp(1.02rem,4.2vw,1.5rem)] leading-[1.24] tracking-[-0.004em] text-[#211b14] max-md:max-w-none lg:max-w-[40ch]">
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
                    <span className="block">{item.line2}</span>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="pt-5 xl:pl-5 xl:pt-0">
          <div className="grid gap-5 xl:grid-cols-[1fr_1.02fr]">
            <article>
              <h3 className="font-display text-[clamp(2.9rem,4.2vw,5.2rem)] uppercase leading-[0.84]">
                <span className="">P<span className="font-domaine">o</span>n<span className="font-domaine">g</span></span> <span className="font-domaine">g</span>ame - 4
                <span className="block">lines <span className="font-domaine">o</span>f l<span className="font-domaine">o</span><span className="font-domaine">g</span>i<span className="font-domaine">c</span>.</span>
              </h3> 
              <p className="mt-3 max-w-[36rem] font-body text-[clamp(1.03rem,1.2vw,1.55rem)] leading-[1.23] text-[#251d15]">
                A fully functional Pong game with a computer opponent - written in just 4 lines of core logic. Clean, minimal, playable.
              </p>

              <QuincyRecognitionStory />
            </article>

              <div className="grid content-start gap-4">
                <PongPreview />
                <div className="grid gap-4 md:grid-cols-[1fr_14rem]">
                  <Quote text="This little project turned out to be one of the most fun things I've coded and opened the door to freeCodeCamp." source="Satyam Chaudhary  @satyamkdev  Dec 2017" />
                  <a
                    href="https://freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-pong-game"
                    target="_blank"
                    rel="noreferrer"
                    className="block border border-[#b99d76]/70 bg-[#eadcc6]/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_1px_0_rgba(60,42,24,0.08)]"
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
            <div className="relative h-full overflow-hidden border border-[#e1d4bb]/45 bg-[#1d1f1d] px-4 py-5 text-[#efe6d4] shadow-[inset_0_0_0_1px_rgba(255,242,216,0.05),inset_0_0_116px_rgba(0,0,0,0.78)] sm:px-5">
              <div className="relative z-[1] grid items-start gap-5 ">
                <div className="min-w-0">
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
                    <span className="inline-flex h-10 items-center justify-center rounded-full   px-3 font-display text-[1.06rem] leading-none text-[#efe5d2]">
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


                 

                  <div className="mt-4 border-t border-[#d8ccb3]/55 pt-4">
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
          <article className="grid grid-rows-[1fr_auto] max-h-full gap-4 border-b border-[#2c2217]/25 p-3 lg:border-r xl:border-b-0 ">
            <img src={hauntedHouse} alt="Haunted House" className="h-full max-h-[260px] w-full object-cover border border-[#2c2217]/45 sm:max-h-[320px] lg:max-h-[400px]" />
            <div>
              <h3 className="font-display text-[2.05rem] uppercase leading-[0.88]">Haunted House (Three.js)</h3>
              <p className="mt-3 font-body text-[1.15rem] leading-[1.25]">3D scene with realistic shadows, lighting and dynamic sky built using Three.js.</p>
              <div className="mt-3">
                <Quote text="The scene brings together shadows, atmosphere and interactivity beautifully." source="Community Feedback" />
              </div>
            </div>
          </article>

          {/* <article className="grid grid-rows-[1fr_auto] gap-4 border-b border-[#2c2217]/28 p-3 lg:border-r xl:border-b-0">
            <NotificationPreview />
            <div>
              <h3 className="font-domaine text-[2.05rem] uppercase leading-[0.88]">Notification Animation</h3>
              <p className="mt-3 font-body text-[1.15rem] leading-[1.25]">The scene of realistic transitions infusing confidence in the micro-interaction design.</p>
              <div className="mt-3">
                <Quote text="The smoothness of the animation is the highlight. It feels native. Clean CSS, no JS, and it just works." source="CodePen Community" />
              </div>
            </div>
          </article> */}

          

          <article className="grid gap-4 p-3 sm:grid-cols-[11.4rem_1fr] xl:grid-cols-1 ">
            <img src={cssIllustrationCollection} alt="CSS Illustration Collection" className="h-full max-h-[260px] w-full border border-[#2c2217]/45 object-cover bg-[repeating-linear-gradient(100deg,rgba(35,27,20,0.02)_0_12px,transparent_12px_16px)] sm:max-h-[320px] xl:max-h-[400px]" />
            <div>
              <h3 className="font-display text-[2.05rem] uppercase leading-[0.88]"><span className="font-domaine">C</span>SS Illustrati<span className="font-domaine">o</span>n <span className="font-domaine">Co</span>lle<span className="font-domaine">c</span>ti<span className="font-domaine">o</span>n.</h3>
              <p className="mt-3 font-body text-[1.15rem] leading-[1.25]">Hand-drawn illustrations and CSS art exploring detail, imagination and craft.</p>
              <div className="mt-3">
                <Quote text="Crazy detail. This is what CSS art should look like." source="CodePen Community" />
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
