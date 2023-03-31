import { Container } from "../components/Container";
import { UserNameTag } from "../features/room/UserNameTag";

const RoomPage = (): JSX.Element => {
  // TODO: バックエンドからルームに入っているユーザーをリアルタイムで取得
  const USER_NAME_LIST = [
    "ウーロンテスト",
    "たこやろう",
    "ルフィー",
    "takffa",
    "aabckdef",
  ];

  return (
    <main className="h-screen">
      <Container className="max-w-full pt-4">
        <ul className="flex flex-wrap gap-1 md:flex-col md:gap-2">
          {USER_NAME_LIST.map((userName, i) => (
            <li key={i}>
              <UserNameTag userName={userName} />
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
};

export default RoomPage;
