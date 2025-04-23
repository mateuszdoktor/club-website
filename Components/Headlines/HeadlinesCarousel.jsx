"use client";
import { useRef } from "react";
import CarouselItem from "./CarouselItem";
import CarouselNav from "./CarouselNav";
import CarouselHeader from "./CarouselHeader";

export default function HeadlinesCarousel({ content }) {
  const scrollRef = useRef(null);
  const itemRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    const itemWidth = itemRef.current?.offsetWidth || 300;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    const targetScroll =
      dir === "left"
        ? scrollLeft === 0
          ? maxScroll
          : scrollLeft - itemWidth
        : Math.ceil(scrollLeft) >= maxScroll
        ? 0
        : scrollLeft + itemWidth;

    container.scrollTo({ left: targetScroll, behavior: "smooth" });
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
          {content.map((item, index) => (
            <CarouselItem
              key={item.id}
              item={item}
              ref={index === 0 ? itemRef : null}
            />
          ))}
        </div>
        <CarouselNav direction="left" onClick={() => scroll("left")} />
        <CarouselNav direction="right" onClick={() => scroll("right")} />
      </div>
    </div>
  );
}
