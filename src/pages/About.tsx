import { useTranslation } from "react-i18next";
import { Sparkles, Home as HomeIcon, BadgeCheck, Leaf } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Ornament from "../components/Ornament";
import SectionHeading from "../components/SectionHeading";
import GoldFrame from "../components/GoldFrame";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHero
        title={t("about.heroTitle")}
        subtitle={t("about.heroSubtitle")}
        backgroundImage={`${import.meta.env.BASE_URL}images/signature.png`}
      />

      {/* History */}
      <section className="py-16 md:py-24 lg:py-32 bg-luxury-cream relative">
        <div className="section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <Reveal className="order-1 lg:order-none">
              <GoldFrame>
                <div className="relative h-72 md:h-[30rem] overflow-hidden group">
                  <img
                    src={`${import.meta.env.BASE_URL}images/dining.png`}
                    alt={t("gallery.diningAlt")}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </GoldFrame>
            </Reveal>
            <Reveal delay={150}>
              <SectionHeading
                tone="light"
                align="left"
                eyebrow={t("about.heroSubtitle")}
                title={t("about.historyTitle")}
                className="mb-8"
              />
              <div className="space-y-6 text-lg text-luxury-gray-dark leading-relaxed font-body">
                <p>{t("about.historyIntro")}</p>
                <p>{t("about.historyText3")}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="emerald-wash py-16 md:py-24 lg:py-32 bg-luxury-ink grain relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/bar.png')` }}
        />
        <Reveal className="section-padding text-center relative z-10 max-w-3xl mx-auto">
          <span className="font-display text-6xl text-luxury-gold/40 leading-none">“</span>
          <p className="text-2xl md:text-4xl font-display text-luxury-cream italic -mt-4">
            {t("about.historyText4")}
          </p>
          <Ornament className="mt-8" />
        </Reveal>
      </section>

      {/* Photo strip */}
      <section className="bg-luxury-black relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-luxury-gold/15">
          {[
            { src: "salon.png", alt: t("gallery.salonAlt") },
            { src: "atrium.png", alt: t("gallery.atriumAlt") },
            { src: "washroom.png", alt: t("gallery.washroomAlt") },
          ].map((img) => (
            <div key={img.src} className="relative h-72 overflow-hidden group bg-luxury-black">
              <img
                src={`${import.meta.env.BASE_URL}images/${img.src}`}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 lg:py-32 bg-luxury-cream relative">
        <div className="section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <Reveal>
              <h2 className="text-display-md md:text-display-lg font-display mb-4 text-luxury-black">
                {t("about.philosophyTitle")}
              </h2>
              <p className="text-2xl font-display text-luxury-gold mb-6 italic">
                {t("about.motto")}
              </p>
              <p className="text-lg text-luxury-gray-dark leading-relaxed font-body mb-6">
                {t("about.philosophyText1")}
              </p>
              <p className="font-body text-luxury-gray-dark mb-6">{t("about.philosophyText2")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { Icon: Sparkles, label: t("about.freshness") },
                  { Icon: HomeIcon, label: t("about.homemade") },
                  { Icon: BadgeCheck, label: t("about.quality") },
                  { Icon: Leaf, label: t("about.accessible") },
                ].map(({ Icon, label }, i) => (
                  <Reveal key={label} delay={i * 80} className="flex items-center gap-4 luxury-card p-6">
                    <Icon className="text-luxury-gold shrink-0" size={28} strokeWidth={1.4} />
                    <span className="font-body">{label}</span>
                  </Reveal>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150}>
              <GoldFrame>
                <div className="relative h-72 md:h-[30rem] overflow-hidden group">
                  <img
                    src={`${import.meta.env.BASE_URL}images/salon.png`}
                    alt={t("gallery.salonAlt")}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </GoldFrame>
            </Reveal>
          </div>
          <Reveal className="max-w-3xl mx-auto text-center mt-14">
            <p className="text-lg text-luxury-gray-dark leading-relaxed font-body">
              {t("about.philosophyText3")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team & values */}
      <section className="emerald-wash py-16 md:py-24 lg:py-32 bg-luxury-ink grain relative overflow-hidden">
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-12">
              <SectionHeading tone="dark" title={t("about.teamTitle")} />
            </Reveal>
            <Reveal className="space-y-6 text-lg text-luxury-champagne/80 leading-relaxed font-body text-center">
              <p>{t("about.teamText1")}</p>
              <p>{t("about.teamText2")}</p>
            </Reveal>
            <Reveal className="text-center">
              <h3 className="text-2xl font-display text-luxury-gold mt-14 mb-10">
                {t("about.commitments")}
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { title: t("about.teamCohesionTitle"), text: t("about.teamCohesion") },
                { title: t("about.qualityCommitmentTitle"), text: t("about.qualityCommitment") },
                { title: t("about.environmentTitle"), text: t("about.environment") },
              ].map((c, i) => (
                <Reveal key={c.title} delay={i * 120} className="luxury-card-dark p-8">
                  <span className="font-display text-3xl text-luxury-gold/30">{String(i + 1).padStart(2, "0")}</span>
                  <h4 className="font-display text-xl text-luxury-cream mt-3 mb-3">{c.title}</h4>
                  <p className="font-body text-luxury-champagne/65">{c.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
