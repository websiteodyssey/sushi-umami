import type { ReactNode } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import GoldFrame from "./GoldFrame";
import InstagramIcon from "./InstagramIcon";
import TikTokIcon from "./TikTokIcon";
import { siteConfig } from "../config/siteConfig";

interface ContactDetailsProps {
  /** Buttons rendered below the info cards (left column). */
  actions?: ReactNode;
  /** Show a non-clickable social block (Instagram / TikTok). */
  showSocial?: boolean;
}

/**
 * The "find us" block — address / phone / hours cards with circular gold icon
 * badges, an optional actions area, and the Google map. Shared by the Contact
 * page and the home page.
 */
const ContactDetails = ({ actions, showSocial = false }: ContactDetailsProps) => {
  const { t } = useTranslation();
  const { instagram, tiktok } = siteConfig.social;

  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.city}`
  )}&output=embed`;

  const badge = "shrink-0 grid place-items-center h-12 w-12 rounded-full border border-luxury-gold/40 text-luxury-gold";
  const label = "font-accent uppercase tracking-luxury text-xs text-luxury-gold mb-1.5";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
      <div className="flex flex-col gap-5 font-body">
        <Reveal className="luxury-card-dark p-6 flex items-center gap-5">
          <span className={badge}>
            <MapPin size={22} strokeWidth={1.6} />
          </span>
          <div>
            <h3 className={label}>{t("contact.addressTitle")}</h3>
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
          <span className={badge}>
            <Phone size={22} strokeWidth={1.6} />
          </span>
          <div>
            <h3 className={label}>{t("contact.phoneTitle")}</h3>
            <a href={siteConfig.phoneHref} className="text-luxury-champagne/85 text-lg hover:text-luxury-gold transition-colors">
              {siteConfig.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={160} className="luxury-card-dark p-6 flex items-start gap-5">
          <span className={badge}>
            <Clock size={22} strokeWidth={1.6} />
          </span>
          <div>
            <h3 className={label}>{t("contact.hoursTitle")}</h3>
            <p className="text-luxury-champagne/85 text-lg">{t("contact.hoursLunch")}</p>
            <p className="text-luxury-champagne/85 text-lg">{t("contact.hoursDinner")}</p>
            <p className="text-luxury-champagne/55 mt-1">{t("contact.hoursDays")}</p>
          </div>
        </Reveal>

        {showSocial && (instagram || tiktok) && (
          <Reveal delay={240} className="luxury-card-dark p-6 flex items-center gap-5">
            <div>
              <h3 className={label}>{t("contact.followTitle")}</h3>
              <div className="flex items-center gap-3 mt-2">
                {instagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className={`${badge} hover:bg-luxury-gold/10 transition-colors`}
                  >
                    <InstagramIcon size={22} />
                  </a>
                )}
                {tiktok ? (
                  <a
                    href={tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className={`${badge} hover:bg-luxury-gold/10 transition-colors`}
                  >
                    <TikTokIcon size={21} />
                  </a>
                ) : (
                  <span
                    aria-label="TikTok (bientôt disponible)"
                    aria-disabled="true"
                    title="Bientôt disponible"
                    className={`${badge} opacity-50 cursor-not-allowed`}
                  >
                    <TikTokIcon size={21} />
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        )}

        {actions}
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
  );
};

export default ContactDetails;
