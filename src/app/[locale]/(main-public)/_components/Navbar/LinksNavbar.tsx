import { Navbar, NavbarContent } from "@lib/next-ui";

import { NAV_LINK_TYPES } from "@/lib/frontend-data";
import Link from "next/link";
import type { FC } from "react";
import LinksNavbarItem from "./LinksNavbarItem";

const LinksNavbar: FC = () => {
  return (
    <Navbar
      height="3"
      className="grid place-content-start"
      isBordered
      isBlurred
    >
      <NavbarContent
        className="flex flex-wrap gap-y-0 sm:gap-x-8"
        justify="center"
      >
        <Link
          className="bg-transparent  p-0 text-xs data-[hover=true]:bg-transparent sm:text-sm md:text-base"
          href="/"
        >
          {t("title")}
        </Link>
        {NAV_LINK_TYPES.map(type => (
          <LinksNavbarItem key={type} linkType={type} />
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default LinksNavbar;
