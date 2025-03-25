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
