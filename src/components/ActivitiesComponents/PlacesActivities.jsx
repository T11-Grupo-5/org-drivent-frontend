import { styled } from "styled-components";
import MoldPlaces from "./MoldPlaces";
import { useState } from "react";

export default function PlacesActivities() {

    /* const [places, setPlaces] = useState(['Auditório Principal', 'Auditório Lateral', 'Sala de Workshop']);

    return (
        <CsPlacesActivities>
            {
                places.map((place, index) => {
                    <MoldPlaces key={index} placeName={place} />
                })
            }
        </CsPlacesActivities>
    ); */
}

const CsPlacesActivities = styled.div`
    display: flex;
    
`;