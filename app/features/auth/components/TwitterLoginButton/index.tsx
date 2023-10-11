"use client";

import { AuthButton } from "@/app/components/AuthButton";
import { TwitterIcon } from "@/app/components/icons/TwitterIcon";

export const TwitterLoginButton = (): JSX.Element => {
  return (
    // TODO: Twitterログインの処理を書く（SCなど意識してみよう）
    <AuthButton onClick={() => console.log("twitter login")}>
      <TwitterIcon />
      Twitterでログイン
    </AuthButton>
  );
};
