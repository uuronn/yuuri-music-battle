import { Container } from "./components/Container";
import { MatchRoom } from "./features/room/MatchRoom";

const Home = (): JSX.Element => {
  // Firebaseからデータを取ってくる
  const ROOM_LIST = [
    { path: "/room1", roomId: 1, joiningList: 1 },
    { path: "/room2", roomId: 2, joiningList: 3 },
    { path: "/room3", roomId: 3, joiningList: 0 },
  ];

  return (
    <main className="h-screen">
      <Container className="h-3/4 flex justify-center items-center">
        <ul className="flex flex-col sm:flex-row items-center justify-center gap-10">
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
