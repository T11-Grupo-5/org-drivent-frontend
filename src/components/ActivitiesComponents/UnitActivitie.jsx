import { styled } from 'styled-components';
import StatusActivitie from './StatusActivitie';
import { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import UserContext from '../../contexts/UserContext';

export default function UnitActivitie(props) {
  const { activities } = props;
  const { userData } = useContext(UserContext);
  const [statusActivitie, setStatusActivitie] = useState(); //available, unavailable, registered
  const [amountVacancy, setAmountVacancy] = useState()
  //console.log(activities)
  
  const lengthdiv = () =>{
    const miliSecondForMinute = 60000;
    const spaceBetween = 10
    const qtdMinutes = (dayjs(activities.endTime) - dayjs(activities.startTime)) / miliSecondForMinute;
    const qntHalfHours = Math.ceil(qtdMinutes/30)
    const sumLengthSpaces = qntHalfHours*35
    const sumlLengthSpaceBetween = (qntHalfHours-1)*spaceBetween
    const tamanhoDiv = sumLengthSpaces + sumlLengthSpaceBetween
    return tamanhoDiv;
  }


  useEffect(() => {
    if (activities.Users.filter(elem => elem.id === userData.user.id).length > 0) {
      setStatusActivitie('registered')
    } else if (activities.capacity > activities.Users.length) {
      setStatusActivitie('available')
    } else {
      setStatusActivitie('unavailable')
    }
    
    setAmountVacancy(activities.capacity - activities.Users.length)
  }, [activities])

  //const qtdMinutos = (dayjs(activities.endTime) - dayjs(activities.startTime)) / 60000;

  return (
    <CsUnitActivitie 
      backgroundcolor={statusActivitie === 'registered' ? '#D0FFDB' : '#f1f1f1'} //99E8A1 //CFCFCF
      lengthdiv={lengthdiv()}
    >
      <div className="contentUnit">
        <div className="titleActivitie">{activities.name}</div>
        <div className="timeActivitie">{dayjs(activities.startTime).toISOString().slice(11, 16)} - {dayjs(activities.endTime).toISOString().slice(11, 16)}</div>
      </div>
      <StatusActivitie
        statusActivitie={statusActivitie}
        amountVacancy={amountVacancy}
        activityId={activities.id}
        token={userData.token}
        activities={activities}
      />
    </CsUnitActivitie>
  );
}

const CsUnitActivitie = styled.div`
  width: 100%;
  //height: calc(1.33px * ${(p) => p.qtdminutos});
  height: ${(p) => p.lengthdiv}px;
  padding: 6px;
  border-radius: 5px;
  background-color: ${(p) => p.backgroundcolor};
  display: flex;
  font-size: 12px;
  margin-bottom: 10px;
  .contentUnit {
    height: 100%;
    width: 75%;
  }
`;
