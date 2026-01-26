export default function Button({ children, onClick, color = "blue" }) {
  const base =
    "relative bg-transparent px-1 py-1 font-medium text-black transition";

  const underline =
    "after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-full " +
    "after:-translate-x-1/2 after:scale-x-0 after:origin-center " +
    "after:transition-transform after:duration-300 after:content-[''] " +
    "hover:after:scale-x-100";

  const colors = {
    blue: "after:bg-[oklch(0.76_0.2_272)]",
    green: "after:bg-green-500",
    purple: "after:bg-purple-500",
    orange: "after:bg-orange-500",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${underline} ${colors[color]}`}
    >
      {children}
    </button>
  );
}

