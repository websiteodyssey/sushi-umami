import { useTranslation } from "react-i18next";
import { Sparkles, Home as HomeIcon, BadgeCheck, Leaf } from "lucide-react";
import PageHero from "../components/PageHero";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      <PageHero
        title={t("about.heroTitle")}
        subtitle={t("about.heroSubtitle")}
        backgroundImage="/images/interior-2.png"
        emoji="🏮"
      />

      {/* History */}
      <section className="py-12 md:py-20 lg:py-28 bg-luxury-cream relative">
        <div className="section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="relative h-72 md:h-[28rem] luxury-card overflow-hidden order-1 lg:order-none">
              <img
                src="/images/interior-1.png"
                alt={t("gallery.interior1Alt")}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-display-md font-display mb-6 text-luxury-black">
                {t("about.historyTitle")}
              </h2>
              <div className="space-y-6 text-lg text-luxury-gray-dark leading-relaxed font-body">
                <p>{t("about.historyIntro")}</p>
                <p>{t("about.historyText3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section className="py-12 md:py-16 bg-luxury-black">
        <div className="section-padding text-center">
          <p className="text-2xl md:text-3xl font-display text-luxury-gold italic">
            {t("about.historyText4")}
          </p>
        </div>
      </section>

      {/* Photo strip */}
      <section className="py-16 bg-luxury-gray-light relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative z-0">
          <div className="relative h-64 overflow-hidden group">
            <img
              src="/images/interior-2.png"
              alt={t("gallery.interior2Alt")}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="relative h-64 overflow-hidden group">
            <img
              src="/images/interior-3.png"
              alt={t("gallery.interior3Alt")}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="relative h-64 overflow-hidden group">
            <img
              src="/images/interior-1.png"
              alt={t("gallery.interior1Alt")}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-12 md:py-20 lg:py-28 bg-luxury-cream relative">
        <div className="section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-display-md font-display mb-4 text-luxury-black">
                {t("about.philosophyTitle")}
              </h2>
              <p className="text-2xl font-display text-luxury-gold mb-6 italic">
                {t("about.motto")}
              </p>
              <p className="text-lg text-luxury-gray-dark leading-relaxed font-body mb-6">
                {t("about.philosophyText1")}
              </p>
              <p className="font-body text-luxury-gray-dark mb-4">{t("about.philosophyText2")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 luxury-card p-6">
                  <Sparkles className="text-luxury-gold" size={28} />
                  <span className="font-body">{t("about.freshness")}</span>
                </div>
                <div className="flex items-center gap-4 luxury-card p-6">
                  <HomeIcon className="text-luxury-gold" size={28} />
                  <span className="font-body">{t("about.homemade")}</span>
                </div>
                <div className="flex items-center gap-4 luxury-card p-6">
                  <BadgeCheck className="text-luxury-gold" size={28} />
                  <span className="font-body">{t("about.quality")}</span>
                </div>
                <div className="flex items-center gap-4 luxury-card p-6">
                  <Leaf className="text-luxury-gold" size={28} />
                  <span className="font-body">{t("about.accessible")}</span>
                </div>
              </div>
            </div>
            <div className="relative h-72 md:h-[28rem] luxury-card overflow-hidden">
              <img
                src="/images/interior-3.png"
                alt={t("gallery.interior3Alt")}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-lg text-luxury-gray-dark leading-relaxed font-body">
              {t("about.philosophyText3")}
            </p>
          </div>
        </div>
      </section>

      {/* Team & values */}
      <section className="py-12 md:py-20 lg:py-28 bg-luxury-ivory relative overflow-hidden">
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display-md font-display mb-6 md:mb-8 lg:mb-12 text-luxury-black text-center">
              {t("about.teamTitle")}
            </h2>
            <div className="space-y-8 text-lg text-luxury-gray-dark leading-relaxed font-body">
              <p>{t("about.teamText1")}</p>
              <p>{t("about.teamText2")}</p>
              <h3 className="text-2xl font-display text-luxury-black mt-12 mb-8">
                {t("about.commitments")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="luxury-card p-8">
                  <h4 className="font-display text-xl text-luxury-black mb-3">
                    {t("about.teamCohesionTitle")}
                  </h4>
                  <p className="font-body text-luxury-gray-dark">{t("about.teamCohesion")}</p>
                </div>
                <div className="luxury-card p-8">
                  <h4 className="font-display text-xl text-luxury-black mb-3">
                    {t("about.qualityCommitmentTitle")}
                  </h4>
                  <p className="font-body text-luxury-gray-dark">{t("about.qualityCommitment")}</p>
                </div>
                <div className="luxury-card p-8">
                  <h4 className="font-display text-xl text-luxury-black mb-3">
                    {t("about.environmentTitle")}
                  </h4>
                  <p className="font-body text-luxury-gray-dark">{t("about.environment")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
