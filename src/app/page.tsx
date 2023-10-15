'use client'

import Image from "next/image";
import Button from "./components/shared/button";
import { useEffect, useState } from "react";

export default function Home() {
  const fetchData = async () => {
    await fetch("https://apedul.as.r.appspot.com/guess", {
      method: "post",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({})
    }).then(res => res.json()).then(data => console.log(data));
  };

  const handleClick = (e: any) => { fetchData() }

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-8 bg-white">
      <div className="z-10 max-w-5xl w-full justify-center items-center text-sm text-white lg:flex">
        <Button
          text={"Guess your NFT"}
          style={"bg-white text-black font-bold text-xl w-3/5 h-12"}
        />
      </div>

      <div className="w-full flex flex-1 items-center justify-center gap-20">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

        <div className="mb-32 flex flex-col items-center gap-4 text-white lg:max-w-5xl lg:mb-0 lg:text-left">
          <Button
            text={"Does your NFT got an earring?"}
            style={"bg-[#FF6E6C] text-xl p-10 rounded-md"}
          />
          <div className="w-40 flex flex-col gap-4">
            <Button text={"Yes"} style={"p-2"} onClick={handleClick} />
            <Button text={"No"} style={"p-2"} />
          </div>

          {/* <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Explore the Next.js 13 playground.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a> */}
        </div>
      </div>
    </main>
  );
}
