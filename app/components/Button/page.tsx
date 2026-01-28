type ButtonProps = {
  type: "button" | "submit";
  title: string;
  titleColor?:string;
  icon?: React.ReactNode;
  bgVariant: string;
  bgHoverVariant: string;
};

export default function Button({ type, title, titleColor, icon, bgVariant, bgHoverVariant }: ButtonProps) {
  return (
    <button
      type={type}
      className={`w-full text-white sm:w-auto flex items-center justify-center gap-2 ${bgVariant} ${bgHoverVariant} duration-300 px-5 py-2 cursor-pointer rounded-4xl`}
    >
      {icon && <div>{icon}</div>}
      <span className={`${titleColor} text-lg font-medium cursor-pointer text-center`}>
        {title}
      </span>
    </button>
  );
}
