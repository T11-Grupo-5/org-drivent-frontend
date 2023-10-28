import { styled } from 'styled-components';
import StatusActivitie from './StatusActivitie';
import { useContext } from 'react';
import { ActivityContext } from '../../contexts/ActivitiesContext';
import dayjs from 'dayjs';



export default function UnitActivitie(props) {
  const { activities } = props;
  //console.log(activities)
  const qtdHoras = (dayjs(activities.endTime) - dayjs(activities.startTime)) / 60000;

  //OBSERVAR A VARIAVEL "statusActivitie"  
  //E OS VALORES STRINGS 
  //QUE ELA ESTA PREPARADA PARA RECEBER!!
  const statusActivitie = 'available'; //available, unavailable, registered
  const amountVacancy = 27;


  const semIdeia = new Date(activities.startTime)
  console.log(activities.startTime, 'do jeito que vem do banco')
  console.log(semIdeia, 'da forma com o Date transforma')
  console.log(semIdeia.getHours())
  const formatoBR = new Intl.DateTimeFormat('pt-BR');
  console.log(formatoBR.format(semIdeia));

  function teste() {
    //console.log(activities)
    //console.log(dayjs(activities.startTime).locale('pt-BR').toISOString().slice(11, 16))
    console.log(dayjs(activities.startTime).locale('pt-BR'))
  }

  return (
    <CsUnitActivitie onClick={() => teste()}
      backgroundColor={statusActivitie === 'registered' ? '#D0FFDB' : '#f1f1f1'} //99E8A1 //CFCFCF
      qtdHoras={qtdHoras}
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
  height: calc(1.33px * ${(p) => p.qtdHoras});
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
