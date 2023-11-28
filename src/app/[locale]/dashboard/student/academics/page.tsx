import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import OptionsPage from "../../_components/OptionsPage";
import STUDENT_DRAWER_ITEMS from "../_components/StudentDrawer/drawer-items";
import { setStaticParamsLocale } from "next-international/server";

const AcademicsOptionsPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const options = STUDENT_DRAWER_ITEMS.find(
    ({ title }) => title === "Academics",
  )!;

  return (
    <OptionsPage
      title="Academics Options Page"
      options={"subItems" in options ? options.subItems : []}
    />
  );
};

export default AcademicsOptionsPage;
