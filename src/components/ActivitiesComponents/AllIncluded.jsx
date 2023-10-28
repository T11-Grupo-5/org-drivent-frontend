import { styled } from "styled-components";
import ChooseActivitie from "./ChooseActivitie";

export default function AllIncluded() {
  return (
    <>
      <ChooseActivitie/>
      <CsAllIncluded>
        Sua modalidade de ingresso não necessita escolher <br />
        atividade. Você terá acesso a todas as atividades.
      </CsAllIncluded>
    </>
  );
}

const CsAllIncluded = styled.div`
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