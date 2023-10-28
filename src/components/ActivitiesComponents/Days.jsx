import { styled } from "styled-components";
import Day from "./Day";
import { useContext, useState } from "react";
import { ActivityContext } from "../../contexts/ActivitiesContext";

export default function Days() {
  const { days } = useContext(ActivityContext);

  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    
    <CsDays>
      {
        days.map((day, index) => <Day 
                                    key={index} 
                                    day={day}
                                    index={index} 
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