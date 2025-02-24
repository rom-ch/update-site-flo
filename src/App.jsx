import { useState } from "react";
import { AppointmentAndPriceSection } from "./components/AppointmentAndPriceSection";
import { ContactForm } from "./components/ContactForm";
import { CustomModal } from "./components/CustomModal";
import { Footer } from "./components/Footer";
import { FormSuccessMessage } from "./components/FormSuccessMessage";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PratiqueSection } from "./components/PratiqueSection";
import { WebsitesCards } from "./components/WebsitesCards";

function App() {
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
  const [isModalFormSuccessOpen, setIsModalFormSuccessOpen] = useState(false);

  return (
    <>
      <Header setIsModalFormOpen={setIsModalFormOpen} />
      <HeroSection setIsModalFormOpen={setIsModalFormOpen} />

      <div className="mx-auto my-8 flex max-w-4xl flex-col gap-8 px-8">
        <p className="text-justify sm:text-left">
          Vous trouverez sur ce site les informations importantes relatives à la
          consultation psychologique ainsi que l&apos;emplacement du cabinet et
          les tarifs de consultation.
        </p>
        <WebsitesCards />
      </div>

      <PratiqueSection />
      <AppointmentAndPriceSection />
      <Footer />
      <CustomModal
        isOpen={isModalFormOpen}
        onClose={() => setIsModalFormOpen(false)}
      >
        <ContactForm
          setIsModalFormSuccessOpen={setIsModalFormSuccessOpen}
          onClose={() => setIsModalFormOpen(false)}
        />
      </CustomModal>
      <CustomModal
        isOpen={isModalFormSuccessOpen}
        onClose={() => isModalFormSuccessOpen(false)}
      >
        <FormSuccessMessage onClose={() => setIsModalFormSuccessOpen(false)} />
      </CustomModal>
    </>
  );
}
export default App;
