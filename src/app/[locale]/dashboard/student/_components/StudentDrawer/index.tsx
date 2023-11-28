"use client";

import Drawer from "@/src/components/Drawer";
import type { FC } from "react";
import STUDENT_DRAWER_ITEMS from "./drawer-items";

const StudentDrawer: FC = () => {
  return <Drawer items={STUDENT_DRAWER_ITEMS} />;
};

export default StudentDrawer;
