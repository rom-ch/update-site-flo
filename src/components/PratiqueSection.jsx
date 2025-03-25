import adoImg from "../assets/ado.webp";
import adulteImg from "../assets/adulte.webp";
import { PratiqueParagraph } from "./PratiqueParagraph";

export function PratiqueSection() {
  return (
    <section id="ma-pratique" className="my-12 space-y-6 overflow-hidden">
      <h2 className="px-8 text-center text-2xl font-semibold text-emerald-950 md:mb-8 md:text-3xl">
        Approche thérapeutique
      </h2>

      <div className="flex flex-col gap-8">
        <div className="bg-gray-200 pt-0 pb-6 md:py-6 xl:flex">
          <div className="space-y-4 md:space-y-0 xl:mx-auto">
            <div className="clip-right md:clip-md-right h-60 w-full sm:h-72 md:float-right md:h-[400px] md:w-96 lg:w-2xl">
              <img
                className="h-full w-full object-cover object-center sm:object-[position:50%_55%] md:translate-x-14 lg:translate-x-28 lg:object-[potision:0_75%]"
                src={adoImg}
                alt="Photo d'un adolescent appuyé sur un mur"
                loading="lazy"
              />
            </div>
            <PratiqueParagraph>
              <h3 className="text-lg font-semibold">Adolescents</h3>
              <p className="text-justify">
                La période de l&apos;adolescence peut s&apos;avérer compliquée
                pour de nombreux jeunes. Cette période d&apos;évolution vers
                l&apos;âge adulte peut être le lieu de démotivation scolaire, de
                dépression, de consommation de substances, et de
                désocialisation. La possibilité de les intégrer dans le
                processus thérapeutique dépendra de la volonté de
                l&apos;adolescent et de la problématique observée.
              </p>
              <p className="text-justify">
                Le remaniement qui s&apos;opère au niveau des modèles parentaux
                peut également amener des problèmes dans les relations
                familiales, avec les parents ou la fratrie.
              </p>
              <p className="text-justify">
                J&apos;apprécie les séances avec les adolescents car, lorsque la
                relation arrive à se créer, le travail qu&apos;ils souhaitent
                faire sur eux-mêmes devient très intéressant. Dans la majorité
                des cas, les parents se sentent démunis face à leur enfant.
              </p>
            </PratiqueParagraph>
          </div>
        </div>
        <div className="bg-gray-200 pt-0 pb-6 md:py-6 xl:flex">
          <div className="space-y-4 md:space-y-0 xl:mx-auto">
            <div className="clip-left md:clip-md-left h-60 w-full sm:h-72 md:float-left md:h-[400px] md:w-96 lg:w-2xl">
              <img
                className="h-full w-full object-cover md:-translate-x-16 md:object-right lg:-translate-x-42 lg:object-right-bottom"
                src={adulteImg}
                alt="Photo d'un homme assis"
                loading="lazy"
              />
            </div>
            <PratiqueParagraph>
              <h3 className="text-lg font-semibold">Adultes</h3>
              <p className="text-justify">
                Les adultes qui viennent en consultation ressentent souvent une
                vulnérabilité à un certain moment de leur vie. Cette fragilité
                peut avoir une cause interne pouvant survenir après un évènement
                difficile, une période de remise en question ou une cause
                externe comme les relations aux autres.
              </p>
              <p className="text-justify">
                La thérapie, principalement basée sur la parole, consiste en une
                introspection à la recherche de son moi profond. Le psychologue
                permet au patient de prendre du recul et d&apos;envisager les
                choses différemment, en liant l&apos;expérience difficile au
                parcours de vie de la personne.
              </p>
              <p className="text-justify">
                Pour certains, cette connexion peut se faire rapidement mais le
                travail se déroule en général sur plusieurs mois.
              </p>
            </PratiqueParagraph>
          </div>
        </div>
      </div>
    </section>
  );
}
