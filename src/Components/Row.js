import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import movieTrailer from  "movie-trailer";

import axios from "../axios";
import "../row.css";
import "../banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  /*** A snippet of code which runs based on a specific condition/variable ***/
  useEffect(() => {
    /*** if [], mean run once when the row loads, and don't run again ***/
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('s'));
        }).catch((err) => {
          console.error(err);
        })
    }
  };

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row__posters">
        {/* several row__poster */}
        {movies.map((movie) => {
          return (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {/* container -> posters */}
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}{" "}
    </div>
  );
};

export default Row;
