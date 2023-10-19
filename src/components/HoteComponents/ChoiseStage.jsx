import { styled } from "styled-components";
import ChoiceHotel from "./ChoiseHotel";
import ChoiceRoom from "./ChoiseRoom";



export default function ChoiceStage() {
  return (
    <CsChoiceStage>
        <ChoiceHotel/>
        <ChoiceRoom/>
    </CsChoiceStage>
  );
}

const CsChoiceStage = styled.div`

`;