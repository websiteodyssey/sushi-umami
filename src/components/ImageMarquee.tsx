interface MarqueeImage {
  src: string;
  alt: string;
}

interface ImageMarqueeProps {
  images: MarqueeImage[];
  direction?: "left" | "right";
  speed?: number;
}

const ImageMarquee = ({ images, direction = "left", speed = 40 }: ImageMarqueeProps) => {
  const track = [...images, ...images];

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex w-max gap-6 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {track.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative h-56 md:h-72 w-80 md:w-[26rem] shrink-0 overflow-hidden luxury-card"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
