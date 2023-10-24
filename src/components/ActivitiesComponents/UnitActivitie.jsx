import { styled } from "styled-components";

export default function UnitActivitie() {
   
  return (
    <CsUnitActivitie>
        <div className="contentUnit side">
            <div className="titleActivitie">
            Minecraft: montando o PC ideal
            </div>
            <div className="timeActivitie">
            09:00 - 10:00
            </div>
        </div>
        <div className="statusActivitie side">
            <div className="iconStatus">
                <ion-icon name="close-circle-outline"></ion-icon>
            </div>
            <div className="nameStatus">Esgotado</div>
        </div>
    </CsUnitActivitie>
  );
}

const CsUnitActivitie = styled.div`
   width: 100%; 
   height: 60px;
   padding: 6px;
   border-radius: 5px;

   background-color: #f1f1f1;

   display: flex;

   font-size: 12px;

   .contentUnit{
    width: 75%;
   }
   .statusActivitie{
    width: 25%;
    border-left: 1px solid #CFCFCF;

    color: red;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
   .side{
    height: 100%;
   }

`;