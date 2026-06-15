import { useTranslation } from "react-i18next";
import PageHero from "../components/PageHero";
import Carousel from "../components/Carousel";

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    { src: "/images/interior-1.png", alt: t("gallery.interior1Alt") },
    { src: "/images/interior-2.png", alt: t("gallery.interior2Alt") },
    { src: "/images/interior-3.png", alt: t("gallery.interior3Alt") },
  ];

  return (
    <div className="pt-20">
      <PageHero
        title={t("gallery.heroTitle")}
        subtitle={t("gallery.heroSubtitle")}
        backgroundImage="/images/interior-1.png"
        emoji="🍣"
      />

      <section className="py-12 md:py-20 lg:py-28 bg-luxury-cream">
        <div className="section-padding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-display-md font-display text-luxury-black mb-4">
              {t("gallery.title")}
            </h2>
            <p className="text-lg text-luxury-gray font-body">{t("gallery.subtitle")}</p>
            <div className="h-px bg-luxury-gold mx-auto mt-6 w-20" />
          </div>

          {/* Featured carousel */}
          <div className="h-[40vh] md:h-[60vh] mb-10">
            <Carousel slides={images} />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((img) => (
              <div key={img.src} className="relative h-72 overflow-hidden group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
