import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SectionFX from "../components/SectionFX";

type Kind = "room" | "plate";

const Gallery = () => {
  const { t } = useTranslation();

  const base = import.meta.env.BASE_URL;
  const venue = (id: string, kind: Kind, aspect: string) => ({
    src: `${base}images/venue/${id}.webp`,
    alt: kind === "room" ? t("gallery.venueAlt") : t("gallery.plateAlt"),
    label: kind === "room" ? t("gallery.labelRoom") : t("gallery.labelPlate"),
    aspect,
  });

  // One distinct photo per scene from the venue shoot (near-identical frames of the
  // same wall / mirror were dropped), interiors and plated creations shuffled
  // together — never grouped in blocks — so the masonry stays lively. Each tile's
  // aspect matches the photo's real orientation — landscape rooms read wide,
  // portrait shots stand tall — so nothing crops awkwardly.
  const images = [
    venue("2t9a8800", "room", "aspect-[4/3]"),
    venue("2t9a8803", "room", "aspect-[3/4]"),
    venue("2t9a9541", "plate", "aspect-[4/5]"),
    venue("2t9a8816", "room", "aspect-[3/4]"),
    venue("2t9a8823", "room", "aspect-[4/3]"),
    venue("2t9a9549", "plate", "aspect-[4/3]"),
    venue("2t9a8836", "room", "aspect-[4/5]"),
    venue("2t9a8851", "room", "aspect-[3/4]"),
    venue("2t9a9547", "plate", "aspect-[3/4]"),
    venue("2t9a8853", "room", "aspect-[5/6]"),
    venue("2t9a8856", "room", "aspect-[3/4]"),
    venue("2t9a9555", "plate", "aspect-[4/5]"),
    venue("2t9a8859", "room", "aspect-[4/5]"),
    venue("2t9a8806", "room", "aspect-[3/4]"),
    venue("2t9a9510", "plate", "aspect-[3/4]"),
    venue("2t9a8893", "room", "aspect-[3/4]"),
  ];

  // Lightbox: click a tile to admire the full photo, navigate with the arrow keys.
  const [active, setActive] = useState<number | null>(null);
  const count = images.length;
  const close = () => setActive(null);
  const step = (dir: number) =>
    setActive((a) => (a === null ? a : (a + dir + count) % count));

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    // Lock background scroll while the lightbox is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, count]);

  return (
    <div>
      <PageHero
        title={t("gallery.heroTitle")}
        subtitle={t("gallery.heroSubtitle")}
        backgroundImage={`${import.meta.env.BASE_URL}images/venue/2t9a8812.webp`}
      />

      <section className="emerald-wash relative overflow-hidden py-16 md:py-24 lg:py-32 bg-luxury-ink grain">
        <SectionFX />

        {/* Floating gold diamonds — a quiet decorative flourish echoed across the site */}
        <span className="absolute top-24 left-[6%] animate-float" aria-hidden="true">
          <span className="block h-2.5 w-2.5 rotate-45 bg-luxury-gold/20" />
        </span>
        <span
          className="absolute bottom-28 right-[7%] animate-float"
          style={{ animationDelay: "1.3s" }}
          aria-hidden="true"
        >
          <span className="block h-2 w-2 rotate-45 bg-luxury-gold/25" />
        </span>

        <div className="section-padding relative z-10">
          <Reveal className="max-w-2xl mx-auto mb-12 md:mb-16">
            <SectionHeading
              tone="dark"
              eyebrow={t("gallery.heroSubtitle")}
              title={t("gallery.title")}
              subtitle={t("gallery.subtitle")}
            />
          </Reveal>

          {/* Masonry mosaic — varied heights interlock for a lively layout on mobile
              (2 cols) and desktop (3 cols), never a plain single-column stack */}
          <div className="columns-2 lg:columns-3 gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto">
            {images.map((img, i) => (
              <Reveal
                key={img.src}
                delay={(i % 3) * 110}
                className="mb-3 sm:mb-4 md:mb-5 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={img.alt}
                  className="group gold-glow relative block w-full overflow-hidden rounded-lg border border-luxury-gold/12 hover:border-luxury-gold/40 transition-colors duration-500 cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className={`w-full object-cover transition-[transform,filter] duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08] group-hover:brightness-[1.04] ${img.aspect}`}
                  />

                  {/* Diagonal gold light sweep gliding across on hover */}
                  <span
                    className="pointer-events-none absolute inset-0 -translate-x-[130%] group-hover:translate-x-[130%] transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      background:
                        "linear-gradient(115deg, transparent 34%, rgba(242,220,162,0.28) 50%, rgba(255,246,223,0.14) 54%, transparent 68%)",
                    }}
                  />

                  {/* Bottom scrim so the caption stays legible */}
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-luxury-black/75 via-luxury-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Hairline gold frame drawn inside on hover */}
                  <span className="pointer-events-none absolute inset-[0.6rem] rounded border border-luxury-gold/0 group-hover:border-luxury-gold/40 transition-colors duration-700" />

                  {/* Gold corner brackets that light up on hover */}
                  <span className="pointer-events-none absolute top-2 left-2 h-4 w-4 border-t border-l border-luxury-gold/0 group-hover:border-luxury-gold-bright/80 transition-colors duration-500" />
                  <span className="pointer-events-none absolute top-2 right-2 h-4 w-4 border-t border-r border-luxury-gold/0 group-hover:border-luxury-gold-bright/80 transition-colors duration-500" />
                  <span className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 border-b border-l border-luxury-gold/0 group-hover:border-luxury-gold-bright/80 transition-colors duration-500" />
                  <span className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b border-r border-luxury-gold/0 group-hover:border-luxury-gold-bright/80 transition-colors duration-500" />

                  {/* Zoom cue — a gold ring with a plus, fading in on hover */}
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-luxury-gold-bright/70 bg-luxury-black/35 backdrop-blur-sm text-luxury-gold-bright opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                      <Plus size={18} strokeWidth={1.5} />
                    </span>
                  </span>

                  {/* Category caption rising from the bottom on hover */}
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-3.5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="h-px w-5 bg-luxury-gold" />
                    <span className="font-accent uppercase text-[0.6rem] tracking-luxury text-luxury-gold-bright">
                      {img.label}
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== LIGHTBOX ===================== */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-luxury-black/92 backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={images[active].alt}
        >
          <span className="frame-inset" aria-hidden="true" />

          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label={t("gallery.close")}
            className="absolute top-5 right-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-luxury-gold/40 text-luxury-champagne hover:text-luxury-gold-bright hover:border-luxury-gold hover:rotate-90 transition-all duration-500"
          >
            <X size={20} strokeWidth={1.5} />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label={t("gallery.prev")}
            className="absolute left-3 md:left-6 z-10 grid h-12 w-12 place-items-center rounded-full border border-luxury-gold/30 text-luxury-champagne hover:text-luxury-gold-bright hover:border-luxury-gold hover:-translate-x-0.5 transition-all duration-[400ms]"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>

          {/* Image + caption (re-mounts on navigation for a soft fade) */}
          <figure
            key={active}
            onClick={(e) => e.stopPropagation()}
            className="animate-fade-up relative flex max-h-[86vh] max-w-[92vw] flex-col items-center"
          >
            <img
              src={images[active].src}
              alt={images[active].alt}
              className="max-h-[78vh] max-w-[92vw] rounded-md border border-luxury-gold/25 object-contain shadow-[0_40px_130px_-24px_rgba(0,0,0,0.9)]"
            />
            <figcaption className="mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-6 bg-luxury-gold/60" />
              <span className="font-accent uppercase text-[0.65rem] tracking-luxury text-luxury-gold-bright">
                {images[active].label}
              </span>
              <span className="font-accent text-xs text-luxury-champagne/50 num-elegant">
                {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
              <span className="h-px w-6 bg-luxury-gold/60" />
            </figcaption>
          </figure>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label={t("gallery.next")}
            className="absolute right-3 md:right-6 z-10 grid h-12 w-12 place-items-center rounded-full border border-luxury-gold/30 text-luxury-champagne hover:text-luxury-gold-bright hover:border-luxury-gold hover:translate-x-0.5 transition-all duration-[400ms]"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
