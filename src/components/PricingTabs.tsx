import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const PricingTabs = () => {
  const { t } = useTranslation();

  const adultRows = [
    { label: t("menu.labelMidiWeek"), price: "18,90 €" },
    { label: t("menu.labelSoirWeek"), price: "28,90 €" },
    { label: t("menu.labelSoirWeekend"), price: "29,90 €" },
  ];

  const childRows = [
    { label: t("menu.labelMidiWeek"), price: "11,90 €" },
    { label: t("menu.labelSoir"), price: "15,90 €" },
  ];

  const renderRows = (rows: { label: string; price: string }[]) => (
    <div>
      {rows.map((r) => (
        <div
          key={r.label}
          className="grid grid-cols-[1.6fr_1fr] items-center py-4 border-b border-luxury-gold/10 last:border-0 transition-colors hover:bg-luxury-gold/[0.06] rounded-lg"
        >
          <span className="font-display text-luxury-cream text-lg md:text-xl pl-2">{r.label}</span>
          <span className="num-elegant font-display text-luxury-gold-bright text-xl md:text-2xl text-right pr-2">{r.price}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto">
      <div className="deco-corners gold-glow relative rounded-3xl border border-luxury-gold/35 bg-gradient-to-br from-luxury-gold/[0.12] via-white/[0.05] to-transparent backdrop-blur-md p-6 md:p-9">
        <div className="grid grid-cols-[1.6fr_1fr] font-accent uppercase tracking-luxury text-xs text-luxury-gold pb-4 border-b border-luxury-gold/25">
          <span>{t("menu.formulaLabel")}</span>
          <span className="text-right">{t("menu.priceLabel")}</span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 mt-6">
          <section>
            <h3 className="font-accent uppercase tracking-luxury text-sm text-luxury-gold mb-3">
              {t("menu.adultsTitle")}
            </h3>
            {renderRows(adultRows)}
          </section>

          <section>
            <h3 className="font-accent uppercase tracking-luxury text-sm text-luxury-gold mb-3">
              {t("menu.childrenTitle")}
            </h3>
            {renderRows(childRows)}
            <div className="mt-4 border-l-2 border-luxury-gold bg-luxury-gold/[0.08] rounded-r-xl px-4 py-3 font-body text-luxury-champagne/80">
              {t("menu.childUnder3")} · {t("menu.free")}
            </div>
          </section>
        </div>

        <div className="border-l-2 border-luxury-gold bg-luxury-gold/[0.08] rounded-r-xl px-5 py-4 mt-8 text-center font-body text-luxury-champagne/80">
          {t("menu.hoursNote")}
        </div>
      </div>

      <div className="text-center mt-9">
        <Link
          to="/menu"
          className="btn-shine group inline-flex items-center justify-center gap-3 bg-luxury-gold text-luxury-black hover:bg-luxury-gold-bright transition-colors font-accent uppercase text-sm tracking-luxury rounded-full px-9 py-4"
        >
          {t("home.pricingCta")}
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default PricingTabs;
