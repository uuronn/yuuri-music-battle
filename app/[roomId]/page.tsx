import { Container } from "../components/Container";
import { AnswerButton } from "../features/room/AnswerButton";
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

  const ANSWER_LIST = [
    "タイムマシン",
    "ビリミリオン",
    "桜晴",
    "ドライフラワー",
  ];

  const lyrics = "今日はうまく笑えない";

  return (
    <main className="h-screen relative">
      <ul className="flex flex-wrap gap-1 absolute top-[16px] left-[16px] md:flex-col md:gap-2">
        {USER_NAME_LIST.map((userName, i) => (
          <li key={i}>
            <UserNameTag userName={userName} />
          </li>
        ))}
      </ul>
      <Container className="h-4/5 flex flex-col items-center justify-center max-w-full pt-40 md:pt-10">
        <h2 className="px-6 py-3 text-2xl text-center mb-20 border-b-2 w-fit border-gray-300 margin-auto md:text-4xl">
          {lyrics}
        </h2>
        <ul className="flex flex-col gap-2">
          {ANSWER_LIST.map((answer, i) => (
            <li key={i}>
              <AnswerButton index={i} title={answer} />
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
};

export default RoomPage;
