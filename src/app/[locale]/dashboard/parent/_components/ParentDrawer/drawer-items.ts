import { BiHome, BiUserCircle } from "react-icons/bi";
import { LiaChalkboardTeacherSolid, LiaMoneyBillSolid } from "react-icons/lia";
import { PiExamLight, PiStudentBold, PiUserListBold } from "react-icons/pi";
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
    href: "/dashboard/parent",
    icon: createElement(BiHome),
  },
  {
    title: "Admission Dashboard",
    href: "/dashboard/admission",
    icon: createElement(PiStudentBold),
  },
  {
    title: "Academics",
    icon: createElement(TbLamp2),
    href: "/dashboard/parent/academics",
    subItems: [
      {
        title: "Attendance",
        icon: createElement(FaUserClock),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/parent/academics/attendance",
      },
      {
        title: "Timetable",
        icon: createElement(AiOutlineClockCircle),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/parent/academics/timetable",
      },
      {
        title: "Class Material",
        icon: createElement(FiFolder),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/parent/academics/class-material",
      },
      {
        title: "Academic Calendar",
        icon: createElement(BsCalendar2Check),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/parent/academics/academic-calendar",
      },
      {
        title: "Home Work",
        icon: createElement(MdWorkOutline),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/parent/academics/homework",
      },
      {
        title: "Teacher Info",
        icon: createElement(LiaChalkboardTeacherSolid),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/parent/academics/teacher-info",
      },
    ],
  },
  {
    title: "Exams",
    icon: createElement(PiExamLight),
    href: "/dashboard/parent/exams",
    subItems: [
      {
        title: "Schedule",
        icon: createElement(AiOutlineClockCircle),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/parent/exams/schedule",
      },
      {
        title: "Marks",
        icon: createElement(GoNumber),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/parent/exams/marks",
      },
      {
        title: "Report Card",
        icon: createElement(TbReportAnalytics),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/parent/exams/report-card",
      },
    ],
  },
  {
    title: "Money",
    icon: createElement(LiaMoneyBillSolid),
    href: "/dashboard/parent/money",
    subItems: [
      {
        title: "Fees",
        icon: createElement(GiTakeMyMoney),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/parent/money/fees",
      },
      {
        title: "Fines",
        icon: createElement(GrMoney),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/parent/money/fines",
      },
    ],
  },
  {
    title: "Profile",
    icon: createElement(BiUserCircle),
    href: "/dashboard/parent/Profile",
    subItems: [
      {
        title: "Personal Info",
        icon: createElement(PiUserListBold),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/parent/profile/personal-info",
      },
      {
        title: "Settings",
        icon: createElement(RiSettings2Line),
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        href: "/dashboard/parent/profile/settings",
      },
    ],
  },
] as const;
