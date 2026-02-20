"use client";

import { useTheme } from "next-themes";

type ThemeValue = "light" | "dark" | "system";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const activeTheme: ThemeValue =
    theme === "light" || theme === "dark" || theme === "system"
      ? theme
      : "light";

  const handleToggle = () => {
    const order: ThemeValue[] = ["light", "dark", "system"];
    const currentIndex = order.indexOf(activeTheme);
    const nextTheme = order[(currentIndex + 1) % order.length];
    setTheme(nextTheme);
  };

  const label =
    activeTheme === "light"
      ? "Light theme"
      : activeTheme === "dark"
      ? "Dark theme"
      : "System theme";

  return (
    <button
      type="button"
      className="cursor-pointer bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf] hover:bg-hover-background active:bg-active-background rounded-md border border-button-border-color p-1.5 [transition:background_20ms_ease-in,_color_0.15s] flex items-center justify-center"
      title={label}
      aria-label={label}
      onClick={handleToggle}
    >
      {activeTheme === "light" && (
        <svg
          role="graphics-symbol"
          viewBox="0 0 15 15"
          width="15"
          height="15"
          fill="none"
          className="w-4 h-4"
        >
          <path
            d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      )}

      {activeTheme === "dark" && (
        <svg
          role="graphics-symbol"
          viewBox="0 0 24 24"
          width="15"
          height="15"
          fill="none"
          className="w-4 h-4"
        >
          <path
            d="M21 12.79C20.38 12.93 19.76 13 19.13 13C14.06 13 10 8.94 10 3.87C10 3.24 10.07 2.62 10.21 2C7.17 2.7 5 5.39 5 8.5C5 13.02 8.98 17 13.5 17C16.61 17 19.3 14.83 21 11.79V12.79Z"
            fill="currentColor"
          />
        </svg>
      )}

      {activeTheme === "system" && (
        <svg
          role="graphics-symbol"
          viewBox="0 0 24 24"
          width="15"
          height="15"
          fill="none"
          className="w-4 h-4"
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M3 15H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
