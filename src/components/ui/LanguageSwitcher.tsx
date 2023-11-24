"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@lib/next-ui";
import { useChangeLocale, useCurrentLocale } from "@locales/client";

import type { Locale } from "@/src/locales";
import useResponsiveScreen from "@hooks/useResponsiveScreen";
import type { FC } from "react";
import { useTransition } from "react";
import { IoLanguage } from "react-icons/io5";

const locales = [
  { localeCode: "en", localeName: "English" },
  { localeCode: "hi", localeName: "Hindi" },
  { localeCode: "ta", localeName: "Tamil" },
  { localeCode: "te", localeName: "Telugu" },
] as const;

const LanguageSwitcher: FC = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const [isPending, startTransition] = useTransition();

  const screen = useResponsiveScreen();

  const handleLangChange = (locale: Locale): void => {
    startTransition(() => {
      changeLocale(locale);
    });
  };

  const currentLocaleName = locales.find(
    ({ localeCode }) => localeCode === locale,
  );
  if (currentLocaleName === undefined) throw new Error("Invalid locale code");

  return (
    <Dropdown>
      <DropdownTrigger>
        {screen === "sm" ? (
          <Button
            color="primary"
            variant="bordered"
            isDisabled={isPending}
            size="sm"
            isIconOnly
          >
            <IoLanguage className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            color="primary"
            variant="bordered"
            startContent={<IoLanguage className="h-5 w-5" />}
            isDisabled={isPending}
            className="font-semibold"
          >
            {currentLocaleName.localeName}
          </Button>
        )}
      </DropdownTrigger>

      <DropdownMenu aria-label="Static Actions" className="text-center">
        {locales.map(({ localeCode, localeName }) => (
          <DropdownItem
            key={localeCode}
            onClick={handleLangChange.bind(null, localeCode)}
          >
            {localeName}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
