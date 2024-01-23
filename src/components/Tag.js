import axios from "axios";
import React, { useEffect, useState } from "react";
import Spiner from "./Spiner";
import useGif from "../hooks/useGif";

// Api
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag= () => {

  const [tag, setTag] = useState('')

  const {gif, loading, fetchData} = useGif(tag);

  function clickHandeler() {
    fetchData(tag);
  }

  function chamgeHandeler(event){
    setTag(event.target.value)
  }

  return (
    <div
      className="w-1/2 bg-blue-500 rounded-lg
        flex flex-col items-center border border-black gap-y-5"
    >
      <h1
        className="text-2xl underline uppercase font-bold
            mt-6"
      >
        Random {tag} Gifs
      </h1>

      {loading ? <Spiner /> : <img src={gif} width={450} />}
      
      <input
        type="text"
        className="w-10/12 py-3 rounded-xl text-xl text-center mb-1"
        onChange={chamgeHandeler}
        value={tag}
      />

      <button
        onClick={clickHandeler}
        className="w-10/12 bg-gray-300 py-3 rounded-xl text-xl 
            hover:bg-gray-400 transition mb-6"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
