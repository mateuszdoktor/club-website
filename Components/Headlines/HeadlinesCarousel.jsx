import CarouselHeader from "./CarouselHeader";
import CarouselItem from "./CarouselItem";
import CarouselNav from "./CarouselNav";

export default function HeadlinesCarousel({ content }) {
  return (
    <div className="w-full flex flex-col items-center py-12 px-4 space-y-8">
      <div className="w-full max-w-[1680px] px-2 sm:px-4 lg:px-6">
        <CarouselHeader />
      </div>

      <div className="relative w-full max-w-[1680px]">
        <div className="flex overflow-x-auto overflow-y-hidden gap-6 scroll-smooth px-2 sm:px-4 lg:px-6 no-scrollbar justify-center">
          {content.map((item) => (
            <CarouselItem key={item.id} item={item} />
          ))}
        </div>

        <CarouselNav direction="left" />
        <CarouselNav direction="right" />
      </div>
    </div>
  );
}
