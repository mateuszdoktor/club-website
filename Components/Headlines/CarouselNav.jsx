export default function CarouselNav({ direction, onClick }) {
  const isLeft = direction === "left";
  const position = isLeft ? "left-4" : "right-4";
  const icon = isLeft
    ? "icon-[tabler--chevron-left]"
    : "icon-[tabler--chevron-right]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${position} z-30`}
    >
      <div className="bg-white/90 hover:bg-white text-black size-10 flex items-center justify-center rounded-full shadow-md transition-colors duration-300">
        <span className={`${icon} size-5 rtl:rotate-180`} />
      </div>
    </button>
  );
}
