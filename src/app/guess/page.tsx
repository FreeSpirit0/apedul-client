'use client'

import Image from "next/image";
import Button from "../components/shared/button";
import { useEffect, useState } from "react";
import TextBox from "../components/shared/text-box";
import NFT from "../types/NFT";
import TraitsBox from "./traits-box";

export default function Guess() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [nft, setNft] = useState<NFT>({ tokenId: '', img: ''});
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    fetchData()
  
    return () => {
      
    }
  }, [answers])

  const formatUnderscore =  (text: string[]) => text.map(t => t.split("_").join(" "))

  const fetchData = async () => {
    await fetch("https://apedul.as.r.appspot.com/guess", {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question: questions, answer: answers })
    }).then(res => res.json()).then(data => { 
      if (data.img.length != 0) {
        setNft({ tokenId: data.tokenId, img: data.img[0].replace("ipfs://", "https://ipfs.io/ipfs/") })
        
        setIsFound(true);
      }
      setQuestions(data.question)
    });
  };

  const handleYes = (e: any) => { 
    setAnswers([...answers, 1]);
  }
  const handleNo = (e: any) => {
    setAnswers([...answers, 0]);
  }
  const handleRestart = (e: any) => {
    setAnswers([]);
    setQuestions([]);
    setIsFound(false);
    setNft({ tokenId: '', img: ''});
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-8 bg-white">
      <div className="z-10 max-w-5xl w-full justify-center items-center text-sm text-white lg:flex">
        <TextBox
          text={"Guess your NFT"} style={"px-20 py-5"}        />
      </div>

      <div className="flex-1 w-full grid grid-cols-2 items-center justify-items-center">
        { isFound ? <div className="flex flex-col justify-center gap-4 items-center">
          <Image
          src={nft.img}
          alt="NFT"
          width={180}
          height={37}
        />
        <p className="text-black">Token ID: {nft.tokenId}</p>
        </div> : <p className="text-black animate-spin text-6xl w-fit">?</p>}
        

        {
          !isFound ? (<div className="mb-32 flex flex-col items-center gap-4 text-white lg:max-w-7xl lg:mb-0 lg:text-left">
          <Button
            text={`Does your NFT got an ${questions.slice(-1)}?`}
            style={"bg-[#FF6E6C] text-xl p-10 rounded-md"}
            onClick={() => {}}
          />
          <div className="w-40 flex flex-col gap-4">
            <Button text={"Yes"} style={"p-2"} onClick={handleYes} />
            <Button text={"No"} style={"p-2"} onClick={handleNo} />
          </div>
        </div>) : <div>
          <p className="text-black mb-4">This is your NFT !!!</p>
          <Button text="Guess Again?" style="p-2 text-white rounded-md text-center" onClick={handleRestart}></Button>
          </div>
        }
        <div className="w-4/5 col-span-2">
          <TraitsBox traits={formatUnderscore(questions)} answers={answers} />
        </div>
      </div>
    </main>
  );
}
