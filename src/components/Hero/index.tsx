import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section id="home" className="pb-20 pt-32 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Hi, I’m Alfan 👋</h1>
      <p className="text-lg max-w-2xl mx-auto mb-6">
        A fullstack developer specializing in Laravel, React Native, and
        Next.js. I build structured, documented, and maintainable digital
        systems.
      </p>

      <div className="mt-8">
        <p className="text-base font-medium text-gray-500 dark:text-gray-400 mb-4">
          Let’s connect and build something awesome together 🚀
        </p>
        <div className="flex justify-center gap-5 text-2xl">
          <a
            href="https://github.com/alfangr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/alfangr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/alfangr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:alfangr05@gmail.com"
            aria-label="Email"
            className="hover:text-red-500 transition"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </section>
  );
}
