import { Button } from "./Button";
import { FormGroup } from "./FormGroup";
import { InputText } from "./InputText";
import { Label } from "./Label";

// const encode = (data) => {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };

export function ContactForm({ onClose, setFormSubmitted }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="mb-6 text-2xl font-bold text-emerald-950 sm:mb-8 sm:text-3xl">
        Me contacter
      </h1>
      <div className="flex flex-col items-center justify-between sm:flex-row sm:gap-4">
        <FormGroup>
          <Label htmlFor="lastname" required>
            Nom
          </Label>
          <InputText id="lastname" name="Nom" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="firstname" required>
            Prénom
          </Label>
          <InputText id="firstname" name="Prénom" />
        </FormGroup>
      </div>

      <FormGroup>
        <Label htmlFor="email" required>
          E-mail
        </Label>
        <InputText
          type="email"
          id="email"
          name="E-mail"
          placeholder="Votre E-mail"
          required
        />
        <p className="absolute -bottom-6 hidden text-sm text-red-400 peer-[:not(:placeholder-shown):invalid]:block">
          Please provide a valid email
        </p>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="object">Objet</Label>
        <InputText id="object" name="Objet" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message" required>
          Message
        </Label>
        <textarea
          name="Message"
          id="message"
          className={`flex h-36 resize-none items-center gap-3 rounded-md px-6 py-2.5 text-lg ring ring-zinc-400 focus:outline-none sm:h-28`}
        />
      </FormGroup>
      <Button type="submit" size="lg" width="full" className="mt-6">
        Envoyer
      </Button>
    </form>
  );
}
