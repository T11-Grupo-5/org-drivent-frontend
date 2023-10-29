import { useContext, useState } from "react";
import { styled } from "styled-components";
import { ActivityContext } from "../../contexts/ActivitiesContext";
import { activitiesServices } from "../../services/activitiesApi";
import UserContext from "../../contexts/UserContext";

export default function Day(props) {
  const { dayName, handleButtonClick, index, activeButton } = props;
  const { setDay, setDayId } = useContext(ActivityContext);
  const { userData } = useContext(UserContext);

  async function getActivities(id) {
    handleButtonClick(index)
    const activities = await activitiesServices.getActivitiesByDayId(userData.token, id);
    setDay(activities);
    setDayId(id);
  }

  return (
    <CsDay
      onClick={() => getActivities(index)}
      selected={activeButton === index ? '#FFD37D' : '#E0E0E0'}
    >
      {dayName}
    </CsDay>
  );
}

const CsDay = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 131px;
    height: 37px;
    margin: 0.5%;
    background-color: ${(p) => p.selected};
    border-radius: 4px;
    cursor: pointer;
`;