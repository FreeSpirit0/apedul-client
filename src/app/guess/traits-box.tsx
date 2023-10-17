import React from "react";

const TraitsBox: React.FC<TraitsBoxProps> = ({ traits, answers }) => {
  return (
    <div className="w-full overflow-x-scroll p-4 border-black border-2 rounded-md shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-white">
      <table className="w-full table-auto text-left border-spacing-2">
        <thead className="text-gray-700">
          <tr>
            {traits.map((t) => (
              <th key={t}>{t}</th>
            ))} 
          </tr>
        </thead>
        <tbody>
          <tr>
            {answers.map((a, i) => (
              <td key={i}>{Number(a) === 1 ? "✅" : "❌"}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

interface TraitsBoxProps {
  traits: string[];
  answers: number[];
}

export default TraitsBox;
