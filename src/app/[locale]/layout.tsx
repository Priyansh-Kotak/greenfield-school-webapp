import "../globals.css";

import { locales } from "@/i18n";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import React from "react";
import Provider from "../_trpc/Provider";

export const metadata: Metadata = {
    title: "Greenfield School",
    description: "Generated by create next app",
};

export function generateStaticParams() {
    return locales.map(locale => ({ locale }));
}

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};
export default async function LocaleLayout({
    children,
    params: { locale },
}: Props) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Provider>{children}</Provider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
