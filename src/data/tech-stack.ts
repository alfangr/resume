import type { TechCategory } from "@/types";

export const techCategories: TechCategory[] = [
    {
        titleKey: "categories.frontend",
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
        titleKey: "categories.backend",
        items: [
            { icon: "wordpress", text: "Wordpress" },
            { icon: "laravel", text: "Laravel" },
            { icon: "codeigniter", text: "CodeIgniter" },
            { icon: "mysql", text: "MySQL" },
            { icon: "heroku", text: "Heroku" },
        ],
    },
    {
        titleKey: "categories.tools",
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
        titleKey: "categories.workflow",
        items: [
            { icon: "jira", text: "Jira" },
            { icon: "slack", text: "Slack" },
            { icon: "atlassian", text: "Atlassian" },
        ],
    },
];
