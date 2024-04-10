"use client";
import { type Teacher } from "@prisma/client";
import Link from "next/link";
import { type FC, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelectedAcademicYrCtx } from "~/app/(app)/dashboard/_contexts/SelectedAcademicYrCtx";
import Loading from "~/app/(app)/loading";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from "~/app/next-ui";
import { api } from "~/trpc/react";
import { getAcademicStr } from "../utils";

const TeacherDeletePage: FC = () => {
    const utils = api.useUtils();
    const { mutate } = api.teacher.deleteTeacher.useMutation({
        async onSuccess() {
            toast.success("🎉 Teacher successfully deleted submitted 🎉");
            await utils.teacher.getAll.invalidate();
        },
        onError(err) {
            console.error(err);
            toast.error(err.message);
        },
    });
    const { selectedAcademicYr } = useSelectedAcademicYrCtx();
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(
        null,
    );
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { data, isSuccess, isError, isLoading, refetch } =
        api.teacher.getAll.useQuery({
            academicYearId: selectedAcademicYr.id,
        });

    const deleteClickHandler = (tr: Teacher) => {
        return () => {
            setSelectedTeacher(tr);
            onOpen();
        };
    };
    const deleteAcademicYrHandler = () => {
        if (selectedTeacher) {
            mutate({
                id: selectedTeacher.id,
                academicYearId: selectedAcademicYr.id,
            });
        }
        onClose();
    };

    const tryAgainClickHandler = async () => {
        await refetch();
    };

    return (
        <div className="space-y-4">
            {isLoading && <p className="justify-center">Loading...</p>}
            {data && data?.length > 0 ? (
                <h3 className="text-xl font-semibold">Delete Teacher</h3>
            ) : (
                <div>
                    <h3 className="text-xl font-semibold">
                        No teacher data to delete.
                    </h3>
                    <Button
                        as={Link}
                        color="primary"
                        className="my-2 text-lg font-semibold"
                        href="/dashboard/admin/administration/teacher/create"
                    >
                        Create a new Teaacher.
                    </Button>
                </div>            )}
            <div className="flex gap-4">
                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    isDismissable={false}
                    isKeyboardDismissDisabled={true}
                >
                    <ModalContent>
                        {onClose => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    Are you sure that you want to delete Teacher
                                    &quot;{selectedTeacher?.name}&quot;
                                </ModalHeader>
                                <ModalBody>
                                    <p className="text-rose-500">
                                        This operation is irreversible, so you
                                        better be sure, what you are doing
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onPress={onClose}>
                                        Go Back
                                    </Button>
                                    <Button
                                        color="danger"
                                        variant="light"
                                        onPress={deleteAcademicYrHandler}
                                    >
                                        DELETE
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>

                {isSuccess &&
                    data?.map((tr, i) => (
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
                                        color="danger"
                                        className="my-2 w-full font-bold"
                                        onClick={deleteClickHandler(tr)}
                                    >
                                        Delete
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

export default TeacherDeletePage;
