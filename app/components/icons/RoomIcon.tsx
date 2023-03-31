import classNames from "classnames";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";

export const RoomIcon = ({
  className,
}: ComponentPropsWithRef<"img">): JSX.Element => (
  <Image
    src="/home.svg"
    width={64}
    height={64}
    alt="家の画像"
    className={classNames("sm:w-20", className)}
    priority
  />
);
