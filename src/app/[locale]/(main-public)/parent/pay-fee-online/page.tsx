import SectionHeading from "@/components/ui/SectionHeading";
import type { NextPageProps } from "@/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const CanteenRules: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  // const t = await getScopedI18n("Pages.student.sub-links.c-rules");
  return (
    <ArticlePage linkType="parent" selected={{ translationKey: "fee" }}>
      <SectionHeading>Online fees Portal</SectionHeading>
      <ul className="list-disc space-y-6">
        <li className="text-justify">Add text</li>
        <li className="text-justify">Add text</li>
        <li className="text-justify">Add text</li>
        <li className="text-justify">Add text</li>
        <li className="text-justify">Add text</li>
      </ul>
    </ArticlePage>
  );
};

export default CanteenRules;
