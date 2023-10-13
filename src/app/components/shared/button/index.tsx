import React from "react";

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="h-12 w-full border-black border-2 p-2.5 bg-[#67568C] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#67568C] rounded-md">
      {text}
    </button>
  );
};

interface ButtonProps {
    text: string,
}

export default Button;
