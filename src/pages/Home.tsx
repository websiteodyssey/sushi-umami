import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Fish, Sandwich, Flame, Soup, Salad, Shell, IceCream, ArrowRight } from "lucide-react";
import TextMarquee from "../components/TextMarquee";
import SpinningSeal from "../components/SpinningSeal";
import PricingTabs from "../components/PricingTabs";
import Reveal from "../components/Reveal";
import Ornament from "../components/Ornament";
import SectionHeading from "../components/SectionHeading";
import ParallaxBg from "../components/ParallaxBg";
import SectionFX from "../components/SectionFX";
import ContactDetails from "../components/ContactDetails";
import SpecialtiesCarousel from "../components/SpecialtiesCarousel";
import InstagramIcon from "../components/InstagramIcon";
import TikTokIcon from "../components/TikTokIcon";
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

  const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

  // Interior / ambiance photos, arranged as an editorial bento mosaic (no carousel).
  const ambianceTiles = [
    { src: img("dining.webp"), alt: t("gallery.diningAlt"), cls: "col-span-2 row-span-2" },
    { src: img("signature.webp"), alt: t("gallery.signatureAlt") },
    { src: img("bar.webp"), alt: t("gallery.barAlt") },
    { src: img("table-detail.webp"), alt: t("gallery.tableAlt") },
    { src: img("washroom.webp"), alt: t("gallery.washroomAlt") },
  ];

  return (
    // One continuous dark canvas so sections flow into each other instead of
    // reading as separate blocks — individual sections drop their solid fill and
    // let this gradient show through, keeping only their grain / wash / decor.
    <div className="relative bg-luxury-black bg-gradient-to-b from-luxury-black via-luxury-ink to-luxury-black">
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-[84svh] md:min-h-[100svh] flex items-center justify-center overflow-hidden bg-luxury-black grain py-24 md:py-32">
        {/* Cinematic background video of the dining room (poster shows instantly while it loads) */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${import.meta.env.BASE_URL}images/dining.webp`}
        >
          <source src={`${import.meta.env.BASE_URL}images/hero.mp4`} type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 bg-luxury-black/35 pointer-events-none" />
        <div className="gold-halo absolute inset-0 pointer-events-none animate-fade-up" style={{ animationDelay: "1.4s" }} />

        {/* Vertical side captions */}
        <span className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-luxury-champagne/60 text-xs tracking-luxury-wide uppercase font-body">
          {t("home.heroSide1")}
        </span>
        <span className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-luxury-champagne/60 text-xs tracking-luxury-wide uppercase font-body">
          {siteConfig.address.city.replace(/^\d+\s*/, "")} — France
        </span>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="animate-fade-up text-luxury-gold text-xs md:text-sm tracking-luxury-wide uppercase font-accent mb-6" style={{ animationDelay: "1.3s" }}>
            {t("home.heroSubtitle")}
          </p>

          <h1 className="animate-letter-in text-glow font-display font-semibold leading-[0.95]" style={{ animationDelay: "1.45s" }}>
            <span className="text-gold-shimmer text-[clamp(2.9rem,11vw,7.5rem)]">{t("home.heroTitle")}</span>
          </h1>
          <p className="animate-fade-up font-display italic text-luxury-cream text-xl md:text-2xl lg:text-3xl mt-4" style={{ animationDelay: "1.6s" }}>
            {t("home.heroTagline")}
          </p>

          <div className="animate-fade-up mt-9 md:mt-10 flex flex-row items-center justify-center gap-2 sm:gap-4" style={{ animationDelay: "1.7s" }}>
            <Link
              to="/menu"
              className="btn-shine group inline-flex items-center justify-center gap-2 bg-luxury-gold text-luxury-black hover:bg-luxury-gold-bright transition-colors font-accent uppercase text-xs sm:text-sm tracking-luxury rounded-full px-5 sm:px-9 py-3.5 sm:py-4"
            >
              {t("home.heroCta2")}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={siteConfig.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center justify-center gap-2 bg-luxury-gold text-luxury-black hover:bg-luxury-gold-bright transition-colors font-accent uppercase text-xs sm:text-sm tracking-luxury rounded-full px-5 sm:px-9 py-3.5 sm:py-4"
            >
              {t("common.reserve")}
            </a>
          </div>

          <div className="animate-fade-up mt-16 md:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 max-w-md sm:max-w-2xl mx-auto" style={{ animationDelay: "1.9s" }}>
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl text-gold-foil leading-none">{s.value}</p>
                <p className="font-accent uppercase tracking-luxury text-[0.65rem] md:text-xs text-luxury-champagne/70 mt-2">{s.label}</p>
              </div>
            ))}
          </div>

          {(siteConfig.social.instagram || siteConfig.social.tiktok) && (
            <div className="animate-fade-up mt-10 flex items-center justify-center gap-3" style={{ animationDelay: "2s" }}>
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-cream/90 bg-luxury-black/25 backdrop-blur-sm hover:text-luxury-gold hover:border-luxury-gold transition-colors"
                >
                  <InstagramIcon size={21} />
                </a>
              )}
              {siteConfig.social.tiktok ? (
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-cream/90 bg-luxury-black/25 backdrop-blur-sm hover:text-luxury-gold hover:border-luxury-gold transition-colors"
                >
                  <TikTokIcon size={20} />
                </a>
              ) : (
                <span
                  aria-label="TikTok (bientôt disponible)"
                  aria-disabled="true"
                  title="Bientôt disponible"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-cream/90 bg-luxury-black/25 backdrop-blur-sm opacity-50 cursor-not-allowed"
                >
                  <TikTokIcon size={20} />
                </span>
              )}
            </div>
          )}
        </div>

        {/* Spinning gold seal */}
        <div className="hidden lg:block absolute bottom-10 right-10 w-28 xl:w-32 h-28 xl:h-32 z-10 animate-fade-up" style={{ animationDelay: "2s" }}>
          <SpinningSeal />
        </div>
      </section>

      {/* ===================== CATEGORY MARQUEE ===================== */}
      <section className="relative py-5">
        {/* hairline gold gradients instead of a hard border, for a softer seam */}
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/25 to-transparent" />
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/25 to-transparent" />
        <TextMarquee items={universes.map((u) => u.title)} speed={36} />
      </section>

      {/* ===================== SPECIALTIES CAROUSEL ===================== */}
      <SpecialtiesCarousel />

      {/* ===================== AMBIANCE (editorial mosaic) ===================== */}
      <section className="relative py-16 md:py-24 lg:py-32 grain emerald-wash overflow-hidden">
        <span className="absolute top-24 right-[7%] animate-float" aria-hidden="true">
          <span className="block h-2.5 w-2.5 rotate-45 bg-luxury-gold/20" />
        </span>
        <div className="section-padding mb-10 md:mb-14 relative z-10">
          <Reveal className="max-w-3xl mx-auto">
            <SectionHeading
              tone="dark"
              eyebrow={t("home.ambianceSubtitle")}
              title={t("home.ambianceTitle")}
            />
          </Reveal>
        </div>
        <div className="section-padding relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[8.5rem] sm:auto-rows-[10rem] md:auto-rows-[12rem] gap-3 md:gap-4 max-w-6xl mx-auto">
            {ambianceTiles.map((tile, i) => (
              <Reveal
                key={tile.src}
                delay={(i % 4) * 90}
                className={`group relative overflow-hidden rounded-lg border border-luxury-gold/12 ${tile.cls ?? ""}`}
              >
                <img
                  src={tile.src}
                  alt={tile.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.3s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                />
                <span className="pointer-events-none absolute inset-3 border border-luxury-gold/0 group-hover:border-luxury-gold/30 transition-colors duration-500" />
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="section-padding mt-12 md:mt-14 text-center relative z-10">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-colors font-body uppercase text-sm tracking-luxury rounded-full px-8 py-4"
          >
            {t("home.ambianceCta")}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      {/* ===================== PRICING ===================== */}
      <section className="relative py-16 md:py-24 lg:py-32 grain emerald-wash overflow-hidden">
        <ParallaxBg src={`${import.meta.env.BASE_URL}images/signature.webp`} className="opacity-[0.12]" />
        <div className="animate-aurora absolute inset-0 bg-gradient-to-br from-luxury-emerald-deep/45 via-transparent to-luxury-gold-deep/25 pointer-events-none" />
        <span className="absolute top-20 left-[8%] animate-float" aria-hidden="true">
          <span className="block h-2.5 w-2.5 rotate-45 bg-luxury-gold/25" />
        </span>
        <div className="section-padding relative z-10">
          <Reveal className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-luxury-gold/60" />
              <span className="font-accent uppercase tracking-luxury-wide text-xs text-luxury-gold">
                {t("menu.pricingTitle")}
              </span>
              <span className="h-px w-8 bg-luxury-gold/60" />
            </div>
            <h2 className="font-display text-display-md md:text-display-lg leading-tight">
              <span className="text-luxury-cream">{t("home.pricingLead")} </span>
              <span className="text-gold-shimmer italic">{t("home.pricingAccent")}</span>
            </h2>
          </Reveal>
          <Reveal>
            <PricingTabs />
          </Reveal>
        </div>
      </section>

      {/* ===================== 7 UNIVERSES ===================== */}
      <section className="emerald-wash py-16 md:py-24 lg:py-32 grain relative overflow-hidden">
        <span className="absolute top-28 left-[7%] animate-float" aria-hidden="true">
          <span className="block h-2.5 w-2.5 rotate-45 bg-luxury-gold/25" />
        </span>
        <span className="absolute bottom-24 right-[8%] animate-float" style={{ animationDelay: "1.4s" }} aria-hidden="true">
          <span className="block h-2 w-2 rotate-45 bg-luxury-gold/20" />
        </span>
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
          <div className="cards-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {universes.map((u, i) => (
              <Reveal
                key={u.title}
                delay={(i % 4) * 100}
                className="luxury-card-dark animate-card-pulse group p-8 flex flex-col items-start"
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
              className="hover-bounce group p-8 flex flex-col items-start justify-center border border-luxury-gold/30 bg-luxury-gold/[0.04] hover:bg-luxury-gold/10 transition-colors"
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

      {/* ===================== FIND US ===================== */}
      <section className="emerald-wash relative py-16 md:py-24 lg:py-32 grain overflow-hidden">
        <SectionFX />
        <div className="section-padding relative z-10">
          <Reveal className="max-w-2xl mx-auto mb-12">
            <SectionHeading
              tone="dark"
              eyebrow={t("common.findUsEyebrow")}
              title={t("common.findUsTitle")}
            />
          </Reveal>
          <ContactDetails
            actions={
              <Reveal delay={240}>
                <Link
                  to="/contact"
                  className="btn-shine block text-center bg-luxury-gold text-luxury-black hover:bg-luxury-gold-bright transition-colors font-accent uppercase text-sm tracking-luxury rounded-full px-6 py-4"
                >
                  {t("common.contactUs")}
                </Link>
              </Reveal>
            }
          />
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="relative py-20 md:py-28 lg:py-36 grain text-center overflow-hidden">
        <ParallaxBg src={`${import.meta.env.BASE_URL}images/bar.webp`} className="opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/75 to-luxury-black/85 pointer-events-none" />
        <span className="absolute top-16 right-[12%] animate-float" aria-hidden="true">
          <span className="block h-2.5 w-2.5 rotate-45 bg-luxury-gold/25" />
        </span>
        <Reveal className="section-padding max-w-2xl mx-auto relative z-10">
          <Ornament className="mb-8" />
          <h2 className="text-display-md md:text-display-lg leading-tight font-display text-gold-foil pb-1 mb-6">
            <span className="block">{t("home.ctaTitleA")}</span>
            <span className="block">{t("home.ctaTitleB")}</span>
          </h2>
          <p className="text-lg text-luxury-champagne/75 font-body leading-relaxed mb-10">
            {t("home.ctaText")}
          </p>
          <a
            href={siteConfig.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-block bg-luxury-gold text-luxury-black hover:bg-luxury-gold-bright transition-colors font-body uppercase text-sm tracking-luxury rounded-full px-12 py-4"
          >
            {t("home.ctaButton")}
          </a>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
