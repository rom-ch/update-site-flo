import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { useOverflow } from "../context/OverflowContext";

export function CustomModal({ isOpen, onClose, children }) {
  const { lockScroll, unlockScroll } = useOverflow();

  useEffect(() => {
    if (!isOpen) return;

    function handler(e) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => unlockScroll();
  }, [isOpen, lockScroll, unlockScroll]);

  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-1000 flex justify-center overflow-y-auto bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="safe-padding absolute top-1/2 h-fit max-h-[90dvh] w-[90%] max-w-[400px] -translate-y-1/2 overflow-y-auto rounded-xl bg-zinc-50 p-6 sm:mx-10 sm:max-w-xl"
      >
        <button
          onClick={onClose}
          aria-label="Fermer la modal"
          className="absolute top-6 right-6 cursor-pointer rounded text-4xl text-emerald-950 hover:text-emerald-700 focus:ring-2 focus:ring-emerald-700/80 focus:outline-none"
        >
          <IoClose />
        </button>
        {children}
      </div>
    </div>,
    document.querySelector("#modal-container"),
  );
}
