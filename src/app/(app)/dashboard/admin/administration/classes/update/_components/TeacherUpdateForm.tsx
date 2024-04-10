"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type Teacher } from "@prisma/client";
import { useRouter } from "next/navigation";
import { type FC } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { type z } from "zod";
import { Button, Input } from "~/app/next-ui";
import { TeacherValidator } from "~/server/model/validator/teacher.validator";
import { api } from "~/trpc/react";

const TeacherUpdateFormSchema = TeacherValidator.getNewTeacherSchema();
type TTeacherUpdateForm = z.infer<typeof TeacherUpdateFormSchema>;

const TeacherUpdateForm: FC<{ teacher: Teacher }> = ({ teacher }) => {
    const {
        setError,
        formState: { errors },
        control,
        handleSubmit,
    } = useForm<TTeacherUpdateForm>({
        resolver: zodResolver(TeacherUpdateFormSchema),
        reValidateMode: "onBlur",
        defaultValues: {
            name: teacher.name,
            academicYearId: teacher.academicYearId,
            email: teacher.email!,
            phone: teacher.phone!,
        },
    });
    const utils = api.useUtils();
    const router = useRouter();
    const { mutate, isLoading } = api.teacher.updateTeacher.useMutation({
        async onSuccess() {
            toast.success("🎉 Teacher successfully Updated 🎉");
            await utils.academicYear.getAll.invalidate();
            router.push("/dashboard/admin/administration/teacher");
        },
        onError(err) {
            console.error(err);
            setError("root.serverError", { message: err.message });
        },
    });

    return (
        <form
            className="space-y-2"
            onSubmit={handleSubmit(data => mutate({ ...data, id: teacher.id }))}
        >
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 px-2 pb-4 text-xl md:grid-cols-2">
                <Controller
                    control={control}
                    name="name"
                    render={({
                        field: { value, ...rest },
                        fieldState: { error, invalid },
                    }) => {
                        return (
                            <Input
                                type="text"
                                label="Name of the Teacher"
                                variant="underlined"
                                isInvalid={invalid}
                                errorMessage={error?.message}
                                placeholder="Enter name id of the teacher"
                                size="lg"
                                color="primary"
                                value={
                                    // new Date(value).toISOString().split("T")[0]
                                    value
                                }
                                isRequired
                                {...rest}
                            />
                        );
                    }}
                />

                <Controller
                    control={control}
                    name="email"
                    render={({
                        field: { value, ...rest },
                        fieldState: { error, invalid },
                    }) => {
                        return (
                            <Input
                                type="email"
                                label="Email of the Teacher"
                                variant="underlined"
                                isInvalid={invalid}
                                errorMessage={error?.message}
                                placeholder="Enter email id of the teacher"
                                size="lg"
                                color="primary"
                                value={
                                    // new Date(value).toISOString().split("T")[0]
                                    value
                                }
                                isRequired
                                {...rest}
                            />
                        );
                    }}
                />

                <Controller
                    control={control}
                    name="phone"
                    render={({
                        field: { value, ...rest },
                        fieldState: { error, invalid },
                    }) => {
                        return (
                            <Input
                                type="text"
                                label="Phone number of the Teacher"
                                variant="underlined"
                                isInvalid={invalid}
                                errorMessage={error?.message}
                                placeholder="Enter phone number of the teacher"
                                size="lg"
                                color="primary"
                                value={
                                    // new Date(value).toISOString().split("T")[0]
                                    value
                                }
                                isRequired
                                {...rest}
                            />
                        );
                    }}
                />
            </div>
            {errors?.root?.serverError && (
                <div className="font-bolder border-2 border-danger-700 px-4 py-2 text-danger-600">
                    {errors.root.serverError.message}
                </div>
            )}
            <Button
                color="primary"
                type="submit"
                className="font-bold"
                disabled={isLoading}
                isDisabled={isLoading}
            >
                {isLoading ? "Updating" : "Update"}
            </Button>
        </form>
    );
};

export default TeacherUpdateForm;
