import "../globals.css";

import Providers from "@/contexts";
import { locales } from "@/i18n";
import { PageProps } from "@/types";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Greenfield School",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

type Props = PageProps & {
  children: React.ReactNode;
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
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
