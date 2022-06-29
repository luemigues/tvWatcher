import React, { useEffect, useState } from "react";
import { Container, EpisodesContainer } from "./Upcoming-styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchUpcomingEpisodes } from "../../../store/schedule.slice";
import helpers from "../../../utils/helpers";
import SectionHeader from "../../sectionHeader/SectionHeader";
import UpcomingCard from "../../cards/upcomingCard/UpcomingCard";

function UpcomingSection(props) {
  let [futureEpisodes, setFutureEpisodes] = useState([]);
  let schedule = useSelector((state) => state.schedule.value);
  let dispatch = useDispatch();

  useEffect(() => {
    let getFullSchedule = async () => {
      dispatch(fetchUpcomingEpisodes(props.favorites));
    };

    getFullSchedule();
  }, [props, dispatch]);

  useEffect(() => {
    if (schedule.length > 0) {
      let upcoming = helpers.getUpcomingEpisodes(schedule);
      setFutureEpisodes(upcoming);
    }
  }, [schedule]);

  return (
    <Container>
      <SectionHeader title="Catch up on your favorite shows!" />
      <EpisodesContainer>
        {futureEpisodes.map((episode) => {
          return <UpcomingCard key={episode.id} episode={episode} />;
        })}
      </EpisodesContainer>
    </Container>
  );
}

export default UpcomingSection;
