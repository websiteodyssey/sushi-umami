import { useTranslation } from "react-i18next";
import PageHero from "../components/PageHero";
import Carousel from "../components/Carousel";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import GoldFrame from "../components/GoldFrame";

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    { src: `${import.meta.env.BASE_URL}images/dining.png`, alt: t("gallery.diningAlt") },
    { src: `${import.meta.env.BASE_URL}images/signature.png`, alt: t("gallery.signatureAlt") },
    { src: `${import.meta.env.BASE_URL}images/salon.png`, alt: t("gallery.salonAlt") },
    { src: `${import.meta.env.BASE_URL}images/bar.png`, alt: t("gallery.barAlt") },
    { src: `${import.meta.env.BASE_URL}images/atrium.png`, alt: t("gallery.atriumAlt") },
    { src: `${import.meta.env.BASE_URL}images/washroom.png`, alt: t("gallery.washroomAlt") },
  ];

  return (
    <div>
      <PageHero
        title={t("gallery.heroTitle")}
        subtitle={t("gallery.heroSubtitle")}
        backgroundImage={`${import.meta.env.BASE_URL}images/dining.png`}
      />

      <section className="emerald-wash relative py-16 md:py-24 lg:py-32 bg-luxury-ink grain">
        <div className="section-padding relative z-10">
          <Reveal className="max-w-2xl mx-auto mb-14">
            <SectionHeading
              tone="dark"
              eyebrow={t("gallery.heroSubtitle")}
              title={t("gallery.title")}
              subtitle={t("gallery.subtitle")}
            />
          </Reveal>

          {/* Featured carousel */}
          <Reveal className="mb-12">
            <GoldFrame>
              <div className="h-[44vh] md:h-[64vh]">
                <Carousel slides={images} />
              </div>
            </GoldFrame>
          </Reveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {images.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 140} className="relative h-72 lg:h-80 overflow-hidden group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-500" />
                <span className="absolute bottom-4 left-4 right-4 font-body text-sm text-luxury-cream/0 group-hover:text-luxury-cream/90 transition-colors duration-500">
                  {img.alt}
                </span>
                <span className="absolute top-4 right-4 h-8 w-8 border border-luxury-gold/0 group-hover:border-luxury-gold/60 transition-colors duration-500" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
