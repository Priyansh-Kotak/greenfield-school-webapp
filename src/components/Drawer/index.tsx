"use client";

import type { FC, ReactElement } from "react";

import DesktopDrawer from "./DesktopDrawer";
import MobileDrawer from "./MobileDrawer";
import useResponsiveScreen from "@/src/hooks/useResponsiveScreen";

export type SubDrawerItem = {
  title: string;
  icon: ReactElement;
  href: string;
};

export type DrawerItem = SubDrawerItem & {
  subItems?: ReadonlyArray<SubDrawerItem>;
};

export type DrawerProps = {
  items: ReadonlyArray<DrawerItem>;
};

const Drawer: FC<DrawerProps> = ({ items }) => {
  const screen = useResponsiveScreen();

  if (screen === "sm" || screen === "md") return <MobileDrawer items={items} />;
  else return <DesktopDrawer items={items} />;
};

export default Drawer;
