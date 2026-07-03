import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlide {
  src: string;
  alt: string;
  caption?: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
  autoPlayMs?: number;
  className?: string;
}

const Carousel = ({ slides, autoPlayMs = 5000, className = "" }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!autoPlayMs) return;
    const timer = setInterval(next, autoPlayMs);
    return () => clearInterval(timer);
  }, [next, autoPlayMs]);

  return (
    <div className={`relative w-full h-full overflow-hidden group ${className}`}>
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-luxury-black/20" />

      {slides[index]?.caption && (
        <div className="absolute inset-x-0 bottom-0 pt-16 pb-10 px-6 bg-gradient-to-t from-luxury-black/85 via-luxury-black/40 to-transparent pointer-events-none text-center">
          <span className="font-accent uppercase tracking-luxury text-[0.6rem] text-luxury-gold/80">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <p className="font-display text-2xl md:text-3xl text-luxury-cream mt-1">
            {slides[index].caption}
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={prev}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-luxury-black/40 hover:bg-luxury-gold text-luxury-cream hover:text-luxury-black p-2 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-luxury-black/40 hover:bg-luxury-gold text-luxury-cream hover:text-luxury-black p-2 transition-colors opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? "bg-luxury-gold" : "bg-luxury-cream/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
