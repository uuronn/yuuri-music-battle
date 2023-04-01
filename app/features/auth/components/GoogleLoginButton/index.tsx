"use client";

import { AuthButton } from "@/app/components/AuthButton";
import { GoogleIcon } from "@/app/components/icons/GoogleIcon";
import { auth, db } from "@/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const GoogleLoginButton = (): JSX.Element => {
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);

      await setDoc(doc(db, "users", user.uid), {
        online: false,
      });
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
