import { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.webp";
import { navLinks } from "../utils/navLinks";
import { Button } from "./Button";
import { NavItem } from "./NavItem";

export function Nav({ setIsModalFormOpen }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navRef = useRef();

  function handleClickContactButton() {
    setIsSidebarOpen(false);
    setIsModalFormOpen(true);
  }

  useEffect(() => {
    function handleEsc(e) {
      if (isSidebarOpen && e.key === "Escape") setIsSidebarOpen(false);
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isSidebarOpen, setIsSidebarOpen]);

  useEffect(() => {
    function handleMedia() {
      if (!isSidebarOpen && window.matchMedia("(width < 1024px)").matches) {
        navRef.current.setAttribute("inert", "true");
      } else {
        navRef.current.removeAttribute("inert");
      }
    }

    handleMedia();

    window.addEventListener("resize", handleMedia);
    return () => window.removeEventListener("resize", handleMedia);
  });

  return (
    <>
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="absolute top-0 right-0 z-8 ml-auto cursor-pointer p-3 lg:hidden"
        aria-label="open navbar"
        aria-expanded={isSidebarOpen}
        aria-controls="navbar"
      >
        <FiMenu className="stroke-zinc-50 text-4xl" />
      </button>
      <nav
        ref={navRef}
        id="navbar"
        className={`fixed top-0 z-10 h-screen w-full bg-zinc-50 sm:w-72 lg:static lg:h-auto lg:w-full ${isSidebarOpen ? "right-0" : "-right-full"} transition-[right] duration-300 ease-out lg:px-6`}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center">
          <li>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-0 right-0 block cursor-pointer p-3 lg:hidden"
              aria-label="close navbar"
            >
              <IoClose className="fill-gray-700 text-4xl hover:fill-emerald-950" />
            </button>
          </li>
          <li className="my-4 lg:my-0 lg:mr-auto">
            <a
              className="flex flex-col items-center justify-center gap-4 py-4 font-medium lg:flex-row lg:gap-6 lg:px-0"
              href="#"
            >
              <img src={logo} alt="" className="size-12 lg:size-12" />
              <h1 className="flex flex-col">
                <span className="font-bebas text-3xl text-emerald-950 lg:text-3xl">
                  Florent Chauvin
                </span>
                <span className="text-base">Psycholoque Clinicien</span>
              </h1>
            </a>
          </li>
          {navLinks.map((link) => (
            <NavItem
              key={link.name}
              {...link}
              setIsSidebarOpen={setIsSidebarOpen}
            />
          ))}
          <li className="mt-8 text-center sm:text-start lg:mt-0">
            <Button
              size="lg"
              className="lg:ml-4"
              onClick={handleClickContactButton}
            >
              Me Contacter
            </Button>
          </li>
        </ul>
      </nav>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-9 bg-black/50 lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        aria-hidden="true"
      ></div>
    </>
  );
}
