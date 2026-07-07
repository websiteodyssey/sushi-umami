import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { DISHES, type Dish } from "../data/dishes";

const P = `${import.meta.env.BASE_URL}images/plats-web/`;

/** Deterministic shuffle so the dishes read as a varied mix (stable across renders). */
const shuffle = (arr: Dish[], seed: number) => {
  const a = [...arr];
  let s = seed;
  const rnd = () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const MIXED = shuffle(DISHES, 730421);

/**
 * One dish row that gently drifts sideways as the section scrolls through the
 * viewport (soft, eased, non-pinned — the page keeps flowing), while the arrows
 * let the visitor browse the rest at will. `dir` flips the drift direction so the
 * two rows glide in opposition for a luxurious feel.
 */
const DishRow = ({ dishes, dir }: { dishes: Dish[]; dir: number }) => {
  const { t } = useTranslation();
  const rowRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const max = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const track = trackRef.current;
    const vp = viewportRef.current;
    const row = rowRef.current;
    if (!track || !vp || !row) return;

    let raf = 0;
    let cur = 0;
    let running = true;

    const remeasure = () => {
      max.current = Math.max(0, track.scrollWidth - vp.clientWidth);
      if (offset.current < -max.current) offset.current = -max.current;
    };
    const target = () => {
      let drift = 0;
      if (!reduce && max.current > 0) {
        const rect = row.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        const soft = Math.min(300, max.current);
        drift = dir > 0 ? -p * soft : -(1 - p) * soft;
      }
      return Math.max(-max.current, Math.min(0, drift + offset.current));
    };
    const tick = () => {
      cur += (target() - cur) * 0.08;
      track.style.transform = `translate3d(${cur.toFixed(2)}px, 0, 0)`;
      if (running) raf = requestAnimationFrame(tick);
    };

    remeasure();
    window.addEventListener("resize", remeasure);
    raf = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", remeasure);
    };
  }, [dir, dishes.length]);

  const nudge = (d: number) => {
    const card = trackRef.current?.querySelector("article") as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : 300;
    offset.current = Math.max(-max.current, Math.min(0, offset.current - d * step));
  };

  return (
    <div ref={rowRef} className="relative">
      <div ref={viewportRef} className="overflow-hidden">
        <div ref={trackRef} className="flex gap-4 md:gap-6 px-6 md:px-[7vw] py-1 w-max will-change-transform">
          {dishes.map((dsh) => (
            <article
              key={dsh.slug}
              className="group relative shrink-0 w-[62vw] xs:w-[15rem] sm:w-[17rem] lg:w-[20rem] aspect-[3/4] overflow-hidden rounded-lg border border-luxury-gold/15"
            >
              <img
                src={`${P}${dsh.slug}.webp`}
                alt={`${dsh.name} — ${t("specialties.altSuffix")}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/85 via-luxury-black/10 to-transparent transition-opacity duration-500 group-hover:from-luxury-black/70" />
              <span className="pointer-events-none absolute inset-4 border border-luxury-gold/0 group-hover:border-luxury-gold/30 transition-all duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <span className="block h-px w-8 origin-left scale-x-50 bg-luxury-gold/70 mb-2 transition-transform duration-500 group-hover:scale-x-100" />
                <h3 className="font-display text-lg md:text-xl lg:text-2xl text-luxury-cream leading-tight">
                  {dsh.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label={t("common.previous", "Précédent")}
        onClick={() => nudge(-1)}
        className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-luxury-gold/50 bg-luxury-black/60 text-luxury-cream backdrop-blur-sm hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold transition-colors shadow-lg shadow-black/40"
      >
        <ChevronLeft className="h-5 w-5 md:h-[22px] md:w-[22px]" />
      </button>
      <button
        type="button"
        aria-label={t("common.next", "Suivant")}
        onClick={() => nudge(1)}
        className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-luxury-gold/50 bg-luxury-black/60 text-luxury-cream backdrop-blur-sm hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold transition-colors shadow-lg shadow-black/40"
      >
        <ChevronRight className="h-5 w-5 md:h-[22px] md:w-[22px]" />
      </button>
    </div>
  );
};

/**
 * Home "Nos Spécialités": two NIGIRI-style rows of shuffled dishes that softly
 * drift in opposite directions as you scroll, with arrows to browse the rest.
 */
const SpecialtiesCarousel = () => {
  const { t } = useTranslation();
  const mid = Math.ceil(MIXED.length / 2);
  const rowA = MIXED.slice(0, mid);
  const rowB = MIXED.slice(mid);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 grain overflow-hidden">
      <div className="section-padding relative z-10">
        <Reveal className="max-w-3xl mx-auto mb-10 md:mb-14">
          <SectionHeading
            tone="dark"
            eyebrow={t("specialties.eyebrow")}
            title={t("specialties.title")}
            subtitle={t("specialties.subtitle")}
          />
        </Reveal>
      </div>

      <div className="space-y-5 md:space-y-8">
        <Reveal>
          <DishRow dishes={rowA} dir={1} />
        </Reveal>
        <Reveal delay={120}>
          <DishRow dishes={rowB} dir={-1} />
        </Reveal>
      </div>

      <Reveal className="section-padding mt-12 md:mt-14 text-center relative z-10">
        <Link
          to="/menu"
          className="group inline-flex items-center gap-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-colors font-body uppercase text-sm tracking-luxury rounded-full px-8 py-4"
        >
          {t("specialties.cta")}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
};

export default SpecialtiesCarousel;
