export function Button({
  size = "md",
  disabled = false,
  width = "fit",
  children,
  onClick,
  ref,
  className,
  type = "button",
}) {
  const baseStyles =
    "cursor-pointer rounded-lg font-medium bg-emerald-700 font-medium text-zinc-50 focus:ring-2 focus:ring-emerald-600/80 focus:ring-offset-2 focus:outline-none hover:bg-emerald-800";

  const sizeStyle = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";
  const widthStyles = {
    fit: "mx-auto",
    full: "w-full",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyle[size]} ${disabledStyles} ${widthStyles[width]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      type={type}
    >
      {children}
    </button>
  );
}
