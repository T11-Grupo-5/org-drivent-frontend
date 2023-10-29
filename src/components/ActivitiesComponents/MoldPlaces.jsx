import { styled } from "styled-components";
import ActivitiesContainer from "./ActivitiesContainer";



export default function MoldPlaces(props) {
  const { placeName, activities } = props;

  return (
    <CsMoldPlaces>
      <h3>{placeName}</h3>
      <ActivitiesContainer activities={activities} />
    </CsMoldPlaces>
  );
}

const CsMoldPlaces = styled.div`
    width: 33.33%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;