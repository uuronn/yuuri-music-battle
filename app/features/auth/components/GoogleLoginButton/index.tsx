"use client";

import { AuthButton } from "@/app/components/AuthButton";
import { GoogleIcon } from "@/app/components/icons/GoogleIcon";

export const GoogleLoginButton = () => {
  return (
    // TODO: Googleログインの処理を書く（SCなど意識してみよう）
    <AuthButton onClick={() => console.log("test")}>
      <GoogleIcon />
      Googleでログイン
    </AuthButton>
  );
};
