import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { siteConfig } from "../config/siteConfig";

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/", label: t("common.nav.home") },
    { to: "/about", label: t("common.nav.about") },
    { to: "/menu", label: t("common.nav.menu") },
    { to: "/gallery", label: t("common.nav.gallery") },
    { to: "/contact", label: t("common.nav.contact") },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-underline font-body uppercase text-sm tracking-luxury transition-colors ${
      isActive ? "text-luxury-gold is-active" : "text-luxury-cream hover:text-luxury-gold"
    }`;

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "h-16 md:h-20 bg-luxury-black/95 backdrop-blur border-b border-luxury-gold/20"
          : "h-20 md:h-24 bg-gradient-to-b from-black/60 to-transparent border-b border-transparent"
      }`}
    >
      <div className="section-padding relative z-50 h-full flex items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-3 shrink-0" onClick={close}>
          <img src={`${import.meta.env.BASE_URL}images/logo-round.webp`} alt={siteConfig.name} className="h-11 w-11 md:h-12 md:w-12 object-cover rounded-full shrink-0" />
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
            className="btn-shine border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-colors font-body uppercase text-sm tracking-luxury px-6 py-2.5"
          >
            {t("common.reserve")}
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          {/* Animated hamburger ↔ cross */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="relative h-10 w-10 flex items-center justify-center text-luxury-cream hover:text-luxury-gold transition-colors"
          >
            <span
              className={`absolute h-px w-6 bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                menuOpen ? "rotate-45" : "-translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-current transition-all duration-200 ease-out ${
                menuOpen ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                menuOpen ? "-rotate-45" : "translate-y-[6px]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Tap-to-close backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 z-30 bg-luxury-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Right-side sliding drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-40 h-[100svh] w-[80%] max-w-xs bg-luxury-black/98 backdrop-blur border-l border-luxury-gold/25 shadow-2xl shadow-black/60 transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col h-full pt-24 px-7 pb-8">
          {navItems.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={close}
              style={{ transitionDelay: menuOpen ? `${150 + i * 55}ms` : "0ms" }}
              className={({ isActive }) =>
                `group flex items-center justify-end gap-3 py-3.5 border-b border-luxury-gold/10 font-body uppercase text-sm tracking-luxury transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                } ${isActive ? "text-luxury-gold" : "text-luxury-cream"}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`block h-1.5 w-1.5 rotate-45 transition-all duration-300 ${
                      isActive ? "bg-luxury-gold opacity-100" : "bg-luxury-gold opacity-0 group-hover:opacity-60"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
          <button
            type="button"
            style={{ transitionDelay: menuOpen ? `${150 + navItems.length * 55}ms` : "0ms" }}
            className={`btn-shine mt-7 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black font-body uppercase text-sm tracking-luxury px-6 py-3.5 text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {t("common.reserve")}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
