import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("cursor-none");
    setEnabled(true);

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, input, textarea, select"));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  if (!enabled) return null;

  const ringSize = hovering ? 48 : 32;

  return (
    <>
      <div
        className="pointer-events-none fixed top-0 left-0 z-[200] h-1.5 w-1.5 rounded-full bg-luxury-gold transition-transform duration-100 ease-out"
        style={{ transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)` }}
      />
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[200] rounded-full border border-luxury-gold transition-all duration-300 ease-out ${
          hovering ? "opacity-70 bg-luxury-gold/10" : "opacity-40"
        }`}
        style={{
          width: ringSize,
          height: ringSize,
          transform: `translate3d(${position.x - ringSize / 2}px, ${position.y - ringSize / 2}px, 0)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
