import { FaPhone } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";
import { IoMail } from "react-icons/io5";

export function Footer() {
  return (
    <footer className="flex items-center justify-center border-t-2 border-gray-200 px-10 py-4 md:justify-between">
      <div className="hidden md:block">
        <h3 className="font-bebas text-3xl text-emerald-950 lg:text-4xl">
          Florent Chauvin
        </h3>
        <span className="font-semibold">Psychologue Clinicien</span>
      </div>
      <div className="text-center">
        <h4 className="mb-2 text-lg font-semibold text-emerald-950 md:text-end">
          Contacts :
        </h4>
        <a
          href="https://maps.app.goo.gl/F2JYaEpxvJNSuP418"
          target="_blank"
          className="mb-4 block rounded leading-6 decoration-emerald-950 hover:underline hover:underline-offset-2 focus:ring-2 focus:ring-emerald-700/80 focus:outline-none md:text-end"
        >
          <p>8 rue du Ponceau</p>
          <p>95000 Cergy</p>
        </a>
        <a
          href="tel:+330754388842"
          className="mb-1 flex items-center justify-center gap-2 rounded decoration-emerald-950 hover:underline hover:underline-offset-2 focus:ring-2 focus:ring-emerald-700/80 focus:outline-none md:justify-end"
        >
          <span>
            <FaPhone className="text-emerald-950" />
          </span>
          <p>07.54.38.88.42</p>
        </a>
        <a
          href="mailto:psy.florent.chauvin@hotmail.com"
          className="mb-1 flex items-center justify-center gap-2 rounded decoration-emerald-950 hover:underline hover:underline-offset-2 focus:ring-2 focus:ring-emerald-700/80 focus:outline-none md:justify-end"
        >
          <span>
            <IoMail className="text-lg text-emerald-950" />
          </span>
          <p>psy.florent.chauvin@hotmail.com</p>
        </a>
        <a
          href="https://www.doctolib.fr/psychologue/paris/florent-chauvin"
          target="_blank"
          className="mb-1 flex items-center justify-center gap-2 rounded decoration-emerald-950 hover:underline hover:underline-offset-2 focus:ring-2 focus:ring-emerald-700/80 focus:outline-none md:justify-end"
        >
          <span>
            <HiExternalLink className="text-xl text-emerald-950" />
          </span>
          <p>Doctolib</p>
        </a>
      </div>
    </footer>
  );
}
