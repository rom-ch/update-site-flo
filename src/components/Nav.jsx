import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.webp";
import { Button } from "./Button";
import { NavItem } from "./NavItem";

export function Nav({ isMenuOpen, setIsMenuOpen, setIsModalFormOpen }) {
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutsiteNav(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      setTimeout(() => {
        document.addEventListener("click", handleClickOutsiteNav);
      }, 0);
    }

    return () => document.removeEventListener("click", handleClickOutsiteNav);
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={` ${isMenuOpen ? "block" : "hidden"} absolute top-0 left-0 z-100 h-full w-full bg-zinc-50 p-4 sm:right-0 sm:left-auto sm:w-96 lg:static lg:top-auto lg:flex lg:h-auto lg:w-auto lg:px-0`}
    >
      <img
        src={logo}
        alt="Logo"
        className="absolute left-4 w-10 md:w-12 lg:hidden"
      />

      <button
        className="absolute right-4 cursor-pointer rounded text-3xl text-emerald-950 focus:ring-2 focus:ring-emerald-600/80 focus:outline-none sm:top-6 lg:hidden"
        onClick={() => setIsMenuOpen(false)}
      >
        <IoClose className="pointer-events-none text-emerald-950" />
      </button>
      <ul className="mt-16 flex flex-col gap-6 border-b border-b-gray-300 pb-4 font-semibold text-gray-900 transition-colors duration-200 has-hover:text-zinc-500 sm:px-0 lg:mt-0 lg:flex-row lg:gap-2 lg:border-none lg:pb-0">
        <NavItem setIsMenuOpen={setIsMenuOpen} href="#qui-suis-je">
          Qui suis-je?
        </NavItem>
        <NavItem setIsMenuOpen={setIsMenuOpen} href="#le-cabinet">
          Le cabinet
        </NavItem>
        <NavItem setIsMenuOpen={setIsMenuOpen} href="#ma-pratique">
          Ma pratique
        </NavItem>
        <NavItem setIsMenuOpen={setIsMenuOpen} href="#prendre-rendez-vous">
          Rendez-vous et tarifs
        </NavItem>
      </ul>
      <Button
        size="lg"
        width="full"
        onClick={() => setIsModalFormOpen(true)}
        className="mt-6 lg:hidden"
      >
        Me contacter
      </Button>
    </nav>
  );
}
