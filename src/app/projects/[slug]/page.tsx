import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailContent from "@/app/projects/[slug]/project-detail-content";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectDetailContent project={project} />;
}
