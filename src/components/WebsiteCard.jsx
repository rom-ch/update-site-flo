export function WebsiteCard({ link, name, logo }) {
  return (
    <a
      href={link}
      target="_blank"
      key={name}
      className="flex w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-emerald-900/20 p-4 shadow-sm hover:bg-emerald-700/10 sm:w-auto"
    >
      <div>
        <img src={logo} alt={`Logo ${name}`} className="w-6" />
      </div>
      <h4 className="font-medium">{name}</h4>
    </a>
  );
}
