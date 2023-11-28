import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import OptionsPage from "../../_components/OptionsPage";
import PARENT_DRAWER_ITEMS from "../_components/ParentDrawer/drawer-items";
import { setStaticParamsLocale } from "next-international/server";

const ProfileOptionsPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const options = PARENT_DRAWER_ITEMS.find(({ title }) => title === "Profile")!;

  return (
    <OptionsPage
      title="Profile Options Page"
      options={"subItems" in options ? options.subItems : []}
    />
  );
};

export default ProfileOptionsPage;
