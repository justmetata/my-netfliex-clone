import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

const baseURL = 'https://image.tmdb.org/t/p/original/'

function Banner() {
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      console.log(request);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request?.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
console.log(Movie)
  
function truncate(str, n){
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundsize: "cover",
          backgroundImage: `url(${baseURL}${Movie?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__titil">
            {Movie?.title || Movie?.name || Movie?.original_name}
          </h1>
         <div className="banner__buttons">
          <button className="banner__button">play</button>
          <button className="banner__button">my List</button>
         </div>
         <h1 className="banner__description">{truncate(Movie?.overview,150)}</h1>
         </div>
         <div className="banner__fadeBottom">

         </div>
      </header>
    </div>
  );
}

export default Banner;
