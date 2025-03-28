import { useRef, useState } from "react";
import { Button } from "./Button";
import { FormGroup } from "./FormGroup";
import { InputError } from "./InputError";
import { InputText } from "./InputText";
import { Label } from "./Label";

// const encode = (data) => {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };

export function ContactForm({ onClose, setFormSubmitted }) {
  const formRef = useRef(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const formattedData = {
      Nom: `${data.lastname} ${data.firstname}`,
      Email: data.email,
      Objet: data.object,
      Message: data.message,
    };

    setFormSubmitted(true);
    onClose();
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} onChange={checkFormValidity}>
      <h1 className="mb-6 text-2xl font-bold text-emerald-950 sm:mb-8 sm:text-3xl">
        Me contacter
      </h1>
      <div className="flex flex-col items-center justify-between sm:flex-row sm:gap-4">
        <FormGroup>
          <Label htmlFor="lastname" required>
            Nom
          </Label>
          <InputText
            id="lastname"
            placeholder="Votre Nom"
            required
            errorMessage="Nom requis"
            minLength="2"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="firstname" required>
            Prénom
          </Label>
          <InputText
            id="firstname"
            placeholder="Votre Prénom"
            required
            errorMessage="Prénom requis"
            minLength="2"
          />
        </FormGroup>
      </div>

      <FormGroup>
        <Label htmlFor="email" required>
          E-mail
        </Label>
        <InputText
          type="email"
          id="email"
          placeholder="Votre E-mail"
          required
          errorMessage="L'e-mail renseigné n'est pas valide"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="object">Objet</Label>
        <InputText id="object" name="Objet" placeholder="Objet" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message" required>
          Message
        </Label>
        <div className="relative">
          <textarea
            name="message"
            id="message"
            placeholder="Votre message..."
            required
            minLength="5"
            className={`peer flex h-36 w-full resize-none items-center gap-3 rounded px-6 py-1.5 pr-8 pl-3 ring ring-zinc-400 placeholder:text-sm not-placeholder-shown:valid:bg-green-50 not-placeholder-shown:valid:ring-green-600 not-placeholder-shown:invalid:bg-red-50 not-placeholder-shown:invalid:ring-red-400 focus:ring-sky-600 focus:outline-none sm:h-28 sm:py-2 sm:pl-3`}
          />
          <InputError errorMessage="Message requis" />
        </div>
      </FormGroup>
      <Button
        type="submit"
        size="lg"
        width="full"
        className="mt-8"
        disabled={!isFormValid}
      >
        Envoyer
      </Button>
    </form>
  );
}
