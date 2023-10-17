import Link from "next/link";
import React from "react";

const Button: React.FC<ButtonProps> = ({ text, onClick, style }) => {
  return (
    <div
      onClick={onClick}
      className={` border-black border-2 bg-[#67568C] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#67568C] transition-all ${style}`}
    >
      {text}
    </div>
  );
};

export const LinkButton: React.FC<LinkButtonProps> = ({ text, onClick, style, path }) => {
  return (
    <Link href={path}>
      <Button text={text} onClick={onClick} style={style}></Button>
    </Link>
  )
}
interface ButtonProps {
  text: string;
  onClick: (e: any) => void;
  style: string;
}

interface LinkButtonProps extends ButtonProps {
  path: string
}

export default Button;
