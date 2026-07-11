import PixelPatternRule from "./PixelPatternRule";
import footerPatternBand from "../assets/footer-pattern-band.png";

const socialLinks = [
  { label: "Twitter", href: "https://x.com/satyamkdev" },
  { label: "Instagram", href: "#" },
  { label: "Uiverse", href: "#" },
  { label: "Codepen", href: "#" }
];

export default function MinimalFooter() {
  return (
    <footer className="mt-4 border-y border-[#1e1914]/25">
      <div className="flex items-stretch overflow-hidden border-b border-[#1e1914]/25">
 
        <div className="min-w-0 flex-1 overflow-hidden py-4 sm:py-4">
          <div className="footer-marquee-track flex w-max items-center gap-7 whitespace-nowrap px-4 text-[clamp(2.8rem,5.1vw,6rem)] leading-none tracking-[-0.02em] text-[#17130f] sm:px-6">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="inline-flex items-center gap-7">
                <span>Let&apos;s create something together</span>
                <a
                  href="mailto:satyamkdev@gmail.com"
                  className="inline-flex bg-[#121212] px-4 font-display text-[clamp(2rem,4.3vw,4.7rem)] uppercase leading-[0.9] tracking-[0.02em] text-[#efe8d8]"
                >
                  Email Me
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 py-5 text-[#1e1914] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-4">
        </div>

        <div
          className="flex flex-wrap items-center gap-2 bg-[#17130f] bg-cover bg-center px-3 py-2 text-[clamp(1.3rem,1.7vw,2.35rem)] uppercase leading-none tracking-[0.02em] text-[#efe8d8]"
          style={{ backgroundImage: `url(${footerPatternBand})` }}
        >
          {socialLinks.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-2">
              <a href={item.href} target="_blank" rel="noreferrer" className="font-display text-[#efe8d8] underline-offset-4 hover:underline">
                {item.label}
              </a>
              {item.label !== socialLinks[socialLinks.length - 1].label ? <span className="text-[0.8em]">•</span> : null}
            </span>
          ))}
        </div>
      </div>

      <PixelPatternRule label="LIVE LOVE LAUGH" className="border-t border-[#1e1914]/20" />
      <svg
        width="100%"
        height="44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="footer-pattern-band"
        aria-hidden="true"
      >
        <pattern
          id="footer-pattern-band"
          x="0"
          y="0"
          width="28"
          height="44"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 56 89"
        >
          <g fill="currentColor">
            <path d="M0 25.015V21h4v4.015zM4 21v-4.015h4V21zM0 8.954V4.938h4v4.016zm4 4.015V8.954h4v4.015zm4 4.016v-4.016h4v4.016zM8 4.938V.923h4v4.015zm4 8.031V8.954h4v4.015zm0 12.046V21h4v4.015zm12-8.03V21h-4v-4.015zm0 0v-4.016h4v4.016zM16 4.938V.923h4v4.015zm4 8.031v4.016h-4v-4.016zm0 0V8.954h4v4.015zm0 16.078v-4.032h4v4.032zM28 21v-4.015h4V21zM24 8.954V4.938h4v4.016zm12 16.061V21h4v4.015zm0-8.03v-4.016h4v4.016zm-4-4.016V8.954h4v4.015zm0-8.03V.922h4v4.015zm8 4.015V4.938h4v4.016zm4 16.061V21h4v4.015zm0-8.03v-4.016h4v4.016zM48 21v-4.015h4V21zm0-8.03V8.953h4v4.015zm4 4.015v-4.016h4v4.016zm0-12.047V.923h4v4.015zm-8 0V.923h4v4.015z" />
            <path
              fillRule="evenodd"
              d="M4 33.062H0v8.03h4v4.016h4v4.016h4v4.015h4v-4.015h4v-4.016h4v4.016h4v-4.016h4v-4.015h-4v-4.016h4v-4.015h4v-4.015h-3.984L32 25.015h-4v4.032h-4v4.015h-4v4.015h4v4.016h-4v-4.016h-4v-4.015h4v-4.015h-8v4.015H8v-8.047H4zm4 8.03v-4.015h4v4.016h4v4.015h-4v-4.015zM0 49.124v-4.016h4v4.016zm48 4.015v-4.015h4v-4.016h4v12.047h-4v-4.016z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M0 88.923h56V61.186h-4v-4.031h-4v-4.016h-4v-4.015h-4v4.015h-4v-4.015h4v-4.016h4v4.016h4v-4.016h4v-4.015h4v-4.016h-4v-4.015h4v-4.015h-4v-4.032h-4v8.047h-4v4.015h4v4.016h-4v-4.016h-4v-4.015h-4v4.015h-4v4.016h4v4.015h-4v4.016h-4v4.015h4v4.016h-4v-4.016h-4v-4.015h-4v4.015h-4v4.016h-4v4.03H8l.016-4.03H12v-4.016H8v-4.015H4v4.015H0zm24-15.691v4.015h-4v-4.015zM4 77.247h4v4.016H4zm8-4.015v-4.015h4v4.015zm20 8.03.016 4.032H28v-4.031zm4-4.015v-4.015h4v4.015zM24 61.186V65.2h-4v-4.015zm8 4.015v-4.015h4V65.2zm12 4.016V65.2h4v4.016zm4 12.046v-4.016h4v4.016z"
              clipRule="evenodd"
            />
            <path d="M40 33.062h4v-8.047h-4z" />
          </g>
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#footer-pattern-band)" />
      </svg>
    </footer>
  );
}
