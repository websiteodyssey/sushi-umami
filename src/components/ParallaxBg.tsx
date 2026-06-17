import { useEffect, useRef } from "react";

interface ParallaxBgProps {
  src: string;
  /** Extra classes, e.g. opacity. */
  className?: string;
  /** Pixels of drift across the viewport; higher = stronger. */
  strength?: number;
}

/**
 * A full-bleed background image that drifts slowly against the scroll. Overscans
 * its parent (which must be `relative overflow-hidden`) so the motion never
 * reveals an edge. Respects reduced-motion.
 */
const ParallaxBg = ({ src, className = "", strength = 40 }: ParallaxBgProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      el.style.transform = `translate3d(0, ${(-progress * strength).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute -inset-y-[14%] inset-x-0 bg-cover bg-center bg-no-repeat will-change-transform ${className}`}
      style={{ backgroundImage: `url('${src}')` }}
    />
  );
};

export default ParallaxBg;
