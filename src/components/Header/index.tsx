"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "../theme-toggle";
import { useLanguage } from "@/providers/language-provider";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const tNav = useTranslations("Header.nav");

  const isHomePage = pathname === "/";

  const resolveHref = (href: string) => {
    return isHomePage ? href : `/${href}`;
  };

  const navItems = [
    { label: tNav("home"), href: "#home" },
    { label: tNav("techStack"), href: "#tech-stack" },
    { label: tNav("projects"), href: "#projects" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl px-6 py-3 bg-white/70 dark:bg-black/70 backdrop-blur-md rounded-full shadow-md flex items-center justify-between">
      <span className="text-lg font-semibold text-zinc-800 dark:text-white">
        {siteConfig.name}
      </span>

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

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 rounded-full px-1 py-0.5 text-[11px] font-medium">
          <button
            type="button"
            className={`px-2 py-0.5 rounded-full ${language === "id"
                ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
                : "text-zinc-500 dark:text-zinc-400"
              }`}
            onClick={() => setLanguage("id")}
          >
            ID
          </button>
          <button
            type="button"
            className={`px-2 py-0.5 rounded-full ${language === "en"
                ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100"
                : "text-zinc-500 dark:text-zinc-400"
              }`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
        </div>
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
