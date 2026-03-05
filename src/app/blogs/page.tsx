"use client";

import { blogs } from "@/data/blogs";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLanguage } from "@/providers/language-provider";

export default function BlogListPage() {
  const t = useTranslations("Blogs.page");
  const { language } = useLanguage();

  return (
    <section className="py-20 px-6 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center my-12">
        {t("title")}
      </h2>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => {
          const title = (language === "id" && blog.id_content) ? blog.id_content.title : blog.title;
          const summary = (language === "id" && blog.id_content) ? blog.id_content.summary : blog.summary;
          
          return (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="block bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">
                {summary}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
