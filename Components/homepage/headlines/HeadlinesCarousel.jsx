"use client";

import { useRef } from "react";
import CarouselItem from "./CarouselItem";
import CarouselNav from "./CarouselNav";
import CarouselHeader from "./CarouselHeader";

export default function HeadlinesCarousel({ content }) {
  const scrollRef = useRef(null);
  const firstItemRef = useRef(null);
  const fallbackWidth = 300;

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    const itemWidth = firstItemRef.current?.offsetWidth || fallbackWidth;
    const max = container.scrollWidth - container.clientWidth;
    const current = container.scrollLeft;

    const next =
      dir === "left"
        ? current === 0
          ? max
          : current - itemWidth
        : Math.ceil(current) >= max
        ? 0
        : current + itemWidth;

    container.scrollTo({ left: next, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center py-12 px-4 space-y-8">
      <div className="w-full max-w-[1680px] px-2 sm:px-4 lg:px-6">
        <CarouselHeader />
      </div>

      <div className="relative w-full max-w-[1680px]">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden scroll-smooth gap-6 no-scrollbar px-4"
        >
          {content.map((item, i) => (
            <CarouselItem
              key={item.id}
              item={item}
              ref={i === 0 ? firstItemRef : undefined}
            />
          ))}
        </div>

        <CarouselNav direction="left" onClick={() => scroll("left")} />
        <CarouselNav direction="right" onClick={() => scroll("right")} />
      </div>
    </div>
  );
}
