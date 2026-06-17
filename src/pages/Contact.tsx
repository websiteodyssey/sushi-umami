import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "../components/SocialIcons";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import GoldFrame from "../components/GoldFrame";
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
        backgroundImage={`${import.meta.env.BASE_URL}images/salon.png`}
      />

      <section className="py-16 md:py-24 lg:py-32 bg-luxury-cream">
        <div className="section-padding">
          <Reveal className="max-w-2xl mx-auto mb-14">
            <SectionHeading
              tone="light"
              eyebrow={t("contact.heroSubtitle")}
              title={t("contact.title")}
              subtitle={t("contact.text")}
            />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
            <Reveal className="luxury-card p-8 flex flex-col gap-6 font-body">
              <div className="flex items-start gap-4">
                <MapPin className="text-luxury-gold mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-display text-xl text-luxury-black mb-1">
                    {t("contact.addressTitle")}
                  </h3>
                  <p className="text-luxury-gray-dark">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-luxury-gold mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-display text-xl text-luxury-black mb-1">
                    {t("contact.phoneTitle")}
                  </h3>
                  <a href={siteConfig.phoneHref} className="text-luxury-gray-dark hover:text-luxury-gold transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-luxury-gold mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-display text-xl text-luxury-black mb-1">
                    {t("contact.emailTitle")}
                  </h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-luxury-gray-dark hover:text-luxury-gold transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-luxury-gold mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-display text-xl text-luxury-black mb-1">
                    {t("contact.hoursTitle")}
                  </h3>
                  <p className="text-luxury-gray-dark">{t("contact.hoursLunch")}</p>
                  <p className="text-luxury-gray-dark">{t("contact.hoursDinner")}</p>
                  <p className="text-luxury-gray mt-1">{t("contact.hoursDays")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ExternalLink className="text-luxury-gold mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-display text-xl text-luxury-black mb-1">
                    {t("contact.socialTitle")}
                  </h3>
                  <div className="flex items-center gap-4 mt-1">
                    <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-luxury-gray-dark hover:text-luxury-gold transition-colors">
                      <InstagramIcon size={22} />
                    </a>
                    <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-luxury-gray-dark hover:text-luxury-gold transition-colors">
                      <FacebookIcon size={22} />
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine mt-auto inline-block text-center border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-colors uppercase text-sm tracking-luxury px-6 py-3"
              >
                {t("contact.mapCta")}
              </a>
            </Reveal>

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
