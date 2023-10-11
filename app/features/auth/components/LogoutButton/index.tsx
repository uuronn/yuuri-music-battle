"use client";

import { AuthButton } from "@/app/components/AuthButton";
import { DoorIcon } from "@/app/components/icons/DoorIcon";
import { ComponentPropsWithRef } from "react";
import classNames from "classnames";
import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export const LogoutButton = ({
  className,
}: ComponentPropsWithRef<"button">): JSX.Element => {
  return (
    <AuthButton
      className={classNames("", className)}
      onClick={() => signOut(auth)}
    >
      <DoorIcon />
      ログアウト
    </AuthButton>
  );
};
