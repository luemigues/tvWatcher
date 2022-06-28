import React, { useEffect, useState } from "react";
import { Container } from "./Upcoming-styles";
import { useSelector, useDispatch } from "react-redux";
import { saveSchedule } from "../../../store/schedule.slice";
import tvMaze from "../../../utils/resources";
import helpers from "../../../utils/helpers";

function UpcomingSection(props) {
  let [futureEpisodes, setFutureEpisodes] = useState([]);
  const favorites = useSelector((state) => state.favorites.value);
  const schedule = useSelector((state) => state.schedule.value);
  let dispatch = useDispatch();

  useEffect(() => {
    let count = 0;
    let getSchedule = async () => {
      let fullSchdule = await tvMaze.getFullSchedule();
      let upcomingFavs = helpers.filterFavoriteEpisodes(fullSchdule, favorites);
      dispatch(saveSchedule(upcomingFavs));
      count++;
    };

    let renewschedule = helpers.renewSchedule(schedule);
    if (renewschedule) {
      getSchedule();
    }
    console.log(count);
  }, [dispatch, schedule, favorites]);

  useEffect(() => {
    if (schedule.length > 0) {
      let upcoming = helpers.getUpcomingEpisodes(schedule);
      setFutureEpisodes(upcoming);
      console.log(upcoming);
    }
  }, [schedule]);

  return (
    <Container>
      {futureEpisodes.map((episode) => (
        <div key={episode.id}>{episode.name}</div>
      ))}
    </Container>
  );
}

export default UpcomingSection;
