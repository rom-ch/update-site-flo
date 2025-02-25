import { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

export function PratiqueParagraph({ children }) {
  const [showParagraph, setShowParagraph] = useState(false);

  return (
    <>
      <div
        className={`max-w-6xl space-y-2 px-6 sm:px-8 ${showParagraph ? "line-clamp-none" : "line-clamp-6"} md:line-clamp-none`}
      >
        {children}
      </div>
      <button
        onClick={() => setShowParagraph((s) => !s)}
        className="flex w-full cursor-pointer items-center justify-end gap-1 px-6 hover:underline sm:px-8 md:hidden"
      >
        {showParagraph ? (
          <>
            <span className="text-sm font-medium">Masquer</span>{" "}
            <RxCaretUp className="text-xl" />
          </>
        ) : (
          <>
            <span className="text-sm font-medium">Lire la suite</span>{" "}
            <RxCaretDown className="text-xl" />
          </>
        )}
      </button>
    </>
  );
}
