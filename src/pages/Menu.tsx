import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Clock, IdCard, Trash2, Ban } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Ornament from "../components/Ornament";
import SectionHeading from "../components/SectionHeading";
import ParallaxBg from "../components/ParallaxBg";
import { siteConfig } from "../config/siteConfig";

const Menu = () => {
  const { t } = useTranslation();

  const adultRows = [
    { label: t("menu.labelMidiWeek"), price: "18,90 €" },
    { label: t("menu.labelMidiWeekend"), price: "28,90 €" },
    { label: t("menu.labelSoir"), price: "28,90 €" },
  ];

  const childRows = [
    { label: t("menu.labelMidiWeek"), price: "11,90 €" },
    { label: t("menu.labelMidiWeekend"), price: "15,90 €" },
    { label: t("menu.labelSoir"), price: "15,90 €" },
    { label: t("menu.childUnder3"), price: t("menu.free") },
  ];

  const rules = [
    { icon: IdCard, text: t("menu.rule1") },
    { icon: Trash2, text: t("menu.rule2") },
    { icon: Ban, text: t("menu.rule3") },
  ];

  return (
    <div>
      <PageHero
        title={t("menu.heroTitle")}
        subtitle={t("menu.heroSubtitle")}
        backgroundImage={`${import.meta.env.BASE_URL}images/bar.webp`}
      />

      {/* Pricing */}
      <section className="emerald-wash py-16 md:py-24 lg:py-32 bg-luxury-ink grain relative overflow-hidden">
        <ParallaxBg src={`${import.meta.env.BASE_URL}images/signature.webp`} className="opacity-10" />
        <div className="section-padding relative z-10">
          <Reveal className="mb-14">
            <SectionHeading tone="dark" title={t("menu.pricingTitle")} />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Reveal className="luxury-card-dark deco-corners gold-glow p-8 md:p-10">
              <h3 className="font-display text-2xl text-luxury-gold uppercase tracking-luxury mb-8 text-center">
                {t("menu.adultsTitle")}
              </h3>
              <ul className="divide-y divide-luxury-gold/15 font-body">
                {adultRows.map((row) => (
                  <li key={row.label} className="flex items-baseline justify-between gap-4 py-3.5 text-lg group">
                    <span className="text-luxury-champagne/85">{row.label}</span>
                    <span className="hidden sm:block flex-1 mx-1 border-b border-dotted border-luxury-gold/25 translate-y-[-4px]" />
                    <span className="num-elegant text-luxury-cream font-display text-xl shrink-0 group-hover:text-luxury-gold transition-colors">{row.price}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={150} className="luxury-card-dark deco-corners gold-glow p-8 md:p-10">
              <h3 className="font-display text-2xl text-luxury-gold uppercase tracking-luxury mb-8 text-center">
                {t("menu.childrenTitle")}
              </h3>
              <ul className="divide-y divide-luxury-gold/15 font-body">
                {childRows.map((row) => (
                  <li key={row.label} className="flex items-baseline justify-between gap-4 py-3.5 text-lg group">
                    <span className="text-luxury-champagne/85">{row.label}</span>
                    <span className="hidden sm:block flex-1 mx-1 border-b border-dotted border-luxury-gold/25 translate-y-[-4px]" />
                    <span className="num-elegant text-luxury-cream font-display text-xl shrink-0 group-hover:text-luxury-gold transition-colors">{row.price}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h4 className="font-display text-xl text-luxury-gold uppercase tracking-luxury mb-4 text-center flex items-center justify-center gap-2">
                  <Clock size={20} />
                  {t("menu.hoursTitle")}
                </h4>
                <div className="flex justify-between text-lg font-body py-2 border-b border-luxury-gold/15">
                  <span className="text-luxury-champagne/85">{t("common.lunch")}</span>
                  <span className="text-luxury-cream">{siteConfig.hours.lunch}</span>
                </div>
                <div className="flex justify-between text-lg font-body py-2">
                  <span className="text-luxury-champagne/85">{t("common.dinner")}</span>
                  <span className="text-luxury-cream">{siteConfig.hours.dinner}</span>
                </div>
                <p className="text-center text-luxury-champagne/55 font-body mt-4">{t("menu.hoursNote")}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16 md:py-24 lg:py-32 bg-luxury-cream">
        <div className="section-padding max-w-3xl mx-auto">
          <Reveal className="mb-12">
            <SectionHeading tone="light" title={t("menu.rulesTitle")} />
          </Reveal>
          <div className="space-y-4">
            {rules.map((rule, i) => (
              <Reveal key={rule.text} delay={i * 100} className="flex items-start gap-4 luxury-card p-6">
                <rule.icon className="text-luxury-gold shrink-0 mt-1" size={24} strokeWidth={1.4} />
                <p className="font-body text-lg text-luxury-gray-dark">{rule.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24 lg:py-32 bg-luxury-black grain text-center overflow-hidden">
        <ParallaxBg src={`${import.meta.env.BASE_URL}images/dining.webp`} className="opacity-15" />
        <Reveal className="section-padding relative z-10">
          <Ornament className="mb-8" />
          <Link
            to="/contact"
            className="btn-shine inline-block bg-luxury-gold text-luxury-black hover:bg-luxury-gold-bright transition-colors font-body uppercase text-sm tracking-luxury px-12 py-4"
          >
            {t("menu.reserveCta")}
          </Link>
        </Reveal>
      </section>
    </div>
  );
};

export default Menu;
