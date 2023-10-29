import { styled } from 'styled-components';
import StatusActivitie from './StatusActivitie';
import { useContext } from 'react';
import { ActivityContext } from '../../contexts/ActivitiesContext';
import dayjs from 'dayjs';



export default function UnitActivitie(props) {
  const { activities } = props;
  //console.log(activities)
  
  const lengthDiv = () =>{
    const miliSecondForSecond = 60000;
    const spaceBetween = 10
    const qtdMinutes = (dayjs(activities.endTime) - dayjs(activities.startTime)) / miliSecondForSecond;
    const qntHalfHours = Math.ceil(qtdMinutes/30)
    const sumLengthSpaces = qntHalfHours*35
    const sumlLengthSpaceBetween = (qntHalfHours-1)*spaceBetween
    const tamanhoDiv = sumLengthSpaces + sumlLengthSpaceBetween
    return tamanhoDiv;
  }


  //OBSERVAR A VARIAVEL "statusActivitie"  
  //E OS VALORES STRINGS 
  //QUE ELA ESTA PREPARADA PARA RECEBER!!
  const statusActivitie = 'available'; //available, unavailable, registered
  const amountVacancy = 27;



  function teste() {
    //console.log(activities)
    //console.log(dayjs(activities.startTime).locale('pt-BR').toISOString().slice(11, 16))
    console.log(dayjs(activities.startTime).locale('pt-BR'))
  }

  return (
    <CsUnitActivitie onClick={() => teste()}
      backgroundColor={statusActivitie === 'registered' ? '#D0FFDB' : '#f1f1f1'} //99E8A1 //CFCFCF
      lengthDiv={lengthDiv}
    >
      <div className="contentUnit">
        <div className="titleActivitie">{activities.name}</div>
        <div className="timeActivitie">{dayjs(activities.startTime).toISOString().slice(11, 16)} - {dayjs(activities.endTime).toISOString().slice(11, 16)}</div>
      </div>
      <StatusActivitie
        statusActivitie={statusActivitie}
        amountVacancy={amountVacancy}
      />
    </CsUnitActivitie>
  );
}

const CsUnitActivitie = styled.div`
  width: 100%;
  height: ${(p) => p.lengthDiv}px;
  padding: 6px;
  border-radius: 5px;
  background-color: ${(p) => p.backgroundColor};
  display: flex;
  font-size: 12px;
  margin-bottom: 10px;
  .contentUnit {
    height: 100%;
    width: 75%;
  }
`;
