import { blogs } from "@/lib/constant";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="min-h-screen py-20 px-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-5xl mx-auto my-6">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <article className="prose dark:prose-invert">
          <p>{blog.summary}</p>
        </article>
      </div>
    </div>
  );
}
