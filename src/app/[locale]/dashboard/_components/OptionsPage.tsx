import PageOptionsCard, {
  type Props as PageOptionsCardProps,
} from "./PageOptionsCard";

import type { FC } from "react";

type Props = {
  title: string;
  options: ReadonlyArray<PageOptionsCardProps>;
};

const OptionsPage: FC<Props> = ({ title, options }) => {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">{title}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {options.map(subItem => (
          <PageOptionsCard key={subItem.title} {...subItem} />
        ))}
      </div>
    </>
  );
};

export default OptionsPage;
