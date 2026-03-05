"use client";

import { projects, PROJECTS_PER_PAGE } from "@/data/projects";
import { sortByDateDesc } from "@/utils/sort";
import Pagination from "@/components/pagination";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import ProjectCard from "@/components/ui/project-card";

export default function ProjectsPage() {
  const t = useTranslations("Projects.page");

  const [page, setPage] = useState(1);

  // Read initial page from URL query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = parseInt(params.get("page") || "1");
    setPage(p);
  }, []);

  const sortedProjects = sortByDateDesc(projects, "createdAt");

  const totalPages = Math.ceil(sortedProjects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = sortedProjects.slice(
    (page - 1) * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE
  );

  // Update page state and URL without full reload
  function goToPage(newPage: number) {
    setPage(newPage);
    const url = new URL(window.location.href);
    url.searchParams.set("page", newPage.toString());
    window.history.pushState({}, "", url.toString());
  }

  return (
    <main className="min-h-screen py-20 px-6 bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl font-bold text-center my-12">
        {t("title")}
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {paginatedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        basePath="/projects"
        onPageChange={goToPage}
      />
    </main>
  );
}
