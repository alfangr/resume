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
    <section id="tech-stack" className="py-20 px-6 bg-gray-50 dark:bg-zinc-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-zinc-800 dark:text-white">
        🚀 My Tech Stack
      </h2>

      <div className="space-y-5 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="flex flex-col items-center justify-center mt-8"
          >
            {/* <h3 className="text-xl font-semibold mb-4 text-zinc-700 dark:text-zinc-200">
              {cat.title}
            </h3> */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {cat.items.map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 bg-white dark:bg-zinc-800 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-transform hover:scale-105 text-sm font-medium text-gray-800 dark:text-gray-200"
                >
                  <StackIcon name={icon} className="h-5 w-auto" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
