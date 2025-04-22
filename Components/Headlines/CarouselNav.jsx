export default function CarouselNav({ direction, onClick }) {
  const isLeft = direction === "left";
  const positionClass = isLeft ? "left-2" : "right-2";
  const iconClass = isLeft
    ? "icon-[tabler--chevron-left]"
    : "icon-[tabler--chevron-right]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${positionClass} z-30`}
    >
      <div className="bg-white/90 hover:bg-white text-black size-10 flex items-center justify-center rounded-full shadow-md transition-colors duration-300">
        <span className={`${iconClass} size-5 rtl:rotate-180`} />
      </div>
    </button>
  );
}
