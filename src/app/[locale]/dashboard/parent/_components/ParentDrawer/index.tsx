"use client";

import Drawer from "@/src/components/Drawer";
import type { FC } from "react";
import PARENT_DRAWER_ITEMS from "./drawer-items";

const ParentDrawer: FC = () => {
  return <Drawer items={PARENT_DRAWER_ITEMS} />;
};

export default ParentDrawer;
