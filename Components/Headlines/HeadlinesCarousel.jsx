"use client"
import { useRef } from "react";
import CarouselHeader from "./CarouselHeader";
import CarouselItem from "./CarouselItem";
import CarouselNav from "./CarouselNav";

export default function HeadlinesCarousel({ content }) {
  const scrollRef = useRef(null);
  const itemRef = useRef(null); // ref do pierwszego elementu

  const scrollLeft = () => {
    const itemWidth = itemRef.current?.offsetWidth || 300;
    scrollRef.current?.scrollBy({ left: -itemWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    const itemWidth = itemRef.current?.offsetWidth || 300;
    scrollRef.current?.scrollBy({ left: itemWidth, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center py-12 px-4 space-y-8">
      <div className="w-full max-w-[1680px] px-2 sm:px-4 lg:px-6">
        <CarouselHeader />
      </div>

      <div className="relative w-full max-w-[1680px]">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden gap-6 scroll-smooth px-2 sm:px-4 lg:px-6 no-scrollbar justify-center"
        >
          {content.map((item, index) => (
            <CarouselItem
              key={item.id}
              item={item}
              ref={index === 0 ? itemRef : null} // ref tylko do pierwszego
            />
          ))}
        </div>

        <CarouselNav direction="left" onClick={scrollLeft} />
        <CarouselNav direction="right" onClick={scrollRight} />
      </div>
    </div>
  );
}
