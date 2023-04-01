"use client";

import { AuthButton } from "@/app/components/AuthButton";
import { GoogleIcon } from "@/app/components/icons/GoogleIcon";
import { auth } from "@/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const GoogleLoginButton = (): JSX.Element => {
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      console.log("user: ", user);
      console.log("displayName: ", user.displayName);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthButton onClick={signIn}>
      <GoogleIcon />
      Googleでログイン
    </AuthButton>
  );
};
