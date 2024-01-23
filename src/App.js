import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
  return (
    <div
      className="w-full h-full flex flex-col background relative
    items-center
    "
    >
      <h1
        className="bg-white rounded-lg font-bold text-4xl
       py-4 w-11/12 mt-10 text-center 
      "
      >
        RANDOM GIFS
      </h1>
      <div className="flex flex-col items-center w-full mt-8 gap-y-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
