import { useTranslation } from "react-i18next";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SectionFX from "../components/SectionFX";
import { DISHES } from "../data/dishes";

// Varied heights so the masonry interlocks instead of reading as a plain stack.
const ASPECTS = [
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[1/1]",
  "aspect-[4/3]",
  "aspect-[3/4]",
  "aspect-[5/6]",
];

const Gallery = () => {
  const { t } = useTranslation();

  const base = import.meta.env.BASE_URL;
  const amb = (name: string, alt: string) => ({ src: `${base}images/${name}.webp`, alt, feature: true });
  const dish = (slug: string) => {
    const d = DISHES.find((x) => x.slug === slug);
    return {
      src: `${base}images/plats-web/${slug}.webp`,
      alt: `${d?.name ?? slug} — ${t("specialties.altSuffix")}`,
      feature: false,
    };
  };

  // Editorial rhythm: a wide ambiance "feature" every third tile, framed by two
  // portrait dish shots, so only a few images share the screen and each breathes.
  const images = [
    amb("dining", t("gallery.diningAlt")),
    dish("fiori-ciliegio"),
    dish("sushi-max"),
    amb("signature", t("gallery.signatureAlt")),
    dish("sashimi-misto"),
    dish("sake-mango"),
    dish("dragon-roll"),
    dish("black-legenda-aurea"),
    dish("carpaccio-sake-flambe"),
    dish("spicy-sake-maki"),
    amb("bar", t("gallery.barAlt")),
    dish("tacos-sake"),
    dish("gambero-cotto"),
    dish("sushi-deluxe"),
    dish("tiger-roll"),
    amb("table-detail", t("gallery.tableAlt")),
    dish("salmone-passione"),
  ];

  return (
    <div>
      <PageHero
        title={t("gallery.heroTitle")}
        subtitle={t("gallery.heroSubtitle")}
        backgroundImage={`${import.meta.env.BASE_URL}images/dining.webp`}
      />

      <section className="emerald-wash relative overflow-hidden py-16 md:py-24 lg:py-32 bg-luxury-ink grain">
        <SectionFX />
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
                className="mb-3 sm:mb-4 md:mb-5 break-inside-avoid group relative overflow-hidden rounded-lg border border-luxury-gold/12"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07] ${ASPECTS[i % ASPECTS.length]}`}
                />
                <span className="pointer-events-none absolute inset-3 border border-luxury-gold/0 group-hover:border-luxury-gold/35 transition-all duration-700" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
