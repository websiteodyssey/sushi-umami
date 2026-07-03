import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import LegalSection from "../components/LegalSection";
import SectionFX from "../components/SectionFX";
import { siteConfig } from "../config/siteConfig";

const LegalMentions = () => {
  const { t } = useTranslation();
  const L = siteConfig.legal;

  const rows: [string, string][] = [
    [t("legal.fields.company"), L.company],
    [t("legal.fields.brand"), L.brandName],
    [t("legal.fields.legalForm"), L.legalForm],
    [t("legal.fields.capital"), L.capital],
    [t("legal.fields.headOffice"), L.headOffice],
    [t("legal.fields.rcs"), L.rcs],
    [t("legal.fields.siren"), L.siren],
    [t("legal.fields.managementNumber"), L.managementNumber],
    [t("legal.fields.euid"), L.euid],
    [t("legal.fields.naf"), L.naf],
    [t("legal.fields.president"), L.president],
    [t("legal.fields.activity"), L.activity],
    [t("legal.fields.phone"), siteConfig.phone],
  ];

  return (
    <div>
      <PageHero
        title={t("legal.heroTitle")}
        subtitle={t("legal.heroSubtitle")}
        backgroundImage={`${import.meta.env.BASE_URL}images/salon.webp`}
      />

      <section className="emerald-wash relative py-16 md:py-24 lg:py-28 bg-luxury-ink grain overflow-hidden">
        <SectionFX />
        <div className="section-padding relative z-10 max-w-3xl mx-auto">
          <LegalSection title={t("legal.editorTitle")}>
            <p>{t("legal.editorIntro")}</p>
            <dl className="mt-2 divide-y divide-luxury-gold/15 border-t border-b border-luxury-gold/15">
              {rows.map(([label, value]) => (
                <div key={label} className="grid grid-cols-1 sm:grid-cols-[minmax(0,11rem)_1fr] gap-x-6 gap-y-1 py-3">
                  <dt className="font-accent uppercase tracking-luxury text-xs text-luxury-gold/80">{label}</dt>
                  <dd className="text-luxury-cream/90">{value}</dd>
                </div>
              ))}
            </dl>
          </LegalSection>

          <LegalSection title={t("legal.directorTitle")}>
            <p>{t("legal.directorText", { president: L.president, company: L.company })}</p>
          </LegalSection>

          <LegalSection title={t("legal.hostTitle")}>
            <p>{t("legal.hostText")}</p>
          </LegalSection>

          <LegalSection title={t("legal.ipTitle")}>
            <p>{t("legal.ipText", { brand: L.brandName })}</p>
          </LegalSection>

          <LegalSection title={t("legal.liabilityTitle")}>
            <p>{t("legal.liabilityText")}</p>
          </LegalSection>

          <LegalSection title={t("legal.dataTitle")}>
            <p>
              {t("legal.dataText")}{" "}
              <Link to="/confidentialite" className="text-luxury-gold hover:underline">
                {t("privacy.heroTitle")}
              </Link>
              .
            </p>
          </LegalSection>
        </div>
      </section>
    </div>
  );
};

export default LegalMentions;
