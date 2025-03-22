export function WebsiteCard({ link, name, logo }) {
  return (
    <a
      href={link}
      target="_blank"
      key={name}
      className="card relative flex w-46 items-center justify-center gap-2 rounded-lg border border-emerald-900/20 bg-zinc-50 p-4 focus:outline-none"
    >
      <div>
        <img src={logo} alt={`Logo ${name}`} className="w-6" />
      </div>
      <h4 className="font-medium">{name}</h4>
    </a>
  );
}
