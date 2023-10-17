import React from "react";

const SkeletonCard = () => {
	const colors = ['#E3A018', '#A388EE']

  return (
    <div className="w-full h-4/5 flex flex-col justify-content-center items-center justify-center border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#A388EE]">
      <strong className="text-white">More collection coming soon</strong>
    </div>
  );
};

export default SkeletonCard;
