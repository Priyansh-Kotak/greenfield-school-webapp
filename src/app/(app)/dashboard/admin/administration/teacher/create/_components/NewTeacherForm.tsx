"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { type z } from "zod";
import { useSelectedAcademicYrCtx } from "~/app/(app)/dashboard/_contexts/SelectedAcademicYrCtx";
import { Button, Input } from "~/app/next-ui";
import { TeacherValidator } from "~/server/model/validator/teacher.validator";
import { api } from "~/trpc/react";

const NewFormSchema = TeacherValidator.getNewTeacherSchema();
type TNewFormSchema = z.infer<typeof NewFormSchema>;

const NewTeacherForm = () => {
    const {selectedAcademicYr} = useSelectedAcademicYrCtx()
    const {
        register,
        setError,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm<TNewFormSchema>({
        mode: "onBlur",
        resolver: zodResolver(NewFormSchema),
        reValidateMode: "onBlur",
        defaultValues:{academicYearId: selectedAcademicYr.id}
    });
    const utils = api.useUtils();
    // const { mutate, isLoading } = api.academicYear.newAcademicYear.useMutation({
    const { mutate, isLoading } = api.teacher.newTeacher.useMutation({
        async onSuccess() {
            toast.success("🎉 Teacher successfully created submitted 🎉");
            reset();
            await utils.teacher.getAll.invalidate();
        },
        onError(err) {
            console.error(err);
            setError("root.serverError", { message: err.message });
        },
    });
    console.log(errors)

    return (
        <form
            className="space-y-2"
            onSubmit={handleSubmit(data => mutate(data))}
        >
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 px-2 pb-4 text-xl md:grid-cols-2">
                <Input
                    type="text"
                    label="Name of the teacher"
                    variant="underlined"
                    isInvalid={errors.name !== undefined}
                    errorMessage={errors.name?.message}
                    placeholder="Enter name"
                    size="lg"
                    color="primary"
                    isRequired
                    {...register("name")}
                />
                <Input
                    type="email"
                    label="Email id of the teacher"
                    variant="underlined"
                    isInvalid={errors.email !== undefined}
                    errorMessage={errors.email?.message}
                    placeholder="Enter email"
                    size="lg"
                    color="primary"
                    isRequired
                    {...register("email")}
                />
                <Input
                    type="text"
                    label="Phone number teacher"
                    variant="underlined"
                    isInvalid={errors.phone !== undefined}
                    errorMessage={errors.phone?.message}
                    placeholder="Enter phone number"
                    size="lg"
                    color="primary"
                    isRequired
                    {...register("phone")}
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
                Create
            </Button>
        </form>
    );
};

export default NewTeacherForm;
