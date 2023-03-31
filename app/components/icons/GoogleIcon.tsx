import Image from "next/image";

export const GoogleIcon = (): JSX.Element => (
  <Image
    src="/google.svg"
    width={32}
    height={32}
    alt="Googleの画像"
    className="sm:w-12"
    priority
  />
);
