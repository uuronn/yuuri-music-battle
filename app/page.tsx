"use client";

import { User, onAuthStateChanged } from "firebase/auth";
import { Container } from "./components/Container";
import { LogoutButton } from "./features/auth/components/LogoutButton";
import { MatchRoom } from "./features/room/MatchRoom";
import { auth, storeDB } from "@/firebaseConfig";
import { useRouter } from "next/navigation";
import { Fragment, cache, useEffect, useState } from "react";
import {
  CollectionReference,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { OnlineCounter } from "./features/room/OnlineCounter";

// Firebaseからデータを取ってくる
const ROOM_LIST = [
  { path: "/room1", roomId: 1, joiningList: 1 },
  { path: "/room2", roomId: 2, joiningList: 3 },
  { path: "/room3", roomId: 3, joiningList: 0 },
];

const Home = (): JSX.Element => {
  const [user, setUser] = useState<User>();
  const [count, setCount] = useState<number>(0);
  const onlineStatusDocRef = doc(storeDB, "onlineUser", "onlineStatus");
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // ユーザー情報が存在するなら取得して、無いならログインページへ遷移
    onAuthStateChanged(auth, async (user) => {
      if (!user) return router.replace("/auth/login");

      setUser(user);

      const onlineUser = await getDoc(doc(storeDB, "users", user.uid));
      if (onlineUser.exists()) {
        setIsOnline(onlineUser.data().online);
      }
      // setIsOnline();
    });

    // オンライン状態のユーザーの数を取得
    // async () => {
    //   const onlineUser = (await getDoc(
    //     onlineStatusDocRef
    //   )) as CollectionReference<{}>;
    //   if (onlineUser.exists()) {
    //     setCount(onlineUser.data().onlineCounter);
    //   }
    // };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user && isOnline) {
      console.log(user.displayName, "はisOnlineが", isOnline, "です!");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);

  useEffect(() => {
    console.log(count);
  }, [count]);

  // ユーザーが存在してる前提での処理
  useEffect(() => {
    if (user) {
      const usersDocRef = doc(storeDB, "users", user.uid);

      // ユーザーをオンライン状態にする
      try {
        (async () => {
          await updateDoc(usersDocRef, {
            online: true,
          });
        })();
      } catch (e) {
        console.log(e);
      }

      // オンラインユーザーの数を取得するための処理;
      onSnapshot(onlineStatusDocRef, async (doc) => {
        if (doc.exists()) {
          console.log("リアルタイム:", doc.data());
          setCount(doc.data().onlineCounter);
        } else {
          console.log("No such onlineUser document!");
        }
      });

      // onSnapshot(usersDocRef, async (doc) => {
      //   if (doc.exists()) {
      //     if (doc.data().online) {
      //       await updateDoc(onlineStatusDocRef, {
      //         onlineCounter: count + 1,
      //       });
      //     }
      //   } else {
      //     console.log("No such users document!");
      //   }
      // });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (!user) return <Fragment />;

  return (
    <main className="h-screen">
      <Container className="h-full flex justify-center items-center relative">
        <p className="absolute top-0">アカウント名: {user.displayName}</p>
        <OnlineCounter count={count} />
        <LogoutButton className="absolute top-[32px] right-[16px]" />
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
