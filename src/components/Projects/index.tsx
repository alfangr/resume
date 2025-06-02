import { characterLimit, projects } from "@/lib/constant";
import Link from "next/link";

export default function Projects() {
  const projectTextLimit = characterLimit.project;

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-black text-black dark:text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-12">📂 My Projects</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {project.description.length > projectTextLimit
                  ? project.description.slice(0, projectTextLimit).trim() +
                    "..."
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

      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="inline-block px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
