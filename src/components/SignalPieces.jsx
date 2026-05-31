import quincyLarsonPhoto from "../assets/quincy-larson.png";
import pongPreview from "../assets/signals/pong-preview.png";
import ProjectActionChip from "./ProjectActionChip";
import { TweetIcon } from "./icons";

const PONG_PROJECT_HREF =
  "https://freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-pong-game";

export function PongPreview({
  actionHref = PONG_PROJECT_HREF,
  actionLabel = "View Project"
}) {
  return (
    <div className="group relative w-[400px] h-[400px] outline outline-[#1d1b17]/60 outline-offset-4">
      <img
        src={pongPreview}
        alt="Pong game preview"
        className="absolute inset-0 h-full w-full "
        loading="lazy"
      />
      <span
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12),rgba(0,0,0,0.6)),radial-gradient(120%_116%_at_100%_0%,rgba(255,255,255,0.18),transparent_36%)]"
        aria-hidden="true"
      />
      {actionHref ? (
        <div className="absolute inset-0 z-[1] flex items-end justify-start p-4 opacity-100 transition-opacity duration-200 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
          <ProjectActionChip label={actionLabel} href={actionHref} size="compact" />
        </div>
      ) : null}
    </div>
  );
}


export function Quote({ text }) {
  return (
    <figure className="m-0">
      <blockquote className="font-body text-[1.1rem] italic leading-[1.25] text-[#261d15]">&ldquo;{text}&rdquo;</blockquote>
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
    <div className="relative mt-4 mr-4 ml-[-3px]">
      <div className="relative isolate max-w-[20.5rem] overflow-hidden sm:max-w-[22rem]">
        <svg
          aria-hidden="true"
          viewBox="0 0 240 150"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <path
            d="M7 7 L72 7.4 L139 6.8 L233 7.2 L233.3 52 L232.8 98 L233 143 L161 142.5 L84 143.2 L7 142 L7.5 92 L6.8 47 L7 7 Z"
            fill="none"
            stroke="#2a24244d"
            strokeWidth="1.05"
            strokeLinecap="square"
            strokeLinejoin="miter"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
  
        <div className="relative z-[1] p-2">
          {children}
        </div>
      </div>
    </div>
  );
}

export function QuincyRecognitionStory() {
  return (
    <div className="mt-4 border-t border-[#2c2217]/45 pt-2">
        <div className="w-full">
          <HanddrawnLabel text="Recognized by" />
          <div className="mt-2 flex items-start justify-between gap-3 md:flex-col md:items-start lg:flex-row lg:items-start xl:flex-row">
            <div className="min-w-0">
              <p className="font-domaine text-[clamp(1.6rem,7vw,3.05rem)] uppercase leading-[0.9] tracking-[-0.03em] text-[#16100c] md:text-[clamp(1.85rem,3vw,2.6rem)] xl:text-[clamp(1.8rem,2.7vw,3.05rem)]">
                Quincy Larson
              </p>
              <p className="mt-[1px] font-domaine text-[clamp(0.84rem,3.5vw,1.35rem)] italic leading-[0.98] text-[#1d1510] md:text-[clamp(0.82rem,1.35vw,1.05rem)] xl:text-[clamp(0.8rem,1.22vw,1.35rem)]">
                (Founder, freeCodeCamp)
              </p>
            </div>
           
          </div>
          <div className="relative justify-self-start md:justify-self-center">
        </div>
        </div>

       

      <div className="mt-3 max-w-[42rem]">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-body text-[clamp(0.96rem,3.5vw,1.16rem)] leading-[1.15] text-[#1c150f] md:text-[clamp(0.94rem,1.3vw,1.06rem)] xl:text-[clamp(0.96rem,1.2vw,1.16rem)]">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#17110c] text-[#f5ecdd]">
            <TweetIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-balance mt-2">
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
                <img src={quincyLarsonPhoto} width={40} height={40} className="h-[40px] w-auto" />
                <div>
                  <p className="flex flex-wrap items-center gap-1.5 font-body text-[0.84rem] font-semibold leading-none text-[#1e1710] sm:text-[0.92rem]">
                    <span className="text-[15px]">Quincy Larson</span>
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#1e1710] text-[0.56rem] leading-none text-[#f3eadb]">
                      ✓
                    </span>
                  </p>
                  <p className="mt-1.5 font-body text-[0.62rem] leading-none text-[#5f5042] sm:text-[0.92rem]">@ossia</p>
                </div>
              </div>
            </div>
            <span className="shrink-0 font-display text-[1rem] uppercase leading-none text-[#1e1710]">X</span>
          </div>

          <div className="pl-1 sm:pl-1.5">
            <p className="mb-2 mt-2 ml-6 font-domaine text-[1.4rem] italic leading-[0.98] tracking-[-0.0] text-[#16100b] ">
              &ldquo;Awesome, can you link to the pen?&rdquo;
            </p>
          </div>
        </SketchTweetCard>

        <div className="mt-6 max-w-[33rem] font-body text-[clamp(1rem,3.8vw,1.08rem)] leading-[1.18] text-[#201710] md:text-[clamp(0.96rem,1.1vw,1rem)] xl:text-[clamp(1.2rem,1.04vw,1rem)]">
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

