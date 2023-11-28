"use client";

import { usePathname } from "next/navigation";
import type { DrawerItem } from ".";

const useSelectedDrawerItem = (items: ReadonlyArray<DrawerItem>) => {
  const path = usePathname();
  const selectedItem = items
    .toSorted((a, b) => b.href.length - a.href.length)
    .find(item => path.includes(item.href));

  if (!selectedItem) throw new Error("Invalid URL");
  const selectedSubItem = selectedItem.subItems
    ? selectedItem.subItems.find(subItem => subItem.href === path)
    : undefined;

  return { item: selectedItem, subItem: selectedSubItem };
};
export default useSelectedDrawerItem;
