"use client";

import { Container } from "@/app/components/Container";
import { GoogleLoginButton } from "@/app/features/auth/components/GoogleLoginButton";
import { TwitterLoginButton } from "@/app/features/auth/components/TwitterLoginButton";
import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

const LoginPage = (): JSX.Element => {
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) return router.replace("/");
    // if (!user.displayName) return;
    console.log("onAuthのuser: ", user);
    // setName(user.displayName);
    // setUserId(user.uid);
  });

  return (
    <main className="bg-black bg-opacity-30 h-screen">
      <Container className="h-3/4 flex justify-center items-center">
        <div className="p-8 md:p-16 bg-white max-w-3xl m-auto rounded-xl">
          <h1 className="text-base text-center md:text-2xl mb-12">
            どのアカウントでログインしますか？
          </h1>
          <div className="flex flex-col gap-4 items-center justify-center">
            <GoogleLoginButton />
            <TwitterLoginButton />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default LoginPage;
