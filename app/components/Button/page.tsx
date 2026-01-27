type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: React.ReactNode;
  bgVariant: string;
  bgHoverVariant: string;
};

export default function Button({ type, title, icon, bgVariant, bgHoverVariant }: ButtonProps) {
  return (
    <button
      type={type}
      className={`text-white  w-full sm:w-auto flex items-center justify-center gap-2 ${bgVariant} ${bgHoverVariant} duration-300 px-5 py-2 cursor-pointer rounded-4xl`}
    >
      {icon && <div>{icon}</div>}
      <span className="text-lg font-medium cursor-pointer text-center">
        {title}
      </span>
    </button>
  );
}
