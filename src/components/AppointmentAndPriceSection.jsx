export function AppointmentAndPriceSection() {
  return (
    <section id="prendre-rendez-vous" className="mt-8">
      <div className="w-full bg-[url('/assets/wave-lines.svg')] bg-cover bg-center bg-no-repeat px-8 py-6 text-stone-50">
        <h2 className="text-2xl font-medium sm:text-center">
          Rendez-vous et tarifs
        </h2>
        <div className="mx-auto my-6 flex max-w-4xl flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-medium">Prendre rendez-vous :</p>
            <ul className="mt-2 list-disc">
              <li>
                Par téléphone :{" "}
                <a
                  href="tel:+330754388842"
                  className="rounded font-semibold decoration-zinc-50 hover:underline hover:underline-offset-2 focus:ring-2 focus:ring-zinc-50/80 focus:outline-none"
                >
                  {" "}
                  07.54.38.88.42
                </a>
              </li>
              <li>
                Par internet sur{" "}
                <a
                  className="rounded font-semibold decoration-zinc-50 hover:underline hover:underline-offset-2 focus:ring-2 focus:ring-zinc-50/80 focus:outline-none"
                  href="https://www.doctolib.fr/psychologue/paris/florent-chauvin"
                  target="_blank"
                >
                  Doctolib
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Tarifs :</p>
            <ul className="mt-2 list-disc">
              <li>65 euros - séance individuelle de 45 minutes</li>
              <li>80 euros - thérapie familiale de 45 minutes</li>
            </ul>
          </div>
        </div>
        <p className="mx-auto max-w-4xl text-sm/6">
          Une suivi psychologique pouvant se dérouler sur plusieurs mois, le
          prix d&apos;une consultation peut être un objet de discussion afin de
          pouvoir trouver un juste tarif pour permettre à ceux qui le souhaitent
          de bénéficier d&apos;une thérapie.
        </p>
      </div>
    </section>
  );
}
