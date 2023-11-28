import type { FC, ReactNode } from "react";
import { RedirectType, redirect } from "next/navigation";

import AdmissionDrawer from "./_components/AdmissionDrawer";
import { getServerAuthSession } from "@/src/server/auth";

type Props = { children: ReactNode };

const AdmissionDashboardLayout: FC<Props> = async ({ children }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "parent")
    redirect("/login", RedirectType.replace);

  return (
    <>
      <AdmissionDrawer />
      <main className="mx-8 mt-4">{children}</main>
    </>
  );
};

export default AdmissionDashboardLayout;
