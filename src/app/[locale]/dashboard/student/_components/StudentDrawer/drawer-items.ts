import { BiHome, BiUserCircle } from "react-icons/bi";
import { LiaChalkboardTeacherSolid, LiaMoneyBillSolid } from "react-icons/lia";
import { PiExamLight, PiUserListBold } from "react-icons/pi";
import { TbLamp2, TbReportAnalytics } from "react-icons/tb";

import { createElement } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar2Check } from "react-icons/bs";
import { FaUserClock } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GoNumber } from "react-icons/go";
import { GrMoney } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { RiSettings2Line } from "react-icons/ri";

export default [
  {
    title: "Home",
    href: "/dashboard/student",
    icon: createElement(BiHome),
  },
  {
    title: "Academics",
    icon: createElement(TbLamp2),
    href: "/dashboard/student/academics",
    subItems: [
      {
        title: "Attendance",
        icon: createElement(FaUserClock),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/student/academics/attendance",
      },
      {
        title: "Timetable",
        icon: createElement(AiOutlineClockCircle),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/student/academics/timetable",
      },
      {
        title: "Class Material",
        icon: createElement(FiFolder),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/student/academics/class-material",
      },
      {
        title: "Academic Calendar",
        icon: createElement(BsCalendar2Check),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/student/academics/academic-calendar",
      },
      {
        title: "Home Work",
        icon: createElement(MdWorkOutline),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/student/academics/homework",
      },
      {
        title: "Teacher Info",
        icon: createElement(LiaChalkboardTeacherSolid),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/student/academics/teacher-info",
      },
    ],
  },
  {
    title: "Exams",
    icon: createElement(PiExamLight),
    href: "/dashboard/student/exams",
    subItems: [
      {
        title: "Schedule",
        icon: createElement(AiOutlineClockCircle),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/student/exams/schedule",
      },
      {
        title: "Marks",
        icon: createElement(GoNumber),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/student/exams/marks",
      },
      {
        title: "Report Card",
        icon: createElement(TbReportAnalytics),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/student/exams/report-card",
      },
    ],
  },
  {
    title: "Money",
    icon: createElement(LiaMoneyBillSolid),
    href: "/dashboard/student/money",
    subItems: [
      {
        title: "Fees",
        icon: createElement(GiTakeMyMoney),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/student/money/fees",
      },
      {
        title: "Fines",
        icon: createElement(GrMoney),
        href: "/dashboard/student/money/fines",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    title: "Profile",
    icon: createElement(BiUserCircle),
    href: "/dashboard/student/profile",
    subItems: [
      {
        title: "Personal Info",
        icon: createElement(PiUserListBold),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/student/profile/personal-info",
      },
      {
        title: "Settings",
        icon: createElement(RiSettings2Line),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/student/profile/settings",
      },
    ],
  },
] as const;
