import { useEffect, useState } from "react";
import { motion, useAnimate, useReducedMotion } from "framer-motion";
import heroPortrait from "./assets/hero-portrait.png";
import HeroIntroSection from "./components/HeroIntroSection";
import MinimalFooter from "./components/MinimalFooter";
import SignalsSection from "./components/SignalsSection";
import WorkHighlightsSection from "./components/WorkHighlightsSection";
import Separator from "./components/Separator";

export default function App() {
  const [introActive, setIntroActive] = useState(true);
  const [cardScope, animateCard] = useAnimate();
  const [spinScope, animateSpin] = useAnimate();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!introActive) return undefined;

    const scrollY = window.scrollY;
    const { style } = document.body;
    const previousOverflow = style.overflow;
    const previousPosition = style.position;
    const previousTop = style.top;
    const previousWidth = style.width;

    style.overflow = "hidden";
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.width = "100%";

    return () => {
      style.overflow = previousOverflow;
      style.position = previousPosition;
      style.top = previousTop;
      style.width = previousWidth;
      window.scrollTo({ top: scrollY, left: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });
    };
  }, [introActive, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setIntroActive(false);
      return;
    }

    (async () => {
      await animateCard(
        cardScope.current,
        { y: ["-20vh", "-100vh"] },
        { duration: 0.8, ease: [1, 0.4, 0.2, 0.8] }
      );
      await new Promise((resolve) => setTimeout(resolve, 220));
      const phaseTwoTransition = {
        duration: 0.8,
        ease: [1, 0.4, 0.6, 0.8]
      };

      await Promise.all([
        animateCard(cardScope.current, { y: 0, scale: 1 }, phaseTwoTransition),
        animateSpin(spinScope.current, { rotate: -360 }, phaseTwoTransition)
      ]);
      animateSpin(spinScope.current, { rotate: 0 }, { duration: 0 });
      setIntroActive(false);
    })();
  }, [animateCard, animateSpin, cardScope, shouldReduceMotion, spinScope]);

  return (
    <>
      {introActive && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[9998] bg-[#171818] pointer-events-none"
        />
      )}
      <div
        className={`vintage-paper relative min-h-screen text-ink font-body selection:bg-accent selection:text-paper antialiased ${
          introActive ? "z-[9999] overflow-hidden" : ""
        }`}
      >
        <motion.main
          ref={spinScope}
          className="w-full max-w-none py-0"
          style={{
            transformOrigin: "50% 50vh",
            willChange: introActive ? "transform" : "auto",
            backfaceVisibility: "hidden",
          }}
        >
          <motion.div
            ref={cardScope}
            className="w-full"
            initial={{ y: "82vh", scale: 0.55 }}
            style={{
              transformOrigin: "50% 50%",
              willChange: introActive ? "transform" : "auto",
              backfaceVisibility: "hidden",
              ...(introActive && {
                boxShadow: "0 26px 80px rgba(0,0,0,0.42), 0 7px 26px rgba(0,0,0,0.28)",
              }),
            }}
          >
            <HeroIntroSection heroPortrait={heroPortrait} />
            <WorkHighlightsSection />
            <Separator variant="normal" className="mt-6 mb-4" />
            <SignalsSection />
            <MinimalFooter />
          </motion.div>
        </motion.main>
      </div>
    </>
  );
}
