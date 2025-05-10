"use client";

import { useRef } from "react";
import CarouselItem from "./CarouselItem";
import CarouselNav from "./CarouselNav";
import CarouselHeader from "./CarouselHeader";

export default function HeadlinesCarousel({ content }) {
  const scrollRef = useRef(null);
  const firstItemRef = useRef(null);
  const isScrolling = useRef(false);
  const fallbackWidth = 300;

  const getItemWidth = () => firstItemRef.current?.offsetWidth || fallbackWidth;

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container || isScrolling.current) return;

    const width = getItemWidth();
    const max = container.scrollWidth - container.clientWidth;
    const current = container.scrollLeft;
    const next =
      dir === "left"
        ? current === 0
          ? max
          : current - width
        : current >= max
        ? 0
        : current + width;

    isScrolling.current = true;
    container.scrollTo({ left: next, behavior: "smooth" });
    setTimeout(() => (isScrolling.current = false), 350);
  };

  return (
    <div className="w-full flex flex-col items-center py-20 px-6 space-y-12 bg-white">
      <div className="w-full max-w-7xl px-2">
        <CarouselHeader />
      </div>

      <div className="relative w-full max-w-8xl isolate">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-8 no-scrollbar px-2"
        >
          {content.map((item, i) => (
            <div key={item.id} className="snap-start shrink-0">
              <CarouselItem
                item={item}
                ref={i === 0 ? firstItemRef : undefined}
              />
            </div>
          ))}
        </div>

        <CarouselNav direction="left" onClick={() => scroll("left")} />
        <CarouselNav direction="right" onClick={() => scroll("right")} />
      </div>
    </div>
  );
}
