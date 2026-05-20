import quincyLarsonPhoto from "../assets/quincy-larson.png";
import { RoughRoundedRectIcon, TweetIcon } from "./icons";

export function PongPreview() {
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


export function Quote({ text }) {
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

export function QuincyRecognitionStory() {
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

export function ProjectActionChip({ label, href }) {
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
