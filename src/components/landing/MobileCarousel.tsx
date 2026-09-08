import { useEffect, useRef, useState } from "react";
import type { IconCardItem } from "@/types/content";

interface MobileCarouselProps {
  items: IconCardItem[];
  direction: "ltr" | "rtl";
  theme: "light" | "dark";
}

const AUTOPLAY_INTERVAL_MS = 3500;

const MobileCarousel = ({ items, direction, theme }: MobileCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLight = theme === "light";

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = direction === "ltr" ? (prev + 1) % items.length : (prev - 1 + items.length) % items.length;
        if (scrollRef.current) {
          const child = scrollRef.current.children[next] as HTMLElement;
          if (child) scrollRef.current.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
        }
        return next;
      });
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [items.length, direction]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const childWidth = (scrollRef.current.children[0] as HTMLElement)?.offsetWidth || 1;
    setActiveIndex(Math.round(scrollRef.current.scrollLeft / childWidth));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.children[index] as HTMLElement;
    if (child) scrollRef.current.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <div className="md:hidden">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className={`snap-center shrink-0 w-[74vw] p-4 rounded-xl border transition-all duration-300 ${
              isLight
                ? "bg-card border-border"
                : "bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20"
            }`}
          >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
              isLight ? "bg-primary/10" : "bg-primary-foreground/20"
            }`}>
              <item.icon className={`h-6 w-6 ${isLight ? "text-primary" : "text-primary-foreground"}`} />
            </div>
            <h3 className={`font-display font-semibold mb-2 ${isLight ? "text-foreground" : ""}`}>{item.title}</h3>
            <p className={`text-sm ${isLight ? "text-muted-foreground" : "opacity-80"}`}>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Navegação do carrossel">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Ir para ${item.title}`}
            onClick={() => { setActiveIndex(i); scrollToIndex(i); }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? isLight ? "bg-primary w-6" : "bg-primary-foreground w-6"
                : isLight ? "bg-primary/30 w-2" : "bg-primary-foreground/30 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;
