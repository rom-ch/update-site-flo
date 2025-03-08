import doctolibLogo from "../assets/doctolib-logo.webp";
import psyLogo from "../assets/psy-logo.svg";
import weppsyLogo from "../assets/weppsy-logo.png";
import { WebsiteCard } from "./WebsiteCard";

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
      <div className="mx-auto flex flex-col items-center justify-center gap-4 sm:flex-row md:mx-0 md:justify-center md:gap-12">
        {websites.map((website) => {
          return <WebsiteCard key={website.name} {...website} />;
        })}
      </div>
    </>
  );
}
