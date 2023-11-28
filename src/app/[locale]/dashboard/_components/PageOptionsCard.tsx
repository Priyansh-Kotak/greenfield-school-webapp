import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import type { FC, ReactNode } from "react";

import NextLink from "next/link";

export type Props = {
  title: string;
  href: string;
  icon: ReactNode;
  desc: string;
};

const PageOptionsCard: FC<Props> = ({ title, href, icon, desc }) => {
  return (
    <Card className="p-2 hover:bg-primary-50">
      <CardHeader
        className="gap-2.5 text-2xl font-bold hover:underline"
        as={NextLink}
        href={href}
      >
        {icon}
        {title}
      </CardHeader>
      <CardBody className="pt-1">{desc} </CardBody>
      <CardFooter className="justify-center">
        <Link href={href} showAnchorIcon underline="always">
          Visit
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PageOptionsCard;
