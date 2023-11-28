import DashboardPageInDevelopment from "@/src/app/[locale]/dashboard/_components/DashboardPageInDevelopment";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";

const AttendancePage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return <DashboardPageInDevelopment />;
};

export default AttendancePage;
