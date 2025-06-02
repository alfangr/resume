export default function Footer() {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  const yearText =
    currentYear === startYear
      ? `${startYear}`
      : `${startYear} - ${currentYear}`;

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800 py-6">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-gray-600 dark:text-zinc-400 flex items-center justify-center gap-1">
        <span>© {yearText} alfangr.dev — Built with ❤️ by alfangr.dev.</span>
      </div>
    </footer>
  );
}
