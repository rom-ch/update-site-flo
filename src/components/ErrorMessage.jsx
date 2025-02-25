export function ErrorMessage({ errors }) {
  return <p className="text-sm text-red-500">{errors.join(". ")}</p>;
}
