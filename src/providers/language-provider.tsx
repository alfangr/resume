"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import idMessages from "@/messages/id.json";
import enMessages from "@/messages/en.json";

type Language = "id" | "en";

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
    const [language, setLanguageState] = useState<Language>("id");
    const [messages, setMessages] = useState<any>(idMessages);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const stored = window.localStorage.getItem("language");
        if (stored === "id" || stored === "en") {
            setLanguageState(stored);
            setMessages(stored === "id" ? idMessages : enMessages);
        }
    }, []);

    const setLanguage = (value: Language) => {
        setLanguageState(value);
        setMessages(value === "id" ? idMessages : enMessages);
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
