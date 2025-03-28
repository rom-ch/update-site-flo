import profilPicture from "../assets/profile.webp";

export function Presentation() {
  return (
    <section className="w-full max-w-4xl space-y-6 p-3">
      <h2 className="px-8 text-center text-2xl font-semibold text-emerald-950 md:mb-8 md:text-3xl">
        Présentation
      </h2>
      <div className="overflow-hidden rounded shadow-md">
        {/* <img src={profilPicture} alt="Photo de Florent Chauvin" /> */}
      </div>
      <div></div>
    </section>
  );
}
