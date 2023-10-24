import { styled } from "styled-components";
import ActivitiesContainer from "./ActivitiesContainer";



export default function MoldPlaces(props) {
    const {placeName} = props;
  return (
    <CsMoldPlaces>
        <h3>{placeName}</h3>
        <ActivitiesContainer/>
    </CsMoldPlaces>
  );
}

const CsMoldPlaces = styled.div`
    width: 33.33%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`;