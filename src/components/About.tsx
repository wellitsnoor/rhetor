import React from "react";

export default function About() {
  return (
    <>
      <div className="w-screen h-screen flex flex-row bg-rhetor">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">animation</h1>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">text</h1>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-row bg-white text-black">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">text</h1>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">animation</h1>
        </div>
      </div>
    </>
  );
}
