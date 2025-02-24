import { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.webp";
import { useOverflow } from "../context/OverflowContext";
import { Button } from "./Button";

export function Header({ setIsModalFormOpen }) {
  const { lockScroll, unlockScroll } = useOverflow();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  function handleClickLink() {
    setIsOpen(false);
  }

  const handleClickOutsideNav = (e) => {
    if (
      navRef.current &&
      !navRef.current.contains(e.target) &&
      e.target !== buttonRef.current
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideNav);
    return () => document.removeEventListener("click", handleClickOutsideNav);
  });

  useEffect(() => {
    if (isOpen && window.innerWidth < 1024) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isOpen, lockScroll, unlockScroll]);

  return (
    <>
      <header className="z-10 flex h-16 w-full items-center justify-between border-b-2 border-gray-100 bg-zinc-50 px-6 py-4 sm:h-20 lg:h-24">
        <div className="mr-8 flex w-full items-center gap-4 sm:mr-0 sm:w-auto">
          <img src={logo} alt="Logo" className="w-10 md:w-12" />
          <h1 className="flex grow flex-col text-center text-emerald-950 sm:text-left">
            <span className="font-bebas text-2xl md:text-3xl">
              Florent Chauvin
            </span>
            <span className="text-sm md:text-base">Psycholoque Clinicien</span>
          </h1>
        </div>
        <nav
          ref={navRef}
          // inert={!isOpen ? "true" : undefined}
          className={`absolute top-16 z-10 h-full w-full bg-zinc-50 p-4 sm:top-20 sm:w-96 sm:border-l sm:border-l-gray-200 lg:static lg:top-auto lg:flex lg:h-auto lg:w-auto lg:border-none lg:px-0 ${
            isOpen
              ? "-translate-x-6 sm:-right-6 lg:translate-x-0"
              : "translate-x-full sm:-right-96 lg:translate-x-0"
          } transition-all duration-300 ease-in-out lg:transition-none`}
        >
          <ul className="flex flex-col gap-6 border-b border-b-gray-300 pb-4 font-semibold text-gray-900 has-hover:text-zinc-500 lg:flex-row lg:gap-2 lg:border-none lg:pb-0 transition-colors duration-200">
            <li>
              <a
                onClick={handleClickLink}
                className="block h-full w-full cursor-pointer rounded-md px-2 py-2 hover:bg-gray-100 hover:text-black focus:ring-2 focus:ring-emerald-600/80 focus:outline-none"
                href="#qui-suis-je"
              >
                Qui suis-je?
              </a>
            </li>
            <li>
              <a
                onClick={handleClickLink}
                className="block h-full w-full cursor-pointer rounded-md px-2 py-2 hover:bg-gray-100 hover:text-black focus:ring-2 focus:ring-emerald-600/80 focus:outline-none"
                href="#le-cabinet"
              >
                Le cabinet
              </a>
            </li>
            <li>
              <a
                onClick={handleClickLink}
                className="block h-full w-full cursor-pointer rounded-md px-2 py-2 hover:bg-gray-100 hover:text-black focus:ring-2 focus:ring-emerald-600/80 focus:outline-none"
                href="#ma-pratique"
              >
                Ma pratique
              </a>
            </li>
            <li>
              <a
                onClick={handleClickLink}
                className="block h-full w-full cursor-pointer rounded-md px-2 py-2 hover:bg-gray-100 hover:text-black focus:ring-2 focus:ring-emerald-600/80 focus:outline-none"
                href="#prendre-rendez-vous"
              >
                Rendez-vous et tarifs
              </a>
            </li>
          </ul>
          <Button
            width="full"
            onClick={() => setIsModalFormOpen(true)}
            className="mt-6 sm:hidden"
          >
            Me contacter
          </Button>
        </nav>
        <Button
          onClick={() => setIsModalFormOpen(true)}
          className="mr-10 hidden sm:block lg:mx-0"
        >
          Me contacter
        </Button>
        <button
          ref={buttonRef}
          className="absolute right-4 cursor-pointer rounded text-3xl text-emerald-950 focus:ring-2 focus:ring-gray-900 focus:outline-none lg:hidden"
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? (
            <IoClose className="pointer-events-none" />
          ) : (
            <FiMenu className="pointer-events-none" />
          )}
        </button>
      </header>
    </>
  );
}
