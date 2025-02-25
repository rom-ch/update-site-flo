export function InputText({
  type = "text",
  name,
  id,
  onChange,
  value,
  errors,
  autofocus,
}) {
  return (
    <input
      autoFocus={autofocus}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`rounded-lg px-4 py-2 ring ring-emerald-950 focus:border-none focus:outline-none sm:px-6 sm:py-2.5 ${errors && errors.length > 0 ? "bg-red-50 ring-red-700" : "focus:bg-emerald-200/10 focus:ring-emerald-700"}`}
    />
  );
}
