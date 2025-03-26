import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";

export function InputError({ errorMessage }) {
  return (
    <>
      <FaRegCircleCheck className="absolute top-1/2 right-3 hidden -translate-y-1/2 text-green-600 peer-[:not(:placeholder-shown):valid]:block" />
      <FaRegCircleXmark className="absolute top-1/2 right-3 hidden -translate-y-1/2 text-red-400 peer-[:not(:placeholder-shown):invalid]:block" />
      <p className="absolute -bottom-6 hidden text-sm text-red-400 peer-[:not(:placeholder-shown):invalid]:block">
        {errorMessage}
      </p>
    </>
  );
}
