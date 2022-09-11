import React, { useState, useEffect } from "react";
import { Container } from "./AiringToday-styles";
import SectionHeader from "../../sectionHeader/SectionHeader";
import ShowDisplay from "../../showsDisplay/ShowDisplay";
import { fetchTodaysEpisodes } from "../../../store/airingToday.slice";
import { useSelector, useDispatch } from "react-redux";
import helpers from "../../../utils/helpers"
import { E } from "styled-icons/simple-icons";

function AiringToday(props) {
  let airingToday = useSelector((state) => state.airingToday.value);
  const [airingTodayShows, setAiringTodayShows] = useState([]);
  let dispatch = useDispatch();

  useEffect(() => {
    let getTodaysEpisodes = async () => {
      dispatch(fetchTodaysEpisodes());
    };
    getTodaysEpisodes();
  }, [dispatch]);

  useEffect(() => {
    if (airingToday.length > 0){
       let airingNext = [...new Set(airingToday.map((ep) => ep.id))]
         .map((id) => {
           return airingToday.find((ep) => ep.id === id);
         })
         .slice(0, 5);
      
     airingNext = airingNext.map((ep) => {
        return ep._embedded;
      })
      console.log(airingNext);
      setAiringTodayShows(airingNext);
    }
  }, [airingToday]);

  return (
    <Container>
      <SectionHeader title="Recommended shows airing today" />
      <ShowDisplay shows={airingTodayShows} />
    </Container>
  );
}

export default AiringToday;
