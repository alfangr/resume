import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import BlogDetailContent from "@/app/blogs/[slug]/blog-detail-content";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return <BlogDetailContent blog={blog} />;
}
