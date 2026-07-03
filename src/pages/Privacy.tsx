import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import LegalSection from "../components/LegalSection";
import SectionFX from "../components/SectionFX";
import { siteConfig } from "../config/siteConfig";

const Privacy = () => {
  const { t } = useTranslation();
  const L = siteConfig.legal;

  return (
    <div>
      <PageHero
        title={t("privacy.heroTitle")}
        subtitle={t("privacy.heroSubtitle")}
        backgroundImage={`${import.meta.env.BASE_URL}images/bar-detail.webp`}
      />

      <section className="emerald-wash relative py-16 md:py-24 lg:py-28 bg-luxury-ink grain overflow-hidden">
        <SectionFX />
        <div className="section-padding relative z-10 max-w-3xl mx-auto">
          <LegalSection title={t("privacy.controllerTitle")}>
            <p>{t("privacy.intro")}</p>
            <p>
              {t("privacy.controllerText", {
                company: L.company,
                headOffice: L.headOffice,
                phone: siteConfig.phone,
              })}
            </p>
          </LegalSection>

          <LegalSection title={t("privacy.dataTitle")}>
            <p>{t("privacy.dataText")}</p>
          </LegalSection>

          <LegalSection title={t("privacy.purposeTitle")}>
            <p>{t("privacy.purposeText")}</p>
          </LegalSection>

          <LegalSection title={t("privacy.reservationTitle")}>
            <p>{t("privacy.reservationText")}</p>
          </LegalSection>

          <LegalSection title={t("privacy.cookiesTitle")}>
            <p>{t("privacy.cookiesText")}</p>
          </LegalSection>

          <LegalSection title={t("privacy.retentionTitle")}>
            <p>{t("privacy.retentionText")}</p>
          </LegalSection>

          <LegalSection title={t("privacy.rightsTitle")}>
            <p>{t("privacy.rightsText")}</p>
            <p>{t("privacy.rightsContact", { phone: siteConfig.phone, headOffice: L.headOffice })}</p>
          </LegalSection>

          <LegalSection title={t("privacy.updateTitle")}>
            <p>{t("privacy.updateText")}</p>
            <p>
              <Link to="/mentions-legales" className="text-luxury-gold hover:underline">
                {t("legal.heroTitle")}
              </Link>
            </p>
          </LegalSection>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
