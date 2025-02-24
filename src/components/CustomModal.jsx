import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { useOverflow } from "../context/OverflowContext";

export function CustomModal({ isOpen, onClose, children }) {
  const { lockScroll, unlockScroll } = useOverflow();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
    }
  }, [isOpen]);

  useEffect(() => {
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
  }, [isOpen, lockScroll, unlockScroll]);

  return createPortal(
    <div
      className={`absolute inset-0 z-100 bg-black/50 backdrop-blur-xs ${isOpen ? "block" : "hidden"}`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 cursor-pointer rounded text-5xl text-zinc-50 focus:ring-2 focus:ring-emerald-700/80 focus:outline-none"
      >
        <IoClose />
      </button>
      <div className="absolute top-1/2 left-1/2 z-10 -translate-1/2">
        {children}
      </div>
    </div>,
    document.querySelector("#modal-container"),
  );
}
