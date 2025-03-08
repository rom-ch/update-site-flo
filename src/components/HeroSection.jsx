import heroImage from "../assets/hero-3.webp";
import { Button } from "./Button";

export function HeroSection({ setIsModalFormOpen }) {
  return (
    <section
      style={{ backgroundImage: `url(${heroImage})` }}
      className="relative mb-8 flex h-72 w-full items-center justify-center bg-cover bg-center bg-no-repeat shadow-md before:absolute before:inset-0 before:bg-black/80 md:h-80 lg:h-96 lg:bg-[position:0_40%] xl:h-[448px]"
    >
      <div className="relative z-1 flex max-w-3/4 flex-col gap-4 text-zinc-50 sm:max-w-2/3 md:max-w-1/2 lg:max-w-[500px]">
        <h2 className="font-bebas text-center text-4xl sm:text-5xl lg:text-6xl">
          Florent Chauvin
        </h2>
        <p className="text-center text-sm/6 font-semibold sm:text-base/6 lg:text-lg">
          Psychologue clinicien et psychothérapeute auprès des enfants, des
          adolescents et des adultes
        </p>
        <Button onClick={() => setIsModalFormOpen(true)}>Me contacter</Button>
      </div>
    </section>
  );
}
