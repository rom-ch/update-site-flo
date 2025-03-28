import heroImage from "../assets/hero.webp";
import { Button } from "./Button";

export function HeroSection({ setIsModalFormOpen }) {
  return (
    <section className="relative mb-8 flex h-72 w-full items-center justify-center shadow-md md:h-80 lg:h-96 xl:h-[448px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 after:absolute after:inset-0 after:bg-linear-to-b after:from-black/60 after:to-black/75"
      >
        <img
          className="h-full w-full object-cover"
          src={heroImage}
          alt="Conversation between a psychologist and a patient"
          loading="lazy"
        />
      </div>
      <div className="relative z-1 flex max-w-3/4 flex-col gap-4 text-zinc-50 sm:max-w-2/3 md:max-w-1/2 lg:max-w-[500px]">
        <h2 className="font-bebas text-center text-4xl sm:text-5xl lg:text-6xl">
          Florent Chauvin
        </h2>
        <p className="text-center text-sm/6 font-semibold sm:text-base/6 lg:text-lg">
          Psychologue clinicien et psychothérapeute auprès des enfants, des
          adolescents et des adultes
        </p>
        <Button className="lg:hidden" onClick={() => setIsModalFormOpen(true)}>
          Me contacter
        </Button>
      </div>
    </section>
  );
}
