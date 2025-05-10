export default function TeamDisplay({ team, align }) {
  const isLeft = align === "left";

  return (
    <div
      className={`group flex items-center gap-5 md:gap-8 transition-all duration-300 ${
        isLeft ? "flex-row-reverse text-right" : "text-left"
      }`}
    >
      <img
        src={team.crest}
        alt={team.name}
        className="h-20 w-20 md:h-28 md:w-28 object-contain drop-shadow-lg transition group-hover:scale-105 group-hover:brightness-110"
      />
      <span className="text-white text-2xl md:text-4xl font-semibold tracking-tight w-[10rem] md:w-[14rem] truncate">
        {team.name}
      </span>
    </div>
  );
}
