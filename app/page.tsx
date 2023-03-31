import { Container } from "./components/Container";
import { MatchRoom } from "./features/room/MatchRoom";

const Home = (): JSX.Element => {
  // Firebaseからデータを取ってくる
  const ROOM_LIST = [
    { path: "/room1", roomId: 1, joiningList: 1 },
    { path: "/room2", roomId: 2, joiningList: 3 },
    { path: "/room3", roomId: 3, joiningList: 0 },
  ];

  const onlineCount: number = 2;

  return (
    <main className="h-screen">
      <Container className="h-full flex justify-center items-center relative">
        <p
          className={`text-2xl flex gap-2 absolute top-[32px] right-[16px] before:content-[''] before:block before:rounded-full before:w-4 before:h-4 ${
            onlineCount >= 2
              ? "before:bg-green-500"
              : onlineCount === 1
              ? "before:bg-yellow-500"
              : "before:bg-red-500"
          }`}
        >
          オンライン: {onlineCount}人
        </p>
        <ul className="flex flex-col md:flex-row items-center justify-center gap-10">
          {ROOM_LIST.map((room) => (
            <li key={room.roomId}>
              <MatchRoom
                joiningCount={room.joiningList}
                path={room.path}
                room={room.roomId}
              />
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
};

export default Home;
