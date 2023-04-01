"use client";

import { AuthButton } from "@/app/components/AuthButton";
import { DoorIcon } from "@/app/components/icons/DoorIcon";
import { ComponentPropsWithRef } from "react";
import classNames from "classnames";

export const LogoutButton = ({
  className,
}: ComponentPropsWithRef<"button">): JSX.Element => {
  return (
    <AuthButton
      className={classNames("", className)}
      onClick={() => console.log("logout")}
    >
      <DoorIcon />
      ログアウト
    </AuthButton>
  );
};
