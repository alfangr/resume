"use client";

import { createContext, useContext, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import idMessages from "@/messages/id.json";
import enMessages from "@/messages/en.json";

type Language = "id" | "en";
type Messages = typeof idMessages;

const messagesByLanguage: Record<Language, Messages> = {
    id: idMessages,
    en: enMessages,
};

interface LanguageContextValue {
    language: Language;
    setLanguage: (value: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
    undefined,
);

export function LanguageProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [language, setLanguageState] = useState<Language>(() => {
        if (typeof window === "undefined") return "id";
        const stored = window.localStorage.getItem("language");
        return stored === "id" || stored === "en" ? stored : "id";
    });

    const messages = messagesByLanguage[language];

    const setLanguage = (value: Language) => {
        setLanguageState(value);
        if (typeof window !== "undefined") {
            window.localStorage.setItem("language", value);
            document.documentElement.lang = value;
        }
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            <NextIntlClientProvider
                key={language}
                locale={language}
                messages={messages}
                timeZone="Asia/Jakarta"
            >
                {children}
            </NextIntlClientProvider>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
