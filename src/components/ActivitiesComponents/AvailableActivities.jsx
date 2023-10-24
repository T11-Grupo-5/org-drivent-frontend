import { styled } from "styled-components";
import Days from "./Days";
import PlacesActivities from "./PlacesActivities";



export default function AvailableActivities() {
  return (
    <CsAvailableActivities>
        <h2>Primeiro, filtre pelo dia do evento: </h2>
        <Days />
        <PlacesActivities/>
    </CsAvailableActivities>
  );
}

const CsAvailableActivities = styled.div`
  h2{
    margin-bottom: 25px;
  }
  margin-bottom: 10px;
`;