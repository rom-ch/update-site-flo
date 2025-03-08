export function NavItem({ name, href, setIsSidebarOpen }) {
  return (
    <li className="text-center sm:text-start">
      <a
        onClick={() => setIsSidebarOpen(false)}
        className="block py-4 pr-8 pl-10 font-medium text-gray-700 decoration-emerald-950 underline-offset-4 transition-colors duration-100 hover:text-emerald-950 hover:underline lg:px-4 lg:py-3"
        href={href}
      >
        {name}
      </a>
    </li>
  );
}
