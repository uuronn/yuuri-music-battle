import classNames from "classnames";
import Image from "next/image";
import { ComponentPropsWithRef } from "react";

export const TwitterIcon = ({
  className,
}: ComponentPropsWithRef<"img">): JSX.Element => (
  <Image
    src="/twitter.svg"
    width={32}
    height={32}
    alt="Twitterの画像"
    className={classNames("md:w-12", className)}
    priority
  />
);
