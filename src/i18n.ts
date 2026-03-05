import {getRequestConfig} from "next-intl/server";

export const locales = ["id", "en"] as const;
export const localeNames: Record<(typeof locales)[number], string> = {
  id: "Indonesia",
  en: "English",
};
export const defaultLocale = "en";

export default getRequestConfig(async ({locale}) => {
  const currentLocale = locales.includes(locale as (typeof locales)[number])
    ? (locale as (typeof locales)[number])
    : defaultLocale;

  const messages = (await import(`./messages/${currentLocale}.json`)).default;

  return {
    locale: currentLocale,
    messages,
    timeZone: "Asia/Jakarta",
  };
});
