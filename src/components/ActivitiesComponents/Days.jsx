import { styled } from "styled-components";
import Day from "./Day";
import { useContext } from "react";
import { ActivityContext } from "../../contexts/ActivitiesContext";

export default function Days() {
  const { days } = useContext(ActivityContext);

  return (
    
    <CsDays>
      {
        days.map(day => <Day key={day.index} day={day} />)
      }
    </CsDays>
  );
}

const CsDays = styled.div`
    display: flex;
    margin-bottom: 20px;
`;