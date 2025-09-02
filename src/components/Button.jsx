export default function Button({children, onClick, color = "blue"}){
  const base =
    "px-4 py-2 rounded-lg text-white transition font-medium shadow-sm";
  const colors = {
    blue: "bg-[oklch(0.76_0.2_272)] hover:bg-[oklch(0.76_0.2_92)]",
    green: "bg-green-500 hover:bg-green-600",
    purple: "bg-purple-500 hover:bg-purple-600",
    orange: "bg-orange-500 hover:bg-orange-600",
  };

  return (
    <button onClick={onClick} className={`${base} ${colors[color]}`}>
      {children}
    </button>
  );
}
