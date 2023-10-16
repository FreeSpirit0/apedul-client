'use client'
import React from "react";
import Button from "../button";

const Card: React.FC<CardProps> = ({ title, img }) => {
  return (
    <div className="w-80 h-4/5 border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
      <a href="" className="h-full block cursor-pointer">
        <article className="flex flex-col h-full">
          <figure className="w-full h-3/4 border-black border-b-2">
            {img !== '' ? <img
              src={img}
              alt="thumbnail"
              className="w-full h-full object-cover"
            /> : <div className="w-full h-full"></div>}
          </figure>
          <div className="flex flex-1 items-center justify-between px-6 py-0.5">
            <h1 className="flex-start text-lg">{title}</h1>
            <Button text={"Guess"} onClick={() => {}} style={"rounded-full text-sm p-2 h-10 text-white"} />
          </div>
        </article>
      </a>
    </div>
  );
};

interface CardProps {
    title: string,
    img: string
}

export default Card;
