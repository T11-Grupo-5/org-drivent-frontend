import { styled } from "styled-components";
import Day from "./Day";
import { useContext, useState } from "react";
import { ActivityContext } from "../../contexts/ActivitiesContext";
import dayjs from "dayjs";

export default function Days() {
  const { days } = useContext(ActivityContext);

  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (

    <CsDays>
      {
        days.map((day) => <Day
          key={day.id}
          dayName={`${day.dayName}, ${dayjs(day.date).format('DD/MM')}`}
          index={day.id}
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />)
      }
    </CsDays>
  );
}

const CsDays = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
