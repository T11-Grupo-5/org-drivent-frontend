import { styled } from "styled-components";
import Days from "./Days";
import PlacesActivities from "./PlacesActivities";
import { useContext } from "react";
import { ActivityContext } from "../../contexts/ActivitiesContext";



export default function AvailableActivities() {
  const { day } = useContext(ActivityContext)

  return (
    day.length === 0 ? 
    <CsAvailableActivities>
      <h2>Primeiro, filtre pelo dia do evento: </h2>
      <Days />
    </CsAvailableActivities> : <CsAvailableActivities>
      <h2>Primeiro, filtre pelo dia do evento: </h2>
      <Days />
      <PlacesActivities />
    </CsAvailableActivities>
  );
}

const CsAvailableActivities = styled.div`
  h2{
    margin-bottom: 25px;
  }
  margin-bottom: 10px;
`;