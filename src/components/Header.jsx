import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/logo.webp";
import { useOverflow } from "../context/OverflowContext";
import { Button } from "./Button";
import { Nav } from "./Nav";

export function Header({ setIsModalFormOpen }) {
  const { lockScroll, unlockScroll } = useOverflow();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log(window.innerWidth);

    if (isMenuOpen && window.innerWidth < 1024) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isMenuOpen, lockScroll, unlockScroll]);

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
        {isMenuOpen && (
          <div className="absolute inset-0 z-10 bg-black/50 lg:hidden"></div>
        )}
        <Nav
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setIsModalFormOpen={setIsModalFormOpen}
        />

        <Button
          onClick={() => setIsModalFormOpen(true)}
          className="mr-10 hidden sm:block lg:mx-0"
        >
          Me contacter
        </Button>
        <button
          className="absolute right-4 cursor-pointer rounded text-3xl text-emerald-950 focus:ring-2 focus:ring-emerald-600/80 focus:outline-none lg:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <FiMenu className="pointer-events-none" />
        </button>
      </header>
    </>
  );
}
