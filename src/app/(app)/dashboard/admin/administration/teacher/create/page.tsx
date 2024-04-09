import NewTeacherForm from "./_components/NewTeacherForm";

const AcademicYearCreatePage = () => {
    return (
        <div className="space-y-4 pt-4">
            <h2 className="text-lg sm:text-[1.5rem]">
                Create a new Teacher
            </h2>
            <NewTeacherForm />
        </div>
    );
};

export default AcademicYearCreatePage;
