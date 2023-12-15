import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { PiExamLight, PiStudentBold } from "react-icons/pi";

import type { FC } from "react";
import { MdWorkOutline } from "react-icons/md";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import { truncateStr } from "@/src/utils";

const greenfieldNews = [
  {
    title: "Greenfield School is now open",
    date: "2021-09-01",
    description:
      "Greenfield School is now open for the 2021-2022 school year. We are excited to welcome all of our students back to campus. Please remember to wear your mask and wash your hands frequently.",
  },
  {
    title: "Greenfield School is now open",
    date: "2021-09-01",
    description:
      "Greenfield School is now open for the 2021-2022 school year. We are excited to welcome all of our students back to campus. Please remember to wear your mask and wash your hands frequently.",
  },
  {
    title: "Greenfield School is now open",
    date: "2021-09-01",
    description:
      "Greenfield School is now open for the 2021-2022 school year. We are excited to welcome all of our students back to campus. Please remember to wear your mask and wash your hands frequently.",
  },
] as const;

const StudentDashboardPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <div>
      <h1>Dashboard</h1>
      <section className="flex gap-4">
        <Card>
          <CardHeader>
            <PiStudentBold />
          </CardHeader>
          <CardBody>Attendance</CardBody>
          <CardFooter>
            <span>60%</span>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <MdWorkOutline />
          </CardHeader>
          <CardBody>Attendance</CardBody>
          <CardFooter>
            <span>60%</span>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <PiExamLight />
          </CardHeader>
          <CardBody>Attendance</CardBody>
          <CardFooter>
            <span>60%</span>
          </CardFooter>
        </Card>
      </section>
      <section>
        <h2>What&apos;s happening in Greenfield</h2>
        <ul className="grid grid-cols-3 gap-4">
          {greenfieldNews.map(news => (
            <li key={news.title}>
              <Card>
                <CardHeader>{news.title}</CardHeader>
                <CardBody className="text-justify">{news.description}</CardBody>
                <CardFooter>{news.date}</CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Reminders and stuff</h2>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            quos accusantium, quidem .
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            quos accusantium, quidem .
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            quos accusantium, quidem .
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            quos accusantium, quidem .
          </li>
        </ul>
      </section>
    </div>
  );
};

export default StudentDashboardPage;
