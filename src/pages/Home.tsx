import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Fish, Sandwich, Flame, Soup, Salad, Shell, IceCream, ArrowRight } from "lucide-react";
import Carousel from "../components/Carousel";
import ImageMarquee from "../components/ImageMarquee";

const Home = () => {
  const { t } = useTranslation();

  const universes = [
    { icon: Fish, title: t("home.universe1Title"), text: t("home.universe1Text") },
    { icon: Sandwich, title: t("home.universe2Title"), text: t("home.universe2Text") },
    { icon: Flame, title: t("home.universe3Title"), text: t("home.universe3Text") },
    { icon: Soup, title: t("home.universe4Title"), text: t("home.universe4Text") },
    { icon: Salad, title: t("home.universe5Title"), text: t("home.universe5Text") },
    { icon: Shell, title: t("home.universe6Title"), text: t("home.universe6Text") },
    { icon: IceCream, title: t("home.universe7Title"), text: t("home.universe7Text") },
  ];

  const marqueeImagesA = [
    { src: "/images/interior-1.png", alt: t("gallery.interior1Alt") },
    { src: "/images/interior-2.png", alt: t("gallery.interior2Alt") },
    { src: "/images/interior-3.png", alt: t("gallery.interior3Alt") },
    { src: "/images/logo.png", alt: t("common.brand") },
  ];

  const marqueeImagesB = [
    { src: "/images/interior-2.png", alt: t("gallery.interior2Alt") },
    { src: "/images/logo.png", alt: t("common.brand") },
    { src: "/images/interior-3.png", alt: t("gallery.interior3Alt") },
    { src: "/images/interior-1.png", alt: t("gallery.interior1Alt") },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: "url('/images/interior-3.png')" }}
        />
        <div className="absolute inset-0 bg-luxury-gradient pointer-events-none" />
        <div className="relative z-10 text-center px-6">
          <p className="text-luxury-champagne text-sm md:text-lg tracking-luxury uppercase font-body mb-4">
            {t("home.heroSubtitle")}
          </p>
          <h1 className="text-display-xl md:text-[6rem] font-display text-white leading-none">
            {t("home.heroTitle")}
          </h1>
          <p className="text-display-md font-display italic text-luxury-gold mt-6">
            {t("home.heroTagline")}
          </p>
          <div className="mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 bg-luxury-gold text-luxury-black hover:bg-luxury-cream transition-colors font-body uppercase text-sm tracking-luxury px-10 py-4"
            >
              {t("home.heroCta2")}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Ambiance marquees */}
      <section className="py-16 md:py-24 lg:py-32 bg-luxury-cream overflow-hidden">
        <div className="section-padding mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-luxury-gold text-sm tracking-luxury uppercase font-body mb-4">
              {t("home.ambianceSubtitle")}
            </p>
            <h2 className="text-display-md font-display text-luxury-black mb-4">
              {t("home.ambianceTitle")}
            </h2>
            <div className="h-px bg-luxury-gold mx-auto w-20" />
          </div>
        </div>
        <div className="space-y-6">
          <ImageMarquee images={marqueeImagesA} direction="left" speed={45} />
          <ImageMarquee images={marqueeImagesB} direction="right" speed={50} />
        </div>
        <div className="section-padding mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-block border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-colors font-body uppercase text-sm tracking-luxury px-8 py-4"
          >
            {t("home.ambianceCta")}
          </Link>
        </div>
      </section>

      {/* 7 Universes */}
      <section className="py-16 md:py-24 lg:py-32 bg-luxury-cream relative overflow-hidden">
        <img
          src="/images/sakura-branch.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-0 w-[26rem] md:w-[36rem] opacity-50 pointer-events-none select-none"
        />
        <div className="section-padding relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-display-md font-display text-luxury-black mb-4">
              {t("home.universesTitle")}
            </h2>
            <p className="text-lg text-luxury-gray font-body">
              {t("home.universesSubtitle")}
            </p>
            <div className="h-px bg-luxury-gold mx-auto mt-6 w-20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {universes.map((u) => (
              <div key={u.title} className="luxury-card p-8 text-center flex flex-col items-center">
                <u.icon className="text-luxury-gold mb-4" size={32} />
                <h3 className="font-display text-xl text-luxury-black mb-2">{u.title}</h3>
                <p className="font-body text-luxury-gray-dark leading-relaxed">{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-luxury-black overflow-hidden">
        <div className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-luxury-gold text-sm tracking-luxury uppercase font-body mb-4">
              {t("home.galleryPreviewSubtitle")}
            </p>
            <h2 className="text-display-md font-display text-luxury-cream mb-6">
              {t("home.galleryPreviewTitle")}
            </h2>
            <p className="text-lg text-luxury-cream/80 font-body leading-relaxed mb-8">
              {t("home.galleryPreviewText")}
            </p>
            <Link
              to="/gallery"
              className="inline-block border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-colors font-body uppercase text-sm tracking-luxury px-8 py-4"
            >
              {t("home.galleryPreviewCta")}
            </Link>
          </div>
          <div className="h-80 lg:h-[28rem]">
            <Carousel
              slides={[
                { src: "/images/interior-1.png", alt: t("gallery.interior1Alt") },
                { src: "/images/interior-2.png", alt: t("gallery.interior2Alt") },
                { src: "/images/interior-3.png", alt: t("gallery.interior3Alt") },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-luxury-cream text-center">
        <div className="section-padding max-w-2xl mx-auto">
          <h2 className="text-display-md font-display text-luxury-black mb-6">
            {t("home.ctaTitle")}
          </h2>
          <p className="text-lg text-luxury-gray-dark font-body leading-relaxed mb-8">
            {t("home.ctaText")}
          </p>
          <button
            type="button"
            className="inline-block bg-luxury-gold text-luxury-black hover:bg-luxury-black hover:text-luxury-gold transition-colors font-body uppercase text-sm tracking-luxury px-10 py-4"
          >
            {t("home.ctaButton")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
