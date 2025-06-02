import { blogs } from "@/lib/constant";
import Link from "next/link";

export default function Blogs() {
  return (
    <section id="blog" className="py-20 px-6 bg-gray-50 dark:bg-zinc-900">
      <h2 className="text-3xl font-bold text-center mb-10 text-zinc-800 dark:text-white">
        📚 Latest Blogs
      </h2>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="block bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">
              {blog.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              {blog.summary}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/blogs"
          className="inline-block px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
        >
          View All Blogs →
        </Link>
      </div>
    </section>
  );
}
