import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { siteConfig } from "../config/siteConfig";

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const navItems = [
    { to: "/", label: t("common.nav.home") },
    { to: "/about", label: t("common.nav.about") },
    { to: "/menu", label: t("common.nav.menu") },
    { to: "/gallery", label: t("common.nav.gallery") },
    { to: "/contact", label: t("common.nav.contact") },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-body uppercase text-sm tracking-luxury transition-colors ${
      isActive ? "text-luxury-gold" : "text-luxury-cream hover:text-luxury-gold"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-luxury-black/95 backdrop-blur border-b border-luxury-gold/20">
      <div className="section-padding h-full flex items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-3 shrink-0" onClick={() => setMenuOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}images/logo-round.png`} alt={siteConfig.name} className="h-11 w-11 md:h-12 md:w-12 object-cover rounded-full shrink-0" />
          <span className="font-display text-xl md:text-2xl text-luxury-cream tracking-wide whitespace-nowrap">
            {siteConfig.name}
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <LanguageSwitcher />
          <button
            type="button"
            className="border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-colors font-body uppercase text-sm tracking-luxury px-6 py-2.5"
          >
            {t("common.reserve")}
          </button>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="text-luxury-cream"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-luxury-black border-b border-luxury-gold/20 px-6 py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClass}
              end={item.to === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-colors font-body uppercase text-sm tracking-luxury px-6 py-2.5 text-center"
          >
            {t("common.reserve")}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
