import React, { useEffect } from "react";
import { Container, EpisodesContainer } from "./Upcoming-styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchUpcomingEpisodes } from "../../../store/schedule.slice";
import SectionHeader from "../../sectionHeader/SectionHeader";
import UpcomingCard from "../../cards/upcomingCard/UpcomingCard";

function UpcomingSection(props) {

  let schedule = useSelector((state) => state.schedule.value);
  let dispatch = useDispatch();

  useEffect(() => {
    let getFullSchedule = async () => {
      dispatch(fetchUpcomingEpisodes(props.favorites));
    };
    getFullSchedule();
  }, [props, dispatch]);

  return (
    <Container>
      <SectionHeader title="Catch up on your favorite shows!" />
      <EpisodesContainer>
        {schedule.map((episode) => {
          return <UpcomingCard key={episode.id} episode={episode} />;
        })}
      </EpisodesContainer>
    </Container>
  );
}

export default UpcomingSection;
