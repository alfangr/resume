"use client";

import Link from "next/link";
import { projects, characterLimit, PROJECTS_PER_PAGE } from "@/lib/constant";
import Pagination from "@/components/pagination/pagination";
import { useState, useEffect } from "react";

export default function ProjectsPage() {
  const projectTextLimit = characterLimit.project;

  // state current page
  const [page, setPage] = useState(1);

  // ambil page dari URL (browser)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = parseInt(params.get("page") || "1");
    setPage(p);
  }, []);

  const sortedProjects = projects.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const totalPages = Math.ceil(sortedProjects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = sortedProjects.slice(
    (page - 1) * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE
  );

  // fungsi pindah halaman: update URL tanpa reload
  function goToPage(newPage: number) {
    setPage(newPage);
    const url = new URL(window.location.href);
    url.searchParams.set("page", newPage.toString());
    window.history.pushState({}, "", url.toString());
  }

  return (
    <main className="min-h-screen py-20 px-6 bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl font-bold text-center my-12">📂 All Projects</h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {paginatedProjects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {project.description.length > projectTextLimit
                  ? project.description.slice(0, projectTextLimit).trim() + "..."
                  : project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
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
