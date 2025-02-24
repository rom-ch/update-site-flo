import { Button } from "./Button";

export function FormSuccessMessage({ onClose }) {
  return (
    <div className="bg-zinc-50 p-8 rounded-xl w-64 flex flex-col gap-6 items-center">
      <div className="font-semibold text-xl">Formulaire envoyé.</div>
      <Button width="full" onClick={onClose}>Fermer</Button>
    </div>
  );
}
