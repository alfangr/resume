import { blogs } from "@/lib/constant";
import Link from "next/link";

export default function BlogListPage() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center my-12">
        📚 All Blog Posts
      </h2>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="block bg-gray-50 dark:bg-zinc-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">
              {blog.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">
              {blog.summary}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
