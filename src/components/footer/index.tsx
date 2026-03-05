"use client";

import { useTranslations } from "next-intl";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  const yearText =
    currentYear === siteConfig.startYear
      ? `${siteConfig.startYear}`
      : `${siteConfig.startYear} - ${currentYear}`;

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800 py-6">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-600 dark:text-zinc-400 flex items-center justify-center gap-1">
        <span>{t("text", { yearText })}</span>
      </div>
    </footer>
  );
}
