/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import UserCard from '../islands/UserCard.tsx'

export default function Home() {

  return (
    <div class={tw`p-4 mx-auto flex flex-col justify-center items-center bg-green-500 min-h-screen`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <UserCard/>
    </div>
  );
}
