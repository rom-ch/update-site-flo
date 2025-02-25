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
      className="fixed top-0 left-0 z-1000 flex h-screen w-screen items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-svh overflow-y-auto"
      >
        {/* <button
          onClick={onClose}
          aria-label="Fermer la modal"
          className="absolute -top-2 right-0 cursor-pointer rounded text-5xl text-zinc-50 hover:text-emerald-600 focus:ring-2 focus:ring-emerald-700/80 focus:outline-none"
        >
          <IoClose />
        </button> */}
        {children}
      </div>
    </div>,
    document.querySelector("#modal-container"),
  );
}
