"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { sortByDateDesc } from "@/utils/sort";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/section-header";
import ProjectCard from "@/components/ui/project-card";

const PROJECT_DISPLAY_COUNT = 4;

export default function Projects() {
  const t = useTranslations("Projects.home");

  const sortedProjects = sortByDateDesc(projects, "createdAt");

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-black text-black dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label={t("label")}
          title={t("sectionTitle")}
          description={t("sectionDescription")}
        />

        <div className="grid md:grid-cols-2 gap-10">
          {sortedProjects.slice(0, PROJECT_DISPLAY_COUNT).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
