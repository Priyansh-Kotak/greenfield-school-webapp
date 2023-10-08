import "../globals.css";

import Providers from "@/contexts";
import { locales } from "@/i18n";
import { PageProps } from "@/types";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Greenfield School",
  description: "Generated by create next app",
};

const satoshiFont = localFont({
  src: [
    {
      path: "../../../public/fonts/Satoshi-Variable.ttf",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Satoshi-VariableItalic.ttf",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

export const generateStaticParams = () => {
  return locales.map(locale => ({ locale }));
};

type Props = PageProps & {
  children: React.ReactNode;
};
const LocaleLayout = async ({ children, params: { locale } }: Props) => {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${satoshiFont.variable} font-satoshi`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;