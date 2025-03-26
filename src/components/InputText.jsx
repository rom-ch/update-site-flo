// import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { InputError } from "./InputError";

export function InputText({
  type = "text",
  id,
  autofocus,
  pattern,
  placeholder,
  required,
  errorMessage,
  minLength,
}) {
  return (
    <div className="relative">
      <input
        autoFocus={autofocus}
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        minLength={minLength}
        className={`peer w-full rounded py-1.5 pr-8 pl-3 ring ring-zinc-400 ${required ? "not-placeholder-shown:valid:bg-green-50 not-placeholder-shown:valid:ring-green-600 not-placeholder-shown:invalid:bg-red-50 not-placeholder-shown:invalid:ring-red-400" : ""} placeholder:text-sm focus:ring-sky-600 focus:outline-none sm:py-2 sm:pl-3`}
      />
      {required && <InputError errorMessage={errorMessage} />}
    </div>
  );
}
