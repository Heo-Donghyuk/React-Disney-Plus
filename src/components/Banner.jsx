import React, { useEffect, useState } from "react";
import fetchData from "../api/fetch.js";
import requests from "../api/request.js";
import instance from "../api/index.js";

const Banner = () => {
  const [movieInfo, setMovieInfo] = useState();

  const getData = async () => {
    const res = await fetchData(requests.fetchNowPlaying);
    // 여러 영화 중 하나의 영화 ID를 가져오기
    const movieId =
      res.data.results[Math.floor(Math.random() * res.data.results.length)].id;
    // 특정 영화의 상세 정보를 가져오기
    const { data: movidDetail } = await fetchData(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovieInfo(movidDetail);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <header
      className={`banner 
      bg-center bg-cover object-contain h-[448px]
      bg-gradient-to-b from-transparent to-black`}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movieInfo?.backdrop_path}")`,
      }}
    >
      <div className="banner_fade h-full bg-gradient-to-b from-transparent to-black">
        <div className="banner_contents">
          <h1 className="banner_title">
            {movieInfo?.title || movieInfo?.name || movieInfo?.original_name}
          </h1>
          <div className="banner_buttons">
            {movieInfo?.videos?.results[0]?.key && (
              <button className="banner_button play">Play</button>
            )}
          </div>
          <p className="banner_description">{movieInfo?.overview}</p>
          <a
            href={`https://image.tmdb.org/t/p/original${movieInfo?.backdrop_path}`}
          >
            Go to image
          </a>
        </div>
      </div>
    </header>
  );
};

export default Banner;
