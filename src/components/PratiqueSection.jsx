import { useState } from "react";
import adoImg from "../assets/ado.webp";
import adulteImg from "../assets/adulte.webp";
import enfantImg from "../assets/enfant.webp";
import { PratiqueParagraph } from "./PratiqueParagraph";

export function PratiqueSection() {
  // const [showParagraph, setShowParagraph] = useState(false);

  return (
    <section id="ma-pratique" className="my-8 space-y-6">
      <h2 className="px-8 text-center text-2xl font-semibold text-emerald-950 md:mb-8 md:text-3xl">
        Ma pratique
      </h2>
      <div className="flex flex-col gap-8">
        <div className="space-y-4 xl:mx-auto">
          <div className="clip-left md:clip-md-left h-60 w-full sm:h-72 md:float-left md:h-[400px] md:w-96 lg:w-2xl">
            <img
              className="h-full w-full object-cover lg:-translate-x-12 lg:-translate-y-10"
              src={enfantImg}
              alt="Photo d'une enfant jouant avec des bulles"
            />
          </div>
          <PratiqueParagraph>
            <h3 className="text-lg font-semibold">Enfants</h3>
            <p className="text-justify">
              Que l&apos;enfant ait des difficultés dans l&apos;alimentation, la
              propreté, les apprentissages ou le sommeil, ces soucis disent
              quelque chose qu&apos;il ne peut pas forcément exprimer. Ce sont
              les parents, l&apos;école (ou autre lieu de vie) qui, en général,
              font remonter le problème.
            </p>
            <p className="text-justify">
              Je reçois toujours l&apos;enfant avec les parents durant le
              premier entretien car ils seront acteurs également dans le
              processus de compréhension de ce qui ne va pas. Par la suite, nous
              échangeons régulièrement ensemble et parfois sans l&apos;enfant en
              fonction de ce que j&apos;observe de l&apos;enfant et de sa
              problématique.
            </p>
            <p className="text-justify">
              Lors des séances avec les enfants, j&apos;utilise les jeux, le
              dessin et la parole pour qu&apos;ils arrivent à exprimer ce
              qu&apos;ils ressentent. Je reçois également des enfants avec les
              parents (ou l&apos;un des deux) lorsqu&apos;il faut travailler sur
              la dynamique familiale ou conseiller sur des notions éducatives.
            </p>
          </PratiqueParagraph>
        </div>
        <div className="space-y-4 xl:mx-auto">
          <div className="clip-right md:clip-md-right h-60 w-full sm:h-72 md:float-right md:h-[400px] md:w-96 lg:w-2xl">
            <img
              className="h-full w-full object-cover object-center sm:object-[position:50%_55%] md:translate-x-14 lg:translate-x-28 lg:object-[potision:0_75%]"
              src={adoImg}
              alt="Photo d'un adolescent appuyé sur un mur"
            />
          </div>
          <PratiqueParagraph>
            <h3 className="text-lg font-semibold">Adolescents</h3>
            <p className="text-justify">
              La période de l&apos;adolescence peut s&apos;avérer compliquée
              pour de nombreux jeunes. Cette période d&apos;évolution vers
              l&apos;âge adulte peut être le lieu de démotivation scolaire, de
              dépression, de consommation de substances, et de désocialisation.
              La possibilité de les intégrer dans le processus thérapeutique
              dépendra de la volonté de l&apos;adolescent et de la problématique
              observée.
            </p>
            <p className="text-justify">
              Le remaniement qui s&apos;opère au niveau des modèles parentaux
              peut également amener des problèmes dans les relations familiales,
              avec les parents ou la fratrie.
            </p>
            <p className="text-justify">
              J&apos;apprécie les séances avec les adolescents car, lorsque la
              relation arrive à se créer, le travail qu&apos;ils souhaitent
              faire sur eux-mêmes devient très intéressant. Dans la majorité des
              cas, les parents se sentent démunis face à leur enfant.
            </p>
          </PratiqueParagraph>
        </div>
        <div className="space-y-4 xl:mx-auto">
          <div className="clip-left md:clip-md-left h-60 w-full sm:h-72 md:float-left md:h-[400px] md:w-96 lg:w-2xl">
            <img
              className="h-full w-full object-cover md:-translate-x-16 md:object-right lg:-translate-x-42 lg:object-right-bottom"
              src={adulteImg}
              alt="Photo d'un homme assis"
            />
          </div>
          <PratiqueParagraph>
            <h3 className="text-lg font-semibold">Adultes</h3>
            <p className="text-justify">
              Les adultes qui viennent en consultation ressentent souvent une
              vulnérabilité à un certain moment de leur vie. Cette fragilité
              peut avoir une cause interne pouvant survenir après un évènement
              difficile, une période de remise en question ou une cause externe
              comme les relations aux autres.
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
    </section>
  );
}
