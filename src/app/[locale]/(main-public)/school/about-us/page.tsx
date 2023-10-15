import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { getScopedI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

const AboutPage: FC<NextPageProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  const t = await getScopedI18n("Pages.school.sub-links.about");

  return (
    <ArticlePage linkType="school" selected={{ translationKey: "about" }}>
      <SectionHeading id="about-us">{t("title")}</SectionHeading>
      <div className="space-y-4">
        <p className="text-justify">{t("content.para-1")}</p>
        <p className="text-justify">{t("content.para-2")}</p>
      </div>
    </ArticlePage>
  );
};

export default AboutPage;
