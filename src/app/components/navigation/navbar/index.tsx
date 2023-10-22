"use client";

import React from "react";
import Link from "next/link";
import Button from "../../shared/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-white border-b-2 border-black">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href={"/"}>
              <div className="flex justify-center items-center gap-4">
                <Image width={70} height={20} src={"/apedul.png"} alt={""} />
                <p className="text-black font-bold">Apedul</p>
              </div>
            </Link>
            <div className="flex justify-center items-center gap-4 mr-4">
              <Link href="/guess">
                <p className="text-black font-bold">Guess</p>
              </Link>
                <p className="text-black text-3xl">|</p>
              <Link href={"https://github.com/apedul"}>
                <Button
                  text={"Support Us"}
                  style={"text-white rounded-md p-2"}
                  onClick={() => {}}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
