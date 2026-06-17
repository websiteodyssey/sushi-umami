import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Fish, Sandwich, Flame, Soup, Salad, Shell, IceCream, ArrowRight, ChevronDown } from "lucide-react";
import ImageMarquee from "../components/ImageMarquee";
import Reveal from "../components/Reveal";
import Ornament from "../components/Ornament";
import SectionHeading from "../components/SectionHeading";
import ParallaxBg from "../components/ParallaxBg";
import { siteConfig } from "../config/siteConfig";

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

  const stats = [
    { value: "7", label: t("home.stat1") },
    { value: "∞", label: t("home.stat2") },
    { value: "100%", label: t("home.stat3") },
    { value: "7/7", label: t("home.stat4") },
  ];

  const marqueeImagesA = [
    { src: `${import.meta.env.BASE_URL}images/dining.webp`, alt: t("gallery.diningAlt") },
    { src: `${import.meta.env.BASE_URL}images/signature.webp`, alt: t("gallery.signatureAlt") },
    { src: `${import.meta.env.BASE_URL}images/salon.webp`, alt: t("gallery.salonAlt") },
    { src: `${import.meta.env.BASE_URL}images/bar.webp`, alt: t("gallery.barAlt") },
  ];

  const marqueeImagesB = [
    { src: `${import.meta.env.BASE_URL}images/salon.webp`, alt: t("gallery.salonAlt") },
    { src: `${import.meta.env.BASE_URL}images/atrium.webp`, alt: t("gallery.atriumAlt") },
    { src: `${import.meta.env.BASE_URL}images/bar.webp`, alt: t("gallery.barAlt") },
    { src: `${import.meta.env.BASE_URL}images/dining.webp`, alt: t("gallery.diningAlt") },
  ];

  return (
    <div>
      {/* ===================== HERO ===================== */}
      <section className="relative h-[100svh] min-h-[540px] flex items-center justify-center overflow-hidden bg-luxury-black grain">
        {/* Cinematic background with slow zoom */}
        <div
          className="animate-ken-burns absolute inset-0 bg-cover bg-center bg-no-repeat blur-[3px] scale-105"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/dining.webp')` }}
        />
        <div className="hero-overlay absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-luxury-black/35 pointer-events-none" />
        <div className="gold-halo absolute inset-0 pointer-events-none animate-fade-up" style={{ animationDelay: "1.4s" }} />
        <div className="frame-inset" />

        {/* Vertical side captions */}
        <span className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-luxury-champagne/60 text-xs tracking-luxury-wide uppercase font-body">
          {t("home.heroSide1")}
        </span>
        <span className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-luxury-champagne/60 text-xs tracking-luxury-wide uppercase font-body">
          {siteConfig.address.city.replace(/^\d+\s*/, "")} — France
        </span>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="animate-fade-up flex items-center justify-center gap-4 mb-7" style={{ animationDelay: "1.3s" }}>
            <span className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-luxury-gold" />
            <p className="text-luxury-champagne text-xs md:text-sm tracking-luxury-wide uppercase font-body whitespace-nowrap">
              {t("home.heroSubtitle")}
            </p>
            <span className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-luxury-gold" />
          </div>

          <h1 className="animate-letter-in text-glow font-display font-semibold text-white text-[clamp(2.6rem,11vw,8.5rem)] leading-[0.95]" style={{ animationDelay: "1.45s" }}>
            <span className="text-gold-shimmer">{t("home.heroTitle")}</span>
          </h1>

          <p className="animate-fade-up text-2xl md:text-display-md font-display italic text-luxury-cream mt-6" style={{ animationDelay: "1.7s" }}>
            {t("home.heroTagline")}
          </p>

          <div className="animate-fade-up mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto" style={{ animationDelay: "1.9s" }}>
            <Link
              to="/menu"
              className="btn-shine group inline-flex items-center justify-center gap-3 bg-luxury-gold text-luxury-black hover:bg-luxury-gold-bright transition-colors font-body uppercase text-sm tracking-luxury px-10 py-4"
            >
              {t("home.heroCta2")}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              className="btn-shine inline-flex items-center justify-center gap-3 border border-luxury-cream/40 text-luxury-cream hover:border-luxury-gold hover:text-luxury-gold transition-colors font-body uppercase text-sm tracking-luxury px-10 py-4"
            >
              {t("common.reserve")}
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="animate-fade-up absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2" style={{ animationDelay: "2.2s" }}>
          <span className="text-luxury-champagne/60 text-[0.65rem] tracking-luxury uppercase font-body">
            {t("home.scroll")}
          </span>
          <ChevronDown size={20} className="text-luxury-gold animate-float" />
        </div>
      </section>

      {/* ===================== STAT STRIP ===================== */}
      <section className="bg-luxury-ink grain relative border-y border-luxury-gold/15">
        <div className="section-padding py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 100}
                className="text-center relative md:[&:not(:last-child)]:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-12 md:after:w-px md:after:bg-luxury-gold/20"
              >
                <p className="font-display text-5xl md:text-6xl text-gold-foil leading-none">{s.value}</p>
                <p className="font-body uppercase tracking-luxury text-xs text-luxury-champagne/70 mt-3">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== AMBIANCE ===================== */}
      <section className="py-16 md:py-24 lg:py-32 bg-luxury-cream relative overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/sakura-branch.svg`}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 w-[24rem] md:w-[34rem] opacity-40 -scale-x-100 pointer-events-none select-none"
        />
        <div className="section-padding mb-12 relative z-10">
          <Reveal className="max-w-3xl mx-auto">
            <SectionHeading
              tone="light"
              eyebrow={t("home.ambianceSubtitle")}
              title={t("home.ambianceTitle")}
            />
          </Reveal>
        </div>
        <div className="space-y-6 relative z-10">
          <ImageMarquee images={marqueeImagesA} direction="left" speed={45} />
          <ImageMarquee images={marqueeImagesB} direction="right" speed={50} />
        </div>
        <Reveal className="section-padding mt-14 text-center relative z-10">
          <Link
            to="/gallery"
            className="inline-block border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-colors font-body uppercase text-sm tracking-luxury px-8 py-4"
          >
            {t("home.ambianceCta")}
          </Link>
        </Reveal>
      </section>

      {/* ===================== 7 UNIVERSES ===================== */}
      <section className="emerald-wash py-16 md:py-24 lg:py-32 bg-luxury-ink grain relative overflow-hidden">
        <div className="section-padding relative z-10">
          <Reveal className="mb-10 md:mb-16">
            <SectionHeading
              tone="dark"
              eyebrow={t("home.universesEyebrow")}
              title={t("home.universesTitle")}
              subtitle={t("home.universesSubtitle")}
              className="max-w-3xl"
            />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {universes.map((u, i) => (
              <Reveal
                key={u.title}
                delay={(i % 4) * 100}
                className="luxury-card-dark group p-8 flex flex-col items-start"
              >
                <div className="flex items-center justify-between w-full mb-6">
                  <u.icon className="text-luxury-gold transition-transform duration-500 group-hover:scale-110" size={34} strokeWidth={1.4} />
                  <span className="font-display text-3xl text-luxury-gold/25 group-hover:text-luxury-gold/50 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl text-luxury-cream mb-3">{u.title}</h3>
                <p className="font-body text-luxury-champagne/65 leading-relaxed">{u.text}</p>
              </Reveal>
            ))}
            <Reveal
              delay={(universes.length % 4) * 100}
              className="group p-8 flex flex-col items-start justify-center border border-luxury-gold/30 bg-luxury-gold/[0.04] hover:bg-luxury-gold/10 transition-colors"
            >
              <Link to="/menu" className="flex flex-col gap-4 w-full h-full justify-center">
                <span className="font-display text-2xl text-luxury-cream leading-tight">{t("home.universesCardTitle")}</span>
                <span className="inline-flex items-center gap-2 text-luxury-gold uppercase text-sm tracking-luxury font-body">
                  {t("home.heroCta2")}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="emerald-wash relative py-16 md:py-24 lg:py-32 bg-luxury-ink grain text-center overflow-hidden">
        <ParallaxBg src={`${import.meta.env.BASE_URL}images/bar.webp`} className="opacity-15" />
        <Reveal className="section-padding max-w-2xl mx-auto relative z-10">
          <Ornament className="mb-8" />
          <h2 className="text-display-md md:text-display-lg font-display text-gold-foil pb-1 mb-6">
            {t("home.ctaTitle")}
          </h2>
          <p className="text-lg text-luxury-champagne/75 font-body leading-relaxed mb-10">
            {t("home.ctaText")}
          </p>
          <button
            type="button"
            className="btn-shine inline-block bg-luxury-gold text-luxury-black hover:bg-luxury-gold-bright transition-colors font-body uppercase text-sm tracking-luxury px-12 py-4"
          >
            {t("home.ctaButton")}
          </button>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
