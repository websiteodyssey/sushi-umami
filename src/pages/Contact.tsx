import { useTranslation } from "react-i18next";
import { MapPin, Phone, Clock } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import GoldFrame from "../components/GoldFrame";
import SectionFX from "../components/SectionFX";
import { siteConfig } from "../config/siteConfig";

const Contact = () => {
  const { t } = useTranslation();

  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.city}`
  )}&output=embed`;

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
            <div className="flex flex-col gap-5 font-body">
              <Reveal className="luxury-card-dark p-6 flex items-center gap-5">
                <span className="shrink-0 grid place-items-center h-12 w-12 rounded-full border border-luxury-gold/40 text-luxury-gold">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-accent uppercase tracking-luxury text-xs text-luxury-gold mb-1.5">
                    {t("contact.addressTitle")}
                  </h3>
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-luxury-champagne/85 text-lg leading-snug hover:text-luxury-gold transition-colors"
                  >
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={80} className="luxury-card-dark p-6 flex items-center gap-5">
                <span className="shrink-0 grid place-items-center h-12 w-12 rounded-full border border-luxury-gold/40 text-luxury-gold">
                  <Phone size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-accent uppercase tracking-luxury text-xs text-luxury-gold mb-1.5">
                    {t("contact.phoneTitle")}
                  </h3>
                  <a href={siteConfig.phoneHref} className="text-luxury-champagne/85 text-lg hover:text-luxury-gold transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={160} className="luxury-card-dark p-6 flex items-start gap-5">
                <span className="shrink-0 grid place-items-center h-12 w-12 rounded-full border border-luxury-gold/40 text-luxury-gold">
                  <Clock size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-accent uppercase tracking-luxury text-xs text-luxury-gold mb-1.5">
                    {t("contact.hoursTitle")}
                  </h3>
                  <p className="text-luxury-champagne/85 text-lg">{t("contact.hoursLunch")}</p>
                  <p className="text-luxury-champagne/85 text-lg">{t("contact.hoursDinner")}</p>
                  <p className="text-luxury-champagne/55 mt-1">{t("contact.hoursDays")}</p>
                </div>
              </Reveal>

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
            </div>

            <Reveal delay={150} className="h-full">
              <GoldFrame className="h-full">
                <div className="relative h-full min-h-[400px] luxury-card overflow-hidden">
                  <iframe
                    title="map"
                    src={mapEmbedSrc}
                    className="w-full h-full min-h-[400px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </GoldFrame>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
