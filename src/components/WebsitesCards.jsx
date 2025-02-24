import doctolibLogo from "../assets/doctolib-logo.webp";
import psyLogo from "../assets/psy-logo.svg";
import weppsyLogo from "../assets/weppsy-logo.png";

const websites = [
  {
    name: "Doctolib",
    logo: doctolibLogo,
    link: "https://www.doctolib.fr/psychologue/paris/florent-chauvin",
    description: "Votre partenaire santé au quotidien",
  },
  {
    name: "Weppsy",
    logo: weppsyLogo,
    link: "https://weppsy.com/psychologue/florent-chauvin/2562",
    description: "Bien choisir votre psychologue",
  },
  {
    name: "Psychologue.net",
    logo: psyLogo,
    link: "https://www.psychologue.net/cabinets/florent-chauvin",
    description: "Trouvez votre psy",
  },
];

export function WebsitesCards() {
  return (
    <>
      <p>Vous pouvez également me retrouver sur les sites suivants :</p>
      <div className="mx-auto flex flex-col items-center justify-center gap-8 md:mx-0 md:flex-row md:justify-between">
        {websites.map((website) => {
          return (
            <a
              href={website.link}
              target="_blank"
              key={website.name}
              className="hover:shadow-[0_1px_2px_rgba(60,64,67,0.3)] flex h-28 w-52 flex-col items-center justify-center gap-4 rounded-2xl bg-zinc-50 p-4 shadow-[0_5px_15px_rgba(0,0,0,0.25)] focus:ring-2 focus:ring-emerald-600/80 focus:outline-none transition-shadow duration-100"
            >
              <div className="w-full">
                <div className="flex items-center justify-center gap-2">
                  <img
                    src={website.logo}
                    alt={`Logo ${website.name}`}
                    className="w-8"
                  />
                  <span className="font-semibold">{website.name}</span>
                </div>
              </div>
              <p className="text-center text-sm">{website.description}</p>
            </a>
          );
        })}
      </div>
    </>
  );
}
