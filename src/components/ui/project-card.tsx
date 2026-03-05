import Link from "next/link";
import type { Project } from "@/types";
import { truncateText } from "@/utils/text";
import { PROJECT_TEXT_LIMIT } from "@/data/projects";
import { useLanguage } from "@/providers/language-provider";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { language } = useLanguage();

    const title = (language === "id" && project.id_content) ? project.id_content.title : project.title;
    const description = (language === "id" && project.id_content) ? project.id_content.description : project.description;

    return (
        <Link href={`/projects/${project.slug}`}>
            <div className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all cursor-pointer h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                    {truncateText(description, PROJECT_TEXT_LIMIT)}
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
