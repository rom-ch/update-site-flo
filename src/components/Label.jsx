export function Label({ children, htmlFor, required }) {
  return (
    <label htmlFor={htmlFor} className="font-medium">
      {children} {required && <span className="ml-1 text-emerald-950">*</span>}
    </label>
  );
}
