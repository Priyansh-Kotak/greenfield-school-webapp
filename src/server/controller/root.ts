import { createTRPCRouter } from "~/server/controller/trpc";
import { admissionApplicationRouter } from "./routers/admissionApplication";
import { contactUsFormRouter } from "./routers/contactUsForm";
import { academicYearRouter } from "./routers/academicYear.router";
import { teacherRouter } from "./routers/teacher.controller";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    admissionApplication: admissionApplicationRouter,
    contactUsForm: contactUsFormRouter,
    academicYear: academicYearRouter,
    teacher: teacherRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
