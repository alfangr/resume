"use client";

import type { Project } from "@/types";
import TechBadge from "@/components/ui/tech-badge";
import { useLanguage } from "@/providers/language-provider";
import { useTranslations } from "next-intl";

export default function ProjectDetailContent({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = useTranslations("Projects.page");

  const title = (language === "id" && project.id_content) ? project.id_content.title : project.title;
  const description = (language === "id" && project.id_content) ? project.id_content.description : project.description;
  const role = (language === "id" && project.id_content) ? project.id_content.role : project.role;
  const features = (language === "id" && project.id_content) ? project.id_content.features : project.features;
  const contributions = (language === "id" && project.id_content) ? project.id_content.contributions : project.contributions;

  return (
    <div className="min-h-screen py-20 px-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-5xl mx-auto mt-6">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-6 text-zinc-700 dark:text-zinc-300">
          {description}
        </p>

        <div className="mb-4">
          <h3 className="font-semibold">{t("role")}</h3>
          <p>{role}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">{t("techStack")}</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.tech.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">{t("features")}</h3>
          <ul className="list-disc ml-6 mt-1">
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {contributions && contributions.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold">{t("contributions")}</h3>
            <ul className="list-disc ml-6 mt-1">
              {contributions.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-4 mt-6">
          {project.demoUrl && typeof project.demoUrl === 'object' && (
            <>
              {project.demoUrl.playStore && (
                <a
                  href={project.demoUrl.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {t("playStore")}
                </a>
              )}
              {project.demoUrl.appStore && (
                <a
                  href={project.demoUrl.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {t("appStore")}
                </a>
              )}
            </>
          )}
          {project.demoUrl && typeof project.demoUrl === 'string' && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {t("liveDemo")}
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {t("sourceCode")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
