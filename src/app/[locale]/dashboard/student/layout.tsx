import type { FC, ReactNode } from "react";
import { RedirectType, redirect } from "next/navigation";

import StudentDrawer from "./_components/StudentDrawer";
import { getServerAuthSession } from "@/src/server/auth";

type Props = { children: ReactNode };

const StudentDashboardLayout: FC<Props> = async ({ children }) => {
  const session = await getServerAuthSession();
  if (!session || session.user.role !== "student")
    redirect("/login", RedirectType.replace);

  return (
    <>
      <StudentDrawer />
      <main className="mx-8 mt-4">{children}</main>
    </>
  );
};

export default StudentDashboardLayout;
