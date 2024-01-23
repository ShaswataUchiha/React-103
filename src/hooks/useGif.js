import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=01PWS6o9SGqzwluwz6fwlIrlZ98iGbLZ&tag=${tag}}`;
// const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=01PWS6o9SGqzwluwz6fwlIrlZ98iGbLZ&tag=&rating=g`;

const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);
  
    async function fetchData(tag) {
      setLoading(true);
      
      const { data } = await axios.get(tag ? `https://api.giphy.com/v1/gifs/random?api_key=01PWS6o9SGqzwluwz6fwlIrlZ98iGbLZ&tag=${tag}}`
                                           : `https://api.giphy.com/v1/gifs/random?api_key=01PWS6o9SGqzwluwz6fwlIrlZ98iGbLZ&tag=&rating=g`);
      const imageSource = data.data.images.downsized_large.url;
      // console.log(imageSource)
      setGif(imageSource);
      setLoading(false);
    }
  
    useEffect(() => {
      fetchData();
    }, []);

    return {gif, loading, fetchData};

}

export default useGif