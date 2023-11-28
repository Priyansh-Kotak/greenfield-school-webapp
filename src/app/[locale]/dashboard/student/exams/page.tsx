import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import OptionsPage from "../../_components/OptionsPage";
import STUDENT_DRAWER_ITEMS from "../_components/StudentDrawer/drawer-items";

const ExamOptionsPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const options = STUDENT_DRAWER_ITEMS.find(({ title }) => title === "Exams")!;

  return (
    <OptionsPage
      title="Exams Options Page"
      options={"subItems" in options ? options.subItems : []}
    />
  );
};

export default ExamOptionsPage;
