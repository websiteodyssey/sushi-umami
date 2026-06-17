import { useTranslation } from "react-i18next";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SectionFX from "../components/SectionFX";
import ContactDetails from "../components/ContactDetails";
import { siteConfig } from "../config/siteConfig";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHero
        title={t("contact.heroTitle")}
        subtitle={t("contact.heroSubtitle")}
        backgroundImage={`${import.meta.env.BASE_URL}images/salon.webp`}
      />

      <section className="emerald-wash relative py-16 md:py-24 lg:py-32 bg-luxury-ink grain overflow-hidden">
        <SectionFX />
        <div className="section-padding relative z-10">
          <Reveal className="max-w-2xl mx-auto mb-14">
            <SectionHeading
              tone="dark"
              eyebrow={t("contact.heroSubtitle")}
              title={t("contact.title")}
              subtitle={t("contact.text")}
            />
          </Reveal>

          <ContactDetails
            actions={
              <Reveal delay={240}>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine block text-center bg-luxury-gold text-luxury-black hover:bg-luxury-gold-bright transition-colors font-accent uppercase text-sm tracking-luxury rounded-full px-6 py-4"
                >
                  {t("contact.mapCta")}
                </a>
              </Reveal>
            }
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
