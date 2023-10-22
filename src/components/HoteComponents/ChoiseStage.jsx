import { styled } from "styled-components";
import ChoiceHotel from "./ChoiseHotel";
import ChoiceRoom from "./ChoiseRoom";
import { HotelProvider } from "../../contexts/HotelContext";

export default function ChoiceStage() {

  return (
    <CsChoiceStage>
      <HotelProvider>
        <ChoiceHotel/>
        <ChoiceRoom/>
        <button className="reservation">
          RESERVAR QUARTO
        </button>
      </HotelProvider>
    </CsChoiceStage>
  );
}

const CsChoiceStage = styled.div`
  .reservation {
    margin-top: 30px;
    background: #E0E0E0;
    border: none;
    border-radius: 4px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    width: 182px;
    height: 37px;
    box-shadow: 0px 2px 10px 0px #00000040;
  }
`;