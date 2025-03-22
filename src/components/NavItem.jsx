export function NavItem({ name, href, setIsSidebarOpen }) {
  return (
    <li className="pr-8 pl-10 text-center sm:text-start lg:px-4">
      <a
        onClick={() => setIsSidebarOpen(false)}
        className="relative block py-4 font-medium text-gray-700 after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-emerald-800 after:transition-[width] after:duration-300 hover:after:w-full focus:outline-none lg:py-3"
        href={href}
      >
        {name}
      </a>
    </li>
  );
}
