export function NavItem({ children, href, setIsMenuOpen }) {
  return (
    <li>
      <a
        className="block h-full w-full cursor-pointer rounded-md px-2 py-2 hover:bg-emerald-700/10 hover:text-black focus:ring-2 focus:ring-emerald-600/80 focus:outline-none"
        href={href}
        onClick={() => setIsMenuOpen(false)}
      >
        {children}
      </a>
    </li>
  );
}
