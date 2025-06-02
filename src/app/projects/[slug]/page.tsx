import { projects } from "@/lib/constant";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen py-20 px-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-5xl mx-auto mt-6">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="mb-6 text-zinc-700 dark:text-zinc-300">
          {project.description}
        </p>

        <div className="mb-4">
          <h3 className="font-semibold">🧑‍💻 Role:</h3>
          <p>{project.role}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">🧰 Tech Stack:</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">🚀 Features:</h3>
          <ul className="list-disc ml-6 mt-1">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 mt-6">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              🔗 Live Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              🧾 Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
