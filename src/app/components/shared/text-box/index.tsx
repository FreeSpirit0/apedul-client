import React from 'react'

const TextBox: React.FC<TextBoxProps> = ({ text, style }) => {
  return (
    <button  className={`border-black border-2 bg-[#67568C] shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#67568C] ${style}`}>
      {text}
    </button>
  )
}

interface TextBoxProps {
    text: string,
    style: string
}

export default TextBox