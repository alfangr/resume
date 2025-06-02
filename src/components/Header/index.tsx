"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../theme-toggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const resolveHref = (href: string) => {
    return isHomePage ? href : `/${href}`;
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl px-6 py-3 bg-white/70 dark:bg-black/70 backdrop-blur-md rounded-full shadow-md flex items-center justify-between">
      {/* Logo / Name */}
      <span className="text-lg font-semibold text-zinc-800 dark:text-white">
        alfangr.dev
      </span>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={resolveHref(item.href)}
            scroll={true}
            className="text-zinc-800 dark:text-zinc-100 hover:underline"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Theme Toggle + Hamburger */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button
          className="md:hidden text-zinc-800 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FiX className="w-5 h-5" />
          ) : (
            <FiMenu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full mt-2 right-0 w-full bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-4 md:hidden">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={resolveHref(item.href)}
                scroll={true}
                onClick={() => setMenuOpen(false)}
                className="text-zinc-800 dark:text-zinc-100 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
