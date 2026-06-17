interface SpinningSealProps {
  text?: string;
  className?: string;
}

/**
 * A circular gold seal whose ring of text rotates slowly, with a static
 * infinity mark at its centre — a playful, premium focal accent.
 */
const SpinningSeal = ({
  text = "· BUFFET À VOLONTÉ · SEPT UNIVERS · SUSHI UMAMI ",
  className = "",
}: SpinningSealProps) => {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="animate-spin-slow h-full w-full">
        <defs>
          <path
            id="seal-text-path"
            d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
            fill="none"
          />
        </defs>
        <text
          fill="var(--color-luxury-gold)"
          style={{ fontSize: "13px", letterSpacing: "2px", fontFamily: "var(--font-accent)", textTransform: "uppercase" }}
        >
          <textPath href="#seal-text-path" startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-display text-luxury-gold text-3xl">
        ∞
      </span>
    </div>
  );
};

export default SpinningSeal;
