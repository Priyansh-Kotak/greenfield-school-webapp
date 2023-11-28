"use client";

import Drawer from "@/src/components/Drawer";
import type { FC } from "react";
import TEACHER_DRAWER_ITEMS from "./drawer-items";

const TeacherDrawer: FC = () => {
  return <Drawer items={TEACHER_DRAWER_ITEMS} />;
};

export default TeacherDrawer;
