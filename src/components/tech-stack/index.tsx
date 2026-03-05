"use client";

import StackIcon from "tech-stack-icons";
import { useTranslations } from "next-intl";
import { techCategories } from "@/data/tech-stack";
import SectionHeader from "@/components/ui/section-header";

export default function TechStack() {
  const t = useTranslations("TechStack");

  return (
    <section
      id="tech-stack"
      className="py-20 px-6 bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label={t("label")}
          title={t("title")}
          description={t("description")}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {techCategories.map((cat) => (
            <div
              key={cat.titleKey}
              className="bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                  {t(cat.titleKey)}
                </h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                  {t("toolsCounter", { count: cat.items.length })}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map(({ icon, text }) => (
                  <div
                    key={text}
                    className="inline-flex items-center gap-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-200"
                  >
                    <StackIcon name={icon} className="h-4 w-auto" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
