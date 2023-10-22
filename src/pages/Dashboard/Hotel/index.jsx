import { styled } from "styled-components";
import ChoiceStage from "../../../components/HoteComponents/ChoiseStage";
import MaybeChange from "../../../components/HoteComponents/MaybeChange";



export default function Hotel() {
  return (
    <CsHotel>
      <h1>Escolha de hotel e quarto</h1>
      <ChoiceStage />
      <MaybeChange />
    </CsHotel>
  );
}

const CsHotel = styled.div`
  & > h1 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 34px;
    color: #000000;
  }
`;
