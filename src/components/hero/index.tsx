"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslations } from "next-intl";
import { socialLinks } from "@/data/social-links";
import { siteConfig } from "@/data/site";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  email: MdEmail,
};

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="home" className="pb-20 pt-32 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
      <p className="text-lg max-w-2xl mx-auto mb-6">{t("subtitle")}</p>

      <div className="mt-8">
        <a
          href={siteConfig.cvPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition mb-4"
        >
          {t("downloadCv")}
        </a>
        <p className="text-base font-medium text-gray-500 dark:text-gray-400 mb-4">
          {t("cta")}
        </p>
        <div className="flex justify-center gap-5 text-2xl">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.icon === "email" ? undefined : "_blank"}
                rel={link.icon === "email" ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                className={`${link.hoverColor} transition`}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
