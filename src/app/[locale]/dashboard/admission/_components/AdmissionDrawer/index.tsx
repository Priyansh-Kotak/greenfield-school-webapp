"use client";

import Drawer from "@/src/components/Drawer";
import type { FC } from "react";
import ADMISSION_DRAWER_ITEMS from "./drawer-items";

const AdmissionDrawer: FC = () => {
  return <Drawer items={ADMISSION_DRAWER_ITEMS} />;
};

export default AdmissionDrawer;
