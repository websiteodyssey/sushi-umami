import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { siteConfig } from "../config/siteConfig";

const Loader = () => {
  const { t } = useTranslation();
  const [hidden, setHidden] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1300);
    const hideTimer = setTimeout(() => setHidden(true), 1800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-luxury-black transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1 className="font-display text-3xl md:text-5xl tracking-luxury uppercase">
        <span className="text-luxury-cream">{siteConfig.name.split(" ")[0]} </span>
        <span className="text-luxury-gold">{siteConfig.name.split(" ").slice(1).join(" ")}</span>
      </h1>
      <div className="w-40 md:w-56 h-px bg-luxury-gold/20 mt-8 overflow-hidden">
        <div className="h-full bg-luxury-gold animate-loader-bar" />
      </div>
      <p className="mt-4 text-xs tracking-luxury uppercase text-luxury-gray font-body">
        {t("common.loading")}
      </p>
    </div>
  );
};

export default Loader;
