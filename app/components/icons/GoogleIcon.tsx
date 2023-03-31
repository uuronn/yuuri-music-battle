import classNames from "classnames";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";

export const GoogleIcon = ({
  className,
}: ComponentPropsWithRef<"img">): JSX.Element => (
  <Image
    src="/google.svg"
    width={32}
    height={32}
    alt="Googleの画像"
    className={classNames("sm:w-12", className)}
    priority
  />
);
