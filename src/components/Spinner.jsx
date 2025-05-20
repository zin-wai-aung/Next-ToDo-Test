import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[25rem]">
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-teal-600"></div>
    </div>
  );
};

export default Spinner;
