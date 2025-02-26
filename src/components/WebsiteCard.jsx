export function WebsiteCard({ link, name, logo }) {
  return (
    <a
      href={link}
      target="_blank"
      key={name}
      className="flex h-[105px] w-[150px] flex-col items-center justify-center gap-2 rounded-lg bg-emerald-700/10 p-4 shadow-md ring-emerald-700/80 hover:ring focus:ring-2 focus:outline-none"
    >
      <div className="">
        <img src={logo} alt={`Logo ${name}`} className="w-10" />
      </div>
      <h4 className="font-semibold">{name}</h4>
    </a>
  );
}
