import classNames from "classnames";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";

export const DoorIcon = ({
  className,
}: ComponentPropsWithRef<"img">): JSX.Element => (
  <Image
    src="/door.svg"
    width={24}
    height={24}
    alt="扉の画像"
    className={classNames("md:w-8", className)}
    priority
  />
);
