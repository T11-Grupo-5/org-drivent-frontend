import { styled } from "styled-components";
import MoldPlaces from "./MoldPlaces";

export default function PlacesActivities() {

    const place1 = 'Auditório Principal';
    const place2 = 'Auditório Lateral';
    const place3 = 'Sala de Workshop';

  return (
    <CsPlacesActivities>
        
        <MoldPlaces
            placeName ={place1}
        />
        <MoldPlaces
            placeName ={place2}
        />
        <MoldPlaces
            placeName ={place3}
        />

    </CsPlacesActivities>
  );
}

const CsPlacesActivities = styled.div`
    display: flex;
    
`;