import { styled } from 'styled-components';

export default function UnitActivitie() {
  const EXAMPLE_STATUS = 'registered'; //available, unavailable, registered
  const EXAMPLE_AMOUNT_VACANCY = 27;

  return (
    <CsUnitActivitie
      backgroundColor={EXAMPLE_STATUS === 'registered' ? '#D0FFDB' : '#f1f1f1'} //99E8A1 //CFCFCF
      borderColor={EXAMPLE_STATUS === 'available' ? '#99E8A1' : '#CFCFCF'}
      textColor={EXAMPLE_STATUS === 'unavailable' ? '#CC6666' : '#078632'}
    >
      <div className="contentUnit side">
        <div className="titleActivitie">Minecraft: montando o PC ideal</div>
        <div className="timeActivitie">09:00 - 10:00</div>
      </div>
      <div className="statusActivitie side">
        <div className="iconStatus">
          {EXAMPLE_STATUS === 'unavailable' ? (
            <ion-icon name="close-circle-outline"></ion-icon>
          ) : EXAMPLE_STATUS === 'available' ? (
            <ion-icon name="enter-outline"></ion-icon>
          ) : EXAMPLE_STATUS === 'registered' ? (
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          ) : (
            'STATUS_ERROR'
          )}
        </div>
        <div className="nameStatus">
          {EXAMPLE_STATUS === 'unavailable'
            ? 'Esgotado'
            : EXAMPLE_STATUS === 'available'
            ? `${EXAMPLE_AMOUNT_VACANCY} vagas`
            : EXAMPLE_STATUS === 'registered'
            ? 'Inscrito'
            : 'STATUS_ERROR'}
        </div>
      </div>
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
    width: 75%;
  }
  .statusActivitie {
    width: 25%;
    border-left: 1px solid ${(p) => p.borderColor};

    color: ${(p) => p.textColor};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .side {
    height: 100%;
  }
  .iconStatus {
    font-size: 18px;
  }
`;
