import { useEffect, useState } from "react";
import { AppointmentAndPriceSection } from "./components/AppointmentAndPriceSection";
import { ContactForm } from "./components/ContactForm";
import { CustomModal } from "./components/CustomModal";
import { Footer } from "./components/Footer";
import { FormSuccessMessage } from "./components/FormSuccessMessage";
import { HeroSection } from "./components/HeroSection";
import { Nav } from "./components/Nav";
import { PratiqueSection } from "./components/PratiqueSection";
import { WebsitesCards } from "./components/WebsitesCards";

function App() {
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <>
      <Nav setIsModalFormOpen={setIsModalFormOpen} />
      <HeroSection setIsModalFormOpen={setIsModalFormOpen} />

      <div className="mx-auto my-8 flex max-w-4xl flex-col gap-8 px-8">
        <p className="text-justify sm:text-left">
          Vous trouverez sur ce site les informations importantes relatives à la
          consultation psychologique ainsi que l&apos;emplacement du cabinet et
          les tarifs de consultation.
        </p>
      </div>

      <PratiqueSection />
      <AppointmentAndPriceSection />
      <WebsitesCards />

      <Footer />
      <CustomModal
        isOpen={isModalFormOpen}
        onClose={() => setIsModalFormOpen(false)}
      >
        <ContactForm
          setFormSubmitted={setFormSubmitted}
          onClose={() => setIsModalFormOpen(false)}
        />
      </CustomModal>

      {formSubmitted && (
        <CustomModal
          isOpen={formSubmitted}
          onClose={() => setFormSubmitted(false)}
        >
          <FormSuccessMessage />
        </CustomModal>
      )}
    </>
  );
}
export default App;
