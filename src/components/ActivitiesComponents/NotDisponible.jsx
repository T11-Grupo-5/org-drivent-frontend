import { styled } from "styled-components";
import ChooseActivitie from "./ChooseActivitie";

export default function NotDisponible() {
  return (
    <>
      <ChooseActivitie/>
      <CsNotDisponible>
        Você precisa ter confirmado pagamento antes <br />
        de fazer a escolha de atividades
      </CsNotDisponible>
    </>
  );
}

const CsNotDisponible = styled.div`
    //border: 10px solid red;
    height: calc(100% - 70px);
    //height: 100px;
    display: flex;
    //flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    color: #8E8E8E;
    text-align: center;

`;