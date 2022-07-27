/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import UserCard from '../islands/UserCard.tsx'

export const Head = () => (
  <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
  </head>
);

export default function Home() {

  return (
    <div 
      class={tw`p-4 mx-auto flex flex-col justify-center items-center bg-green-500 min-h-screen`}
      style={{backgroundColor: 'hsl(218, 23%, 16%)'}}
    >
      <img
        src="/logo.svg"
        height="250px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <UserCard/>
    </div>
  );
}
