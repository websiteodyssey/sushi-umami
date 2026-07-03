import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Clock } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import TikTokIcon from "./TikTokIcon";
import { siteConfig } from "../config/siteConfig";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-luxury-black text-luxury-cream">
      <div className="section-padding py-12 md:py-16 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-round.webp`}
              alt={siteConfig.name}
              className="h-12 w-12 object-cover rounded-full shrink-0"
            />
            <span className="font-display text-2xl text-luxury-cream">{siteConfig.name}</span>
          </div>
          <p className="font-body text-luxury-champagne/80 leading-relaxed">
            {t("footer.tagline")}
          </p>
          {(siteConfig.social.instagram || siteConfig.social.tiktok) && (
            /* Visual only — intentionally not clickable (no redirect). */
            <div className="flex items-center gap-3 mt-5" aria-label="Instagram, TikTok">
              {siteConfig.social.instagram && (
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/30 text-luxury-cream/80"
                >
                  <InstagramIcon size={20} />
                </span>
              )}
              {siteConfig.social.tiktok && (
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/30 text-luxury-cream/80"
                >
                  <TikTokIcon size={19} />
                </span>
              )}
            </div>
          )}
        </div>

        <div>
          <h3 className="font-display text-lg text-luxury-gold uppercase tracking-luxury mb-4">
            {t("footer.quickLinks")}
          </h3>
          <ul className="space-y-3 font-body text-luxury-cream/90">
            <li><Link to="/" className="hover:text-luxury-gold transition-colors">{t("common.nav.home")}</Link></li>
            <li><Link to="/about" className="hover:text-luxury-gold transition-colors">{t("common.nav.about")}</Link></li>
            <li><Link to="/menu" className="hover:text-luxury-gold transition-colors">{t("common.nav.menu")}</Link></li>
            <li><Link to="/gallery" className="hover:text-luxury-gold transition-colors">{t("common.nav.gallery")}</Link></li>
            <li><Link to="/contact" className="hover:text-luxury-gold transition-colors">{t("common.nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-luxury-gold uppercase tracking-luxury mb-4">
            {t("footer.contactTitle")}
          </h3>
          <ul className="space-y-3 font-body text-luxury-cream/90">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-luxury-gold mt-1 shrink-0" />
              <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors">
                {siteConfig.address.street}, {siteConfig.address.city}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-luxury-gold shrink-0" />
              <a href={siteConfig.phoneHref} className="hover:text-luxury-gold transition-colors">{siteConfig.phone}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-luxury-gold uppercase tracking-luxury mb-4">
            {t("common.openingHours")}
          </h3>
          <ul className="space-y-3 font-body text-luxury-cream/90">
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-luxury-gold shrink-0" />
              <span>{t("common.lunch")} : {siteConfig.hours.lunch}</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-luxury-gold shrink-0" />
              <span>{t("common.dinner")} : {siteConfig.hours.dinner}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-luxury-gold/20 py-6 text-center font-body text-sm text-luxury-cream/60">
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-3">
          <Link to="/mentions-legales" className="hover:text-luxury-gold transition-colors">
            {t("footer.legalMentions")}
          </Link>
          <span className="text-luxury-gold/30" aria-hidden="true">·</span>
          <Link to="/confidentialite" className="hover:text-luxury-gold transition-colors">
            {t("footer.privacy")}
          </Link>
        </nav>
        <p>© {new Date().getFullYear()} {siteConfig.name} — {t("footer.rights")}</p>
        <p className="mt-1.5 text-luxury-cream/45">
          Powered by{" "}
          <a
            href="https://pro.ody.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-luxury-gold/80 hover:text-luxury-gold transition-colors"
          >
            ody
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
