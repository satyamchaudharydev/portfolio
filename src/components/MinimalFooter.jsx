const socialLinks = [
  { label: "Twitter", href: "https://x.com/satyamkdev" },
  { label: "Instagram", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "Behance", href: "#" }
];

export default function MinimalFooter() {
  return (
    <footer className="mt-4 border-y border-[#1e1914]/25">
      <div className="overflow-hidden border-b border-[#1e1914]/25 py-6 sm:py-8">
        <div className="footer-marquee-track flex w-max items-center gap-7 whitespace-nowrap px-4 text-[clamp(2.8rem,5.1vw,6rem)] leading-none tracking-[-0.02em] text-[#17130f] sm:px-6">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-7">
              <span>Let&apos;s create something together</span>
              <a
                href="mailto:satyamkdev@gmail.com"
                className="inline-flex bg-[#121212] px-4 py-1 font-display text-[clamp(2rem,4.3vw,4.7rem)] uppercase leading-[0.9] tracking-[0.02em] text-[#efe8d8]"
              >
                Email Me
              </a>
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 py-5 text-[#1e1914] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-4">
          <p className="m-0 font-display text-[clamp(1.65rem,2.25vw,3rem)] uppercase leading-none tracking-[0.02em]">Satyam©</p>
          <span className="inline-flex h-10 w-10 items-center justify-center border border-[#2c2217]/25 bg-[#efe6d2]/70 font-body text-[1.2rem] leading-none">✷</span>
          <p className="m-0 font-body text-[clamp(1.5rem,2vw,2.6rem)] leading-none">Legal</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-[clamp(1.3rem,1.7vw,2.35rem)] uppercase leading-none tracking-[0.02em]">
          {socialLinks.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-2">
              <a href={item.href} target="_blank" rel="noreferrer" className="font-display text-[#1e1914] underline-offset-4 hover:underline">
                {item.label}
              </a>
              {item.label !== socialLinks[socialLinks.length - 1].label ? <span className="text-[0.8em]">•</span> : null}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
