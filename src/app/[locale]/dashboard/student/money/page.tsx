import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import OptionsPage from "../../_components/OptionsPage";
import STUDENT_DRAWER_ITEMS from "../_components/StudentDrawer/drawer-items";

const MoneyOptionsPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const options = STUDENT_DRAWER_ITEMS.find(({ title }) => title === "Money")!;

  return (
    <OptionsPage
      title="Money Options Page"
      options={"subItems" in options ? options.subItems : []}
    />
  );
};

export default MoneyOptionsPage;
