import { styled } from "styled-components";
import MoldPlaces from "./MoldPlaces";
import { useContext } from "react";
import { ActivityContext } from "../../contexts/ActivitiesContext";

export default function PlacesActivities() {
  const { day } = useContext(ActivityContext);

  const atv1 = day.filter(day => day.hallId === 1);
  const atv2 = day.filter(day => day.hallId === 2);
  const atv3 = day.filter(day => day.hallId === 3);

  const atvs = [];
  atvs.push(atv1)
  atvs.push(atv2)
  atvs.push(atv3)  

  //'Auditório Principal', 'Auditório Lateral', 'Sala de Workshop'
  const halls = [{hall: 'Auditório Principal'}, {hall: 'Auditório Lateral'}, {hall: 'Sala de Workshop'}];
  const atvByHalls = halls.map((hall, index) => {
    return {...hall, atv: atvs[index]}
  })

  return (
    <CsPlacesActivities>
      {
        atvByHalls.map((hall, index) =>
          <MoldPlaces key={index} placeName={hall.hall} activities={hall.atv}/>
        )
      }
    </CsPlacesActivities>
  );
}

const CsPlacesActivities = styled.div`
    display: flex;
    //border-bottom: 5px solid red;
`;