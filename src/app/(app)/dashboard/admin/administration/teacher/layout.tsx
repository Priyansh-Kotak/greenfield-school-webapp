import React, { type FC, type ReactNode } from "react";
import H1 from "~/app/(app)/(marketing)/_components/H1";
import AcademicYearTabs from "./_components/TeacherTabs";

const AcademicYearLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <main className="w-full space-y-4 pr-8">
            <H1 className="pt-2">Teacher</H1>
            <AcademicYearTabs />
            {children}
        </main>
    );
};

export default AcademicYearLayout;
