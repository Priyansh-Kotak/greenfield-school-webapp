import DashboardPageInDevelopment from "@/src/app/[locale]/dashboard/_components/DashboardPageInDevelopment";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";

const ClassMaterialPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return <DashboardPageInDevelopment />;
};

export default ClassMaterialPage;
