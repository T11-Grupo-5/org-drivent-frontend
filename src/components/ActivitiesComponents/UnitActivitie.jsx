import { styled } from 'styled-components';

import StatusActivitie from './StatusActivitie';



export default function UnitActivitie() {

  //OBSERVAR A VARIAVEL "statusActivitie"  
  //E OS VALORES STRINGS 
  //QUE ELA ESTA PREPARADA PARA RECEBER!!
  const statusActivitie = 'registered'; //available, unavailable, registered
  const amountVacancy = 27;

  return (
    <CsUnitActivitie
      backgroundColor={statusActivitie === 'registered' ? '#D0FFDB' : '#f1f1f1'} //99E8A1 //CFCFCF      
    >
      <div className="contentUnit">
        <div className="titleActivitie">Minecraft: montando o PC ideal</div>
        <div className="timeActivitie">09:00 - 10:00</div>
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
  height: 60px;
  padding: 6px;
  border-radius: 5px;

  background-color: ${(p) => p.backgroundColor};

  display: flex;

  font-size: 12px;

  .contentUnit {
    height: 100%;
    width: 75%;
  }
  
`;
