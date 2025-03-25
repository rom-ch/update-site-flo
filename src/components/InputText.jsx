export function InputText({
  type = "text",
  name,
  id,
  autofocus,
  pattern,
  placeholder,
  required,
}) {
  return (
    <input
      autoFocus={autofocus}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      pattern={pattern}
      required={required}
      className={`peer rounded-md px-3 py-1.5 ring ring-zinc-400 not-placeholder-shown:valid:ring-green-600 not-placeholder-shown:invalid:ring-red-400 focus:border-none focus:outline-none sm:px-6 sm:py-2.5`}
    />
  );
}
