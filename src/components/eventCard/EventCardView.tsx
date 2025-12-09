export default function EventCardView({
  title,
  date,
  img,
  className = "",
  style,
  onClick,
}: {
  title: string;
  date: string;
  img: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  return (
    <div
      role={onClick ? "button" : undefined}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) onClick();
      }}
      className={
        "rounded-3xl bg-cover bg-center shadow-xl relative cursor-pointer transition-transform duration-300 hover:scale-[1.01] " +
        className
      }
      style={{ backgroundImage: `url(${img})`, ...style }}
    >
      <div className="absolute bottom-4 left-4 text-white">
        <h2 className="text-base md:text-lg lg:text-2xl font-semibold">{title}</h2>
        <p className="text-xs md:text-sm opacity-80">{date}</p>
      </div>
    </div>
  );
}