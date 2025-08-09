import React from "react";

const SkeletonGridView = ({ count = 8 }) => {
  const skeletons = Array(count).fill(0);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {skeletons.map((_, index) => (
        <div
          key={index}
          className="w-full h-[270px] bg-white rounded-lg border shadow-sm overflow-hidden flex flex-col animate-pulse"
        >
          <div className="w-full h-40 bg-gray-200"></div>
          <div className="p-3 flex-1 flex flex-col justify-between">
            <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded mb-1 w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonGridView;
