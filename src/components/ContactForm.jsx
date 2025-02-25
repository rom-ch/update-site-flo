import { useEffect, useState } from "react";
import { validateForm } from "../utils/validators";
import { Button } from "./Button";
import { ErrorMessage } from "./ErrorMessage";
import { FormGroup } from "./FormGroup";
import { InputText } from "./InputText";
import { Label } from "./Label";

// const encode = (data) => {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };

const INITIAL_VALUES = {
  firstname: "",
  lastname: "",
  email: "",
  object: "",
  message: "",
};

export function ContactForm({ onClose, setFormSubmitted }) {
  const [formValues, setFormValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  function handleChangeValue(e) {
    const { id, value } = e.target;

    setFormValues((prev) => {
      const updatedValues = { ...prev, [id]: value };

      if (isAfterFirstSubmit) {
        setErrors(validateForm(updatedValues));
      }
      return updatedValues;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some(
      (errorArray) => errorArray.length > 0,
    );

    if (!hasErrors) {
      // fetch("/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   body: encode({
      //     "form-name": "contact",
      //     lastName,
      //     firstName,
      //     email,
      //     message,
      //   }),
      // });

      setFormValues(INITIAL_VALUES);
      setIsAfterFirstSubmit(false);

      onClose();
      setFormSubmitted(true);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl rounded-2xl bg-zinc-50 p-6 sm:mx-auto sm:p-10"
    >
      <h1 className="mb-8 text-2xl font-bold text-emerald-950 sm:text-3xl">
        Me contacter
      </h1>
      <div className="flex flex-col items-center justify-between sm:flex-row sm:gap-4">
        <FormGroup>
          <Label htmlFor="lastname" required>
            Nom
          </Label>
          <InputText
            autofocus
            type="text"
            id="lastname"
            name="Nom"
            errors={errors.lastname}
            value={formValues.lastname}
            onChange={handleChangeValue}
          />
          {errors.lastname?.length > 0 && (
            <ErrorMessage errors={errors.lastname} />
          )}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="firstname" required>
            Prénom
          </Label>
          <InputText
            type="text"
            id="firstname"
            name="Prénom"
            errors={errors.firstname}
            value={formValues.firstname}
            onChange={handleChangeValue}
          />
          {errors.firstname?.length > 0 && (
            <ErrorMessage errors={errors.firstname} />
          )}
        </FormGroup>
      </div>
      <FormGroup>
        <Label htmlFor="email" required>
          E-mail
        </Label>
        <InputText
          type="text"
          id="email"
          name="E-mail"
          errors={errors.email}
          value={formValues.email}
          onChange={handleChangeValue}
        />
        {errors.email?.length > 0 && <ErrorMessage errors={errors.email} />}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="object">Objet</Label>
        <InputText
          type="text"
          id="object"
          name="Objet"
          value={formValues.object}
          onChange={handleChangeValue}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message" required>
          Message
        </Label>
        <textarea
          name="Message"
          id="message"
          value={formValues.message}
          onChange={handleChangeValue}
          className={`flex h-56 resize-none items-center gap-3 rounded-lg px-6 py-2.5 text-lg ring ring-emerald-950 focus:outline-none sm:h-28 ${errors.message?.length > 0 ? "bg-red-50 ring-red-700" : "focus:bg-emerald-200/10 focus:ring-emerald-700"}`}
        />
        {errors.message?.length > 0 && <ErrorMessage errors={errors.message} />}
      </FormGroup>
      <Button type="submit" size="lg" width="full" className="mt-6">
        Envoyer
      </Button>
    </form>
  );
}
