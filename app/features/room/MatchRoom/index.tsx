import { RoomIcon } from "@/app/components/icons/RoomIcon";
import Link from "next/link";

type Props = {
  joiningCount: number;
  path: string;
  room: number;
};

export const MatchRoom = ({ joiningCount, path, room }: Props): JSX.Element => {
  return (
    <Link
      href={path}
      className="inline-block rounded-2xl bg-gray-100 hover:bg-gray-200"
    >
      <div className="w-52 p-5 pb-4 md:w-64 border-2 border-gray-600 rounded-2xl">
        <p className="text-right">{joiningCount} / 5</p>
        <RoomIcon className="m-auto mb-3" />
        <p className="text-xl text-center">
          ルーム&nbsp;
          <span className="text-2xl font-medium">{room}</span>
        </p>
      </div>
    </Link>
  );
};
