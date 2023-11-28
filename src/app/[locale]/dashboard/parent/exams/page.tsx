import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import OptionsPage from "../../_components/OptionsPage";
import PARENT_DRAWER_ITEMS from "../_components/ParentDrawer/drawer-items";

const ExamOptionsPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const options = PARENT_DRAWER_ITEMS.find(({ title }) => title === "Exams")!;

  return (
    <OptionsPage
      title="Exams Options Page"
      options={"subItems" in options ? options.subItems : []}
    />
  );
};

export default ExamOptionsPage;
