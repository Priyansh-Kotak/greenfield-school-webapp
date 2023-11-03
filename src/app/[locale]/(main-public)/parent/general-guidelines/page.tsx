import ArticleHeading from "@components/ArticleHeading";
import ArticleList from "@/src/components/ArticleList";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import GENERAL_GUIDELINES_DATA from "./data";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";

const GeneralGuidelinesPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="parent" selected={{ translationKey: "guidelines" }}>
      <ArticleHeading>General guidelines</ArticleHeading>
      <p>
        The school reserves the right to expel students whose diligence or
        progress in studies is considered unsatisfactory or whose conduct is
        harmful to the other students. Immorality, insubordination or contempt
        of authority and causing damage to school property are always sufficient
        reasons for punitive action to be taken immediately by the school
        authority.
      </p>
      <ArticleList list={GENERAL_GUIDELINES_DATA} />
    </ArticlePage>
  );
};

export default GeneralGuidelinesPage;
