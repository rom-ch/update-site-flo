import { useEffect, useState } from "react";
import waves from "../assets/form-wave.svg";
import {
  checkEmail,
  checkFirstName,
  checkLastName,
  checkMessage,
} from "../utils/validators";
import { Button } from "./Button";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export function ContactForm({ onClose, setIsModalFormSuccessOpen }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  let lastNameErrors = isAfterFirstSubmit ? checkLastName(lastName) : [];
  const firstNameErrors = isAfterFirstSubmit ? checkFirstName(firstName) : [];
  const emailErrors = isAfterFirstSubmit ? checkEmail(email) : [];
  const messageErrors = isAfterFirstSubmit ? checkMessage(message) : [];

  function handleSubmit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const lastNameResults = checkLastName(lastName);
    const firstNameResults = checkFirstName(firstName);
    const emailResults = checkEmail(email);
    const messageResults = checkMessage(message);

    if (
      lastNameResults.length === 0 &&
      firstNameResults.length === 0 &&
      emailResults.length === 0 &&
      messageResults.length === 0
    ) {
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

      setLastName("");
      setFirstName("");
      setEmail("");
      setMessage("");
      setIsAfterFirstSubmit(false);

      onClose();
      setIsModalFormSuccessOpen(true);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto w-80 overflow-hidden rounded-3xl bg-zinc-50 shadow-xl sm:w-[500px]">
      <div className="relative h-28 rounded-bl-4xl">
        <img src={waves} alt="#" className="h-full w-full" />
      </div>
      <div className="rounded-tr-4xl bg-zinc-50 px-8 py-4">
        <h2 className="text-center text-2xl font-semibold text-gray-900">
          Me contacter
        </h2>
        <form
          className="mt-8"
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-8">
            <div className="relative md:flex-1">
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                id="lastName"
                name="Nom"
                placeholder="Nom"
                className={`peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent focus:border-emerald-600 focus:outline-none ${lastNameErrors.length > 0 ? "border-red-600" : ""}`}
              />
              <label
                htmlFor="lastName"
                className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-400"
              >
                Nom
              </label>
              {lastNameErrors.length > 0 && (
                <div className="mt-1 text-sm text-red-600">
                  {lastNameErrors.join(". ")}
                </div>
              )}
            </div>
            <div className="relative mt-8 md:mt-0 md:flex-1">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                id="firstName"
                name="Prénom"
                placeholder="Prénom"
                className={`peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent focus:border-emerald-600 focus:outline-none ${firstNameErrors.length > 0 ? "border-red-600" : ""}`}
              />
              <label
                htmlFor="firstName"
                className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-400"
              >
                Prénom
              </label>
              {firstNameErrors.length > 0 && (
                <div className="mt-1 text-sm text-red-600">
                  {firstNameErrors.join(". ")}
                </div>
              )}
            </div>
          </div>
          <div className="relative mt-8">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="E-mail"
              placeholder="E-mail"
              className={`peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent focus:border-emerald-600 focus:outline-none ${emailErrors.length > 0 ? "border-red-600" : ""}`}
            />
            <label
              htmlFor="email"
              className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-400"
            >
              E-mail
            </label>
            {emailErrors.length > 0 && (
              <div className="mt-1 text-sm text-red-600">
                {emailErrors.join(". ")}
              </div>
            )}
          </div>

          <div className="relative mt-10">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Votre message..."
              name="Message"
              className={`peer h-28 w-full resize-none border-2 border-gray-300 p-2 placeholder-transparent focus:border-emerald-600 focus:outline-none ${messageErrors.length > 0 ? "border-red-600" : ""}`}
            />
            <label className="absolute -top-6 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-6 peer-focus:left-0 peer-focus:text-sm peer-focus:text-gray-400">
              Votre message...
            </label>
            {messageErrors.length > 0 && (
              <div className="mt-1 text-sm text-red-600">
                {messageErrors.join(". ")}
              </div>
            )}
          </div>

          <Button type="submit" width="full" className="mt-6">
            Envoyer
          </Button>
        </form>
      </div>
    </div>
  );
}
