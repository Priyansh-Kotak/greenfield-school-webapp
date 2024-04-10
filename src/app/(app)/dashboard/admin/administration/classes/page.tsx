"use client";

import Loading from "~/app/(app)/loading";
import { Button, Card, CardBody, CardHeader, Link } from "~/app/next-ui";
import { api } from "~/trpc/react";
import { useSelectedAcademicYrCtx } from "../../../_contexts/SelectedAcademicYrCtx";

const TeacherCRUDPage = () => {
    // const { allAcademicYrs } = useAllAcademicYrCtx();
    const { selectedAcademicYr } = useSelectedAcademicYrCtx();
    const { isLoading, isSuccess, isError, data, refetch } =
        api.teacher.getAll.useQuery({ academicYearId: selectedAcademicYr.id });

    const tryAgainClickHandler = async () => {
        await refetch();
    };

    return (
        <div className="space-y-4">
            {data && data.length > 0 ? (
                <h3 className="text-xl font-semibold">
                    All Classes of the school in year{" "}
                    {selectedAcademicYr.startDate.getUTCFullYear()}
                </h3>
            ) : (
                <h3 className="text-xl font-semibold">No data found.</h3>
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
            </div>
        </div>
    );
};

export default TeacherCRUDPage;
