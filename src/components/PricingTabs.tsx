import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

type TabKey = "adult" | "child";

/**
 * Pacific-style tabbed pricing: Adulte / Enfant segmented toggle over a frosted
 * gold-tinted card (cream days, bright-gold prices). Matches the official menu.
 */
const PricingTabs = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<TabKey>("adult");

  const rows: Record<TabKey, { day: string; midi: string; soir: string }[]> = {
    adult: [
      { day: t("menu.dayWeek"), midi: "18,90 €", soir: "28,90 €" },
      { day: t("menu.dayWeekend"), midi: "28,90 €", soir: "28,90 €" },
    ],
    child: [
      { day: t("menu.dayWeek"), midi: "11,90 €", soir: "15,90 €" },
      { day: t("menu.dayWeekend"), midi: "15,90 €", soir: "15,90 €" },
    ],
  };

  const tabs: { key: TabKey; label: string }[] = [
    { key: "adult", label: t("menu.adultsTitle") },
    { key: "child", label: t("menu.childrenTitle") },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Segmented toggle */}
      <div className="flex justify-center mb-9">
        <div className="inline-flex rounded-full border border-luxury-gold/40 p-1 bg-white/5 backdrop-blur">
          {tabs.map((tb) => (
            <button
              key={tb.key}
              type="button"
              onClick={() => setTab(tb.key)}
              className={`btn-shine font-accent uppercase text-sm tracking-luxury rounded-full px-7 py-2.5 transition-colors ${
                tab === tb.key
                  ? "bg-luxury-gold text-luxury-black"
                  : "text-luxury-cream hover:text-luxury-gold"
              }`}
            >
              {tb.label}
            </button>
          ))}
        </div>
      </div>

      {/* Frosted gold-tinted price card */}
      <div className="deco-corners gold-glow relative rounded-3xl border border-luxury-gold/35 bg-gradient-to-br from-luxury-gold/[0.12] via-white/[0.05] to-transparent backdrop-blur-md p-6 md:p-9">
        <div className="grid grid-cols-[1.4fr_1fr_1fr] font-accent uppercase tracking-luxury text-xs text-luxury-gold pb-4 border-b border-luxury-gold/25">
          <span>{t("menu.dayLabel")}</span>
          <span className="text-center">{t("common.lunch")}</span>
          <span className="text-right">{t("common.dinner")}</span>
        </div>

        <div key={tab} className="animate-fade-up">
          {rows[tab].map((r) => (
            <div
              key={r.day}
              className="grid grid-cols-[1.4fr_1fr_1fr] items-center py-5 border-b border-luxury-gold/10 last:border-0 transition-colors hover:bg-luxury-gold/[0.06] rounded-lg"
            >
              <span className="font-display text-luxury-cream text-lg md:text-xl pl-2">{r.day}</span>
              <span className="num-elegant font-display text-luxury-gold-bright text-xl md:text-2xl text-center">{r.midi}</span>
              <span className="num-elegant font-display text-luxury-gold-bright text-xl md:text-2xl text-right pr-2">{r.soir}</span>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-luxury-gold bg-luxury-gold/[0.08] rounded-r-xl px-5 py-4 mt-7 text-center font-body text-luxury-champagne/80">
          {tab === "child" ? `${t("menu.childUnder3")} · ${t("menu.free")}` : t("menu.hoursNote")}
        </div>
      </div>

      {/* CTA */}
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
