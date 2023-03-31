import { Container } from "@/app/components/Container";
import { GoogleLoginButton } from "@/app/features/auth/components/GoogleLoginButton";
import { TwitterLoginButton } from "@/app/features/auth/components/TwitterLoginButton";

export default function Home() {
  return (
    <main className="pt-32 bg-black bg-opacity-30 h-screen">
      <Container>
        <div className="p-8 sm:p-16 bg-white max-w-3xl m-auto rounded-xl">
          <h1 className="text-base text-center sm:text-2xl mb-12">
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
}
