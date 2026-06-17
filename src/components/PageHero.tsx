import Ornament from "./Ornament";
import SpinningSeal from "./SpinningSeal";

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative h-[52svh] min-h-[340px] md:min-h-[400px] flex items-center justify-center overflow-hidden bg-luxury-black grain">
      {backgroundImage && (
        <div
          className="animate-ken-burns absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
      <div className="hero-overlay absolute inset-0 pointer-events-none" />
      <div className="frame-inset" />
      <div className="absolute bottom-5 right-5 w-[4.5rem] h-[4.5rem] md:bottom-8 md:right-8 md:w-24 md:h-24 lg:w-28 lg:h-28 z-10 animate-fade-up" style={{ animationDelay: "0.5s" }}>
        <SpinningSeal />
      </div>
      <div className="relative z-10 text-center px-6">
        <p className="animate-fade-up text-luxury-champagne text-xs md:text-sm tracking-luxury-wide uppercase font-body mb-5" style={{ animationDelay: "0.05s" }}>
          {subtitle}
        </p>
        <h1 className="animate-fade-up text-display-lg md:text-display-xl lg:text-[5.5rem] font-display font-medium leading-[0.98]" style={{ animationDelay: "0.15s" }}>
          <span className="text-gold-foil">{title}</span>
        </h1>
        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Ornament className="mt-7" />
        </div>
      </div>
    </section>
  );
};

export default PageHero;
