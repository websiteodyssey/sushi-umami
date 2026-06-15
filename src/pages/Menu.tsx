import { useTranslation } from "react-i18next";
import { Clock, IdCard, Trash2, Ban } from "lucide-react";
import PageHero from "../components/PageHero";
import { siteConfig } from "../config/siteConfig";

const Menu = () => {
  const { t } = useTranslation();

  const adultRows = [
    { label: t("menu.row1Label"), price: "18,90 €" },
    { label: t("menu.row2Label"), price: "28,90 €" },
    { label: t("menu.row3Label"), price: "29,90 €" },
    { label: t("menu.row4Label"), price: "28,90 €" },
    { label: t("menu.row5Label"), price: "29,90 €" },
    { label: t("menu.row6Label"), price: "28,90 €" },
    { label: t("menu.row7Label"), price: "29,90 €" },
  ];

  const childRows = [
    { label: t("menu.child1Label"), price: "14,90 €" },
    { label: t("menu.child2Label"), price: t("menu.free") },
  ];

  const rules = [
    { icon: IdCard, text: t("menu.rule1") },
    { icon: Trash2, text: t("menu.rule2") },
    { icon: Ban, text: t("menu.rule3") },
  ];

  return (
    <div className="pt-20">
      <PageHero
        title={t("menu.heroTitle")}
        subtitle={t("menu.heroSubtitle")}
        backgroundImage="/images/interior-3.png"
        emoji="🍜"
      />

      {/* Intro */}
      <section className="py-12 md:py-20 bg-luxury-cream">
        <div className="section-padding text-center max-w-3xl mx-auto">
          <h2 className="text-display-md font-display text-luxury-black mb-6">
            {t("menu.introTitle")}
          </h2>
          <p className="text-lg text-luxury-gray-dark leading-relaxed font-body">
            {t("menu.introText")}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-20 lg:py-24 bg-luxury-ivory relative overflow-hidden">
        <div className="section-padding relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-display-md font-display text-luxury-black mb-2">
              {t("menu.pricingTitle")}
            </h2>
            <div className="h-px bg-luxury-gold mx-auto mt-6 w-20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="luxury-card p-8">
              <h3 className="font-display text-2xl text-luxury-gold uppercase tracking-luxury mb-6 text-center">
                {t("menu.adultsTitle")}
              </h3>
              <ul className="divide-y divide-luxury-gold/15 font-body">
                {adultRows.map((row) => (
                  <li key={row.label} className="flex items-center justify-between py-3 text-lg">
                    <span className="text-luxury-gray-dark">{row.label}</span>
                    <span className="text-luxury-black font-display text-xl">{row.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="luxury-card p-8">
              <h3 className="font-display text-2xl text-luxury-gold uppercase tracking-luxury mb-6 text-center">
                {t("menu.childrenTitle")}
              </h3>
              <ul className="divide-y divide-luxury-gold/15 font-body">
                {childRows.map((row) => (
                  <li key={row.label} className="flex items-center justify-between py-3 text-lg">
                    <span className="text-luxury-gray-dark">{row.label}</span>
                    <span className="text-luxury-black font-display text-xl">{row.price}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h4 className="font-display text-xl text-luxury-gold uppercase tracking-luxury mb-4 text-center flex items-center justify-center gap-2">
                  <Clock size={20} />
                  {t("menu.hoursTitle")}
                </h4>
                <div className="flex justify-between text-lg font-body py-2 border-b border-luxury-gold/15">
                  <span className="text-luxury-gray-dark">{t("common.lunch")}</span>
                  <span className="text-luxury-black">{siteConfig.hours.lunch}</span>
                </div>
                <div className="flex justify-between text-lg font-body py-2">
                  <span className="text-luxury-gray-dark">{t("common.dinner")}</span>
                  <span className="text-luxury-black">{siteConfig.hours.dinner}</span>
                </div>
                <p className="text-center text-luxury-gray font-body mt-4">{t("menu.hoursNote")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-12 md:py-20 bg-luxury-cream">
        <div className="section-padding max-w-3xl mx-auto">
          <h2 className="text-display-md font-display text-luxury-black mb-10 text-center">
            {t("menu.rulesTitle")}
          </h2>
          <div className="space-y-4">
            {rules.map((rule) => (
              <div key={rule.text} className="flex items-start gap-4 luxury-card p-6">
                <rule.icon className="text-luxury-gold shrink-0 mt-1" size={24} />
                <p className="font-body text-lg text-luxury-gray-dark">{rule.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-luxury-black text-center">
        <div className="section-padding">
          <button
            type="button"
            className="inline-block bg-luxury-gold text-luxury-black hover:bg-luxury-cream transition-colors font-body uppercase text-sm tracking-luxury px-10 py-4"
          >
            {t("menu.reserveCta")}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Menu;
