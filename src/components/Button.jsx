export function Button({
  size = "md",
  text = "md",
  disabled = false,
  width = "fit",
  children,
  onClick,
  ref,
  className,
  type = "button",
}) {
  const baseStyles =
    "cursor-pointer rounded-md block font-medium bg-emerald-800 font-medium text-zinc-50  hover:bg-emerald-700 transition-transform duration-150 active:scale-99 hover:scale-101";

  const sizeStyle = {
    sm: "px-3 py-1",
    md: "px-4 py-2",
    lg: "px-6 py-3",
  };

  const textStyle = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  const widthStyles = {
    fit: "mx-auto",
    full: "w-full",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyle[size]} ${textStyle[text]} ${disabledStyles} ${widthStyles[width]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      type={type}
    >
      {children}
    </button>
  );
}
