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

  return <div>This is Banner</div>;
};

export default Banner;
