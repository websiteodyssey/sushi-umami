import { useEffect, useState } from "react";

const P = `${import.meta.env.BASE_URL}images/plats-web/`;

/**
 * Dish slugs shown, in order, behind the hero. Deliberately limited to plates
 * that are round/centred with generous margin around the food, so object-cover
 * never crops into the dish — the plate stays whole and appetising on both wide
 * desktop and tall mobile viewports.
 */
const SLIDES = [
  "sushi-max",
  "sushi-deluxe",
  "sashimi-misto",
  "sake-mango",
  "fiori-ciliegio",
  "foresta-salmone",
];

interface HeroSlideshowProps {
  /** Milliseconds each dish stays before crossfading to the next. */
  intervalMs?: number;
}

/**
 * A full-bleed, auto-advancing dish carousel that lives *behind* the hero copy.
 * Images crossfade into one another while a slow ken-burns zoom breathes across
 * them, so the culinary world is the very first thing a visitor sees. Purely
 * decorative (the hero <h1> carries the meaning), so the images are aria-hidden
 * with empty alts. The zoom is disabled under prefers-reduced-motion via CSS.
 */
const HeroSlideshow = ({ intervalMs = 3200 }: HeroSlideshowProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      intervalMs
    );
    return () => clearInterval(timer);
  }, [intervalMs]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-luxury-black" aria-hidden="true">
      {SLIDES.map((slug, i) => (
        <img
          key={slug}
          src={`${P}${slug}-hero.webp`}
          alt=""
          fetchPriority={i === 0 ? "high" : "low"}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          className={`animate-hero-zoom absolute inset-0 h-full w-full object-cover transition-opacity duration-[1000ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ animationDelay: `${i * -3}s` }}
        />
      ))}
    </div>
  );
};

export default HeroSlideshow;
