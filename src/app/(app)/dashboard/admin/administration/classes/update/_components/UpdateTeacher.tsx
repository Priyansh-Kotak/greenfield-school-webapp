"use client";

import { useSearchParams } from "next/navigation";

import { Button, Card, CardBody, Link } from "@nextui-org/react";
import { type FC } from "react";
import { useSelectedAcademicYrCtx } from "~/app/(app)/dashboard/_contexts/SelectedAcademicYrCtx";
import Loading from "~/app/(app)/loading";
import { api } from "~/trpc/react";
import TeacherUpdateForm from "./TeacherUpdateForm";

const UpdateAcademicYearGrid: FC = () => {
    const params = useSearchParams();
    const { selectedAcademicYr } = useSelectedAcademicYrCtx();
    const { isLoading, isSuccess, isError, data, refetch } =
        api.teacher.getAll.useQuery({ academicYearId: selectedAcademicYr.id });
    // render academic year update form if correct id is provided
    const teacherId = params.get("id");
    if (teacherId && isSuccess) {
        const teacher = data.find(tr => tr.id === teacherId);
        if (teacher) {
            return <TeacherUpdateForm teacher={teacher} />;
        }
    }
    const tryAgainClickHandler = async () => {
        await refetch();
    };

    return (
        <section className="space-y-4">
            {data && data.length > 0 ? (
                <h3 className="text-xl font-semibold">
                    Click on the Teacher you want to update
                </h3>
            ) : (
                <h3 className="text-xl font-semibold">No data to update.</h3>
            )}
            <ul className="flex gap-4">
                {isLoading && (
                    <p className="justify-center">
                        <Loading />
                    </p>
                )}
                {isSuccess &&
                    data.map(tr => (
                        <Card
                            key={tr.id}
                            as={Link}
                            href={`/dashboard/admin/administration/teacher/update?id=${tr.id}`}
                        >
                            <CardBody className="grid grid-cols-2 gap-x-2 gap-y-1">
                                <span className="font-semibold">Name: </span>
                                <span>{tr.name}</span>
                                <span className="font-semibold">Email: </span>
                                <span>{tr.email}</span>
                                <span className="font-semibold">Phone: </span>
                                <span>{tr.phone}</span>
                                {/* <span className="font-semibold"></span>   */}

                                <div className="col-span-2">
                                    <Button
                                        as={Link}
                                        color="primary"
                                        className="my-2 w-full"
                                        href={`/dashboard/admin/administration/teacher/update?id=${tr.id}`}
                                    >
                                        Update
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                {isError && (
                    <div>
                        <p>Oops, could not load Teacher</p>
                        <Button onClick={tryAgainClickHandler}>
                            Try Again
                        </Button>
                    </div>
                )}
            </ul>
        </section>
    );
};

export default UpdateAcademicYearGrid;
