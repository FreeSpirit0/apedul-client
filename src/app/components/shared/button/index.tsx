import React from "react";

const Button: React.FC<ButtonProps> = ({ text, onClick, style }) => {
  return (
    <a
      onClick={onClick}
      className={` border-black border-2 bg-[#67568C] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#67568C] transition-all ${style}`}
    >
      {text}
    </a>
  );
};

interface ButtonProps {
  text: string;
  onClick: (e: any) => void;
  style: string;
}

export default Button;
