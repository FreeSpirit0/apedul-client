import React from "react";

const Button: React.FC<ButtonProps> = ({ text, onClick ,style }) => {
  return (
    <button onClick={onClick} className={` border-black border-2 bg-[#67568C] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#67568C] ${style}`}>
      {text}
    </button>
  );
};

interface ButtonProps {
    text: string,
    onClick: (e: any) => void
    style: string
}

export default Button;
