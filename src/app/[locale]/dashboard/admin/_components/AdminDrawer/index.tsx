"use client";

import Drawer from "@/src/components/Drawer";
import type { FC } from "react";
import ADMIN_DRAWER_ITEMS from "./drawer-items";

const AdminDrawer: FC = () => {
  return <Drawer items={ADMIN_DRAWER_ITEMS} />;
};

export default AdminDrawer;
