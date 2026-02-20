import StackIcon from "tech-stack-icons";

const categories = [
  {
    title: "Frontend",
    items: [
      { icon: "typescript", text: "Typescript" },
      { icon: "reactjs", text: "ReactJS" },
      { icon: "reactjs", text: "React Native" },
      { icon: "nextjs2", text: "Next.js" },
      { icon: "gatsby", text: "Gatsby" },
      { icon: "tailwindcss", text: "TailwindCSS" },
      { icon: "bootstrap5", text: "Bootstrap 5" },
      { icon: "netlify", text: "Netlify" },
      { icon: "firebase", text: "Firebase" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: "wordpress", text: "Wordpress" },
      { icon: "laravel", text: "Laravel" },
      { icon: "codeigniter", text: "CodeIgniter" },
      { icon: "mysql", text: "MySQL" },
      { icon: "heroku", text: "Heroku" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: "git", text: "Git" },
      { icon: "docker", text: "Docker" },
      { icon: "github", text: "GitHub" },
      { icon: "gitlab", text: "GitLab" },
      { icon: "bitbucket", text: "Bitbucket" },
      { icon: "postman", text: "Postman" },
      { icon: "insomnia", text: "Insomnia" },
      { icon: "eslint", text: "ESLint" },
      { icon: "prettier", text: "Prettier" },
      { icon: "apache", text: "Apache" },
      { icon: "ubuntu", text: "Ubuntu" },
      { icon: "ec2", text: "AWS - EC2" },
      { icon: "digitalocean", text: "DigitalOcean" },
    ],
  },
  {
    title: "Workflow",
    items: [
      { icon: "jira", text: "Jira" },
      { icon: "slack", text: "Slack" },
      { icon: "atlassian", text: "Atlassian" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-20 px-6 bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 mb-2">
            Tech Stack
          </p>
          <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
            Tools I work with
          </h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Kombinasi teknologi yang biasa saya gunakan untuk membangun produk
            dari frontend, backend, sampai infrastruktur.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white dark:bg-zinc-900/60 border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                  {cat.title}
                </h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                  {cat.items.length} tools
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map(({ icon, text }) => (
                  <div
                    key={text}
                    className="inline-flex items-center gap-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-200"
                  >
                    <StackIcon name={icon} className="h-4 w-auto" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
