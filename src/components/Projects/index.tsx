const projects = [
  {
    title: "Learning Management System",
    description:
      "A web-based platform for online courses with modules, quizzes, user roles, and progress tracking.",
    tech: ["Laravel", "React.js", "MySQL"],
  },
  {
    title: "Event/Webinar Management System",
    description:
      "Multi-conference system with registration, payment, paper submission, and reviewer dashboards.",
    tech: ["Laravel", "Next.js", "Midtrans"],
  },
  {
    title: "Koperasi E-Commerce Platform",
    description:
      "Custom e-commerce solution for cooperatives including product, transaction, and financial modules.",
    tech: ["Laravel", "React Native", "MySQL"],
  },
  {
    title: "Job Platform",
    description:
      "A job board platform with company profiles, applicant dashboards, and dynamic job listings.",
    tech: ["Next.js", "Laravel", "REST API"],
  },
  {
    title: "Company Landing Pages",
    description:
      "Several high-performing landing pages built for businesses to showcase products or services.",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-3xl font-bold text-center mb-12">🧠 My Projects</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
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
        ))}
      </div>
    </section>
  );
}
