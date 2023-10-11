type Props = {
  userName: string;
};

export const UserNameTag = ({ userName }: Props): JSX.Element => {
  return (
    <p className="px-4 py-3 inline-block bg-black bg-opacity-80 text-xs text-white rounded-lg md:text-base">
      {userName}
    </p>
  );
};
