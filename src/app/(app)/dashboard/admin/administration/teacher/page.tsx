"use client";

import { Button, Card, CardBody, CardHeader, Link } from "~/app/next-ui";
import { api } from "~/trpc/react";
import { useSelectedAcademicYrCtx } from "../../../_contexts/SelectedAcademicYrCtx";
import Loading from "~/app/(app)/loading";

const TeacherCRUDPage = () => {
    const { selectedAcademicYr } = useSelectedAcademicYrCtx();
    const { isLoading, isSuccess, isError, data, refetch } =
        api.teacher.getAll.useQuery({ academicYearId: selectedAcademicYr.id });

    const tryAgainClickHandler = async () => {
        await refetch();
    };

    return (
        <div className="space-y-4">
            {isLoading && <p className="justify-center">Loading...</p>}

            {data && data.length > 0 ? (
                <h3 className="text-xl font-semibold">
                    All teachers of the school in year{" "}
                </h3>
            ) : (
                <div>
                    <h3 className="text-xl font-semibold">
                        No teacher created.
                    </h3>
                    <Button
                        as={Link}
                        color="primary"
                        className="my-2 text-lg font-semibold"
                        href="/dashboard/admin/administration/teacher/create"
                    >
                        Create a new Teaacher.
                    </Button>
                </div>
            )}
            <div className="flex gap-4">
                {/* Apply trpc loading state here */}
                {isLoading && (
                    <p className="justify-center">
                        <Loading />
                    </p>
                )}
                {isSuccess &&
                    data.map((tr, i) => (
                        <Card key={tr.id}>
                            <CardHeader className="text-lg font-semibold">
                                Teacher #{i + 1}
                            </CardHeader>
                            <CardBody className="grid grid-cols-2 gap-x-2 gap-y-1">
                                <span className="font-semibold">Name: </span>
                                <span>{tr.name}</span>
                                <span className="font-semibold">Email: </span>
                                <span>{tr.email}</span>
                                <span className="font-semibold">Phone: </span>
                                <span>{tr.phone}</span>

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
            </div>
        </div>
    );
};

export default TeacherCRUDPage;
