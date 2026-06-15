interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  emoji?: string;
}

const PageHero = ({ title, subtitle, backgroundImage, emoji }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden bg-luxury-black">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
      <div className="absolute inset-0 bg-luxury-gradient" />
      <div className="relative z-10 text-center px-6">
        <p className="text-luxury-champagne text-sm md:text-lg tracking-luxury uppercase font-body mb-4">
          {subtitle}
        </p>
        <h1 className="flex items-center justify-center gap-3 md:gap-6 text-display-lg md:text-display-xl font-display text-luxury-cream">
          {emoji && (
            <span className="text-3xl md:text-5xl" aria-hidden="true">{emoji}</span>
          )}
          <span>{title}</span>
          {emoji && (
            <span className="text-3xl md:text-5xl" aria-hidden="true">{emoji}</span>
          )}
        </h1>
        <div className="h-px bg-luxury-gold mx-auto mt-6 w-20" />
      </div>
    </section>
  );
};

export default PageHero;
