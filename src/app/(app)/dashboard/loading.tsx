// read docs at https://nextjs.org/docs/app/api-reference/file-conventions/loading

import { CircularProgress } from "@nextui-org/react";

const Loading = () => {
    return (
        <div className="flex h-screen  items-center justify-center text-3xl">
            <CircularProgress
                classNames={{
                    label: "text-6xl font-bold text-green-600",
                }}
                label="Welcome to Dashboard's GreenField Campus"
            />
        </div>
    );
};

export default Loading;
