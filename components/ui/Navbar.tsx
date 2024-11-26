"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex gap-x-5 text-[14px]">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className={`${
                pathname === link.href ? "text-zinc-900" : "text-zinc-400"
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
