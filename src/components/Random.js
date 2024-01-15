import axios from "axios";
import React, { useEffect, useState } from "react";
import Spiner from "./Spiner";

// Api
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  

  async function fetchData(){
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=01PWS6o9SGqzwluwz6fwlIrlZ98iGbLZ&tag=&rating=ghttps://api.giphy.com/v1/gifs/random?api_key=01PWS6o9SGqzwluwz6fwlIrlZ98iGbLZ&tag=&rating=g`;
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url
    // console.log(imageSource)
    setGif(imageSource)
    setLoading(false)
  }

  useEffect( () => {
    fetchData();
  }, [] )

  function clickHandeler(){
    fetchData();
  }

  return (
    <div
      className="w-1/2 bg-green-500 rounded-lg
        flex flex-col items-center border border-black gap-y-5"
    >
      <h1
        className="text-2xl underline uppercase font-bold
            mt-6"
      >
        A Random Gifs
      </h1>

      {
        loading ? (<Spiner/>) : (<img src={gif} width={450} />)
      }

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

export default Random;
