import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-8 border-t-transparent h-8 border-4 border-(--color-hover) rounded-full animate-spin"></div>
      <p className="ml-2 text-(--color-important)">loading...</p>
    </div>
  );
};

export default Loading;
