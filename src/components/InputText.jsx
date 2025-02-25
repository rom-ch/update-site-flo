export function InputText({
  type = "text",
  name,
  id,
  onChange,
  value,
  errors,
}) {
  console.log(errors);

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`rounded-lg px-6 py-2.5 ring ring-emerald-950 focus:border-none focus:outline-none ${errors && errors.length > 0 ? "bg-red-50 ring-red-700" : "focus:bg-emerald-200/10 focus:ring-emerald-700"}`}
    />
  );
}
