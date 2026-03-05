"use client";

import type { Blog } from "@/types";
import { useLanguage } from "@/providers/language-provider";

export default function BlogDetailContent({ blog }: { blog: Blog }) {
  const { language } = useLanguage();

  const title = (language === "id" && blog.id_content) ? blog.id_content.title : blog.title;
  const summary = (language === "id" && blog.id_content) ? blog.id_content.summary : blog.summary;

  return (
    <div className="min-h-screen py-20 px-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-5xl mx-auto my-6">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <article className="prose dark:prose-invert">
          <p>{summary}</p>
        </article>
      </div>
    </div>
  );
}
