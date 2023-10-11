type Props = {
  count: number;
};

export const OnlineCounter = ({ count }: Props): JSX.Element => {
  return (
    <p
      className={`text-base flex gap-2 bg-gray-100 py-3 px-5 rounded-2xl absolute top-[32px] left-[16px] md:text-3xl before:content-[''] before:block before:rounded-full before:w-4 before:h-4 ${
        count >= 2
          ? "before:bg-green-500"
          : count === 1
          ? "before:bg-yellow-500"
          : "before:bg-red-500"
      }`}
    >
      オンライン: {count}人
    </p>
  );
};
