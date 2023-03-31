import Image from "next/image";

export const TwitterIcon = (): JSX.Element => (
  <Image
    src="/twitter.svg"
    width={32}
    height={32}
    alt="Twitterの画像"
    className="sm:w-12"
    priority
  />
);
