"use client";
import { useRef, useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import CarouselNav from "./CarouselNav";
import CarouselHeader from "./CarouselHeader";

export default function HeadlinesCarousel({ content }) {
  const scrollRef = useRef(null);
  const itemRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const scroll = (dir) => {
    const container = scrollRef.current;
    const itemWidth = itemRef.current?.offsetWidth || 300;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (dir === "left") {
      container.scrollLeft === 0
        ? container.scrollTo({
            left: container.scrollWidth,
            behavior: "smooth",
          })
        : container.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
      Math.ceil(container.scrollLeft) >= maxScroll
        ? container.scrollTo({ left: 0, behavior: "smooth" })
        : container.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-12 px-4 space-y-8">
      <div className="w-full max-w-[1680px] px-2 sm:px-4 lg:px-6">
        <CarouselHeader />
      </div>
      <div className="relative w-full max-w-[1680px]">
        <div
          ref={scrollRef}
          className={`flex overflow-x-auto scroll-smooth gap-6 no-scrollbar px-4 transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
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
