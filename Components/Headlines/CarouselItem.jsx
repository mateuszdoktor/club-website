import { forwardRef } from "react";

const CarouselItem = forwardRef(({ item }, ref) => {
  return (
    <div
      ref={ref}
      className="relative flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] aspect-[16/9] rounded-2xl overflow-hidden shadow-xl group transition-transform duration-300 hover:scale-[1.02]"
    >
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full z-20 p-4">
        <h3 className="text-white text-lg md:text-xl lg:text-2xl font-semibold drop-shadow-lg">
          {item.title}
        </h3>
      </div>
    </div>
  );
});

export default CarouselItem;
