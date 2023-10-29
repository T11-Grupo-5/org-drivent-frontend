import { styled } from "styled-components";
import MoldPlaces from "./MoldPlaces";
import { useContext, useEffect, useState } from "react";
import { ActivityContext } from "../../contexts/ActivitiesContext";
import useHall from "../../hooks/api/useActivity";

export default function PlacesActivities() {

    const { days } = useContext(ActivityContext);
    const { hall, hallLoading, hallError } = useHall(days[0].id);

    useEffect(()=>{
    },[])

    return (
        <CsPlacesActivities>
            {
                hall.map((h, index) =><MoldPlaces 
                                              key={index} 
                                              placeName={h.name} 
                                              activities={h.activities}
                                            />
                )
            }
        </CsPlacesActivities>
    );
}

const CsPlacesActivities = styled.div`
    display: flex;
    //border-bottom: 5px solid red;
`;