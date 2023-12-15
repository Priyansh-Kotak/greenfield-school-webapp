import DashboardPageInDevelopment from "../../../_components/DashboardPageInDevelopment";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import { Table } from "@nextui-org/react";
import { setStaticParamsLocale } from "next-international/server";

const attendance = [
  {
    subjectName: "Mathematics",
    teacherName: "Mr. John Doe",
    totalClass: 20,
    attendedClass: 15,
    detailed: [
      {
        date: "2021-09-01",
        status: "Present",
      },
    ],
  },
];

const AttendancePage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <div>
      <h1>Your Attendance details</h1>
    </div>
  );
};

export default AttendancePage;
