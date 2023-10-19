import { styled } from "styled-components";
import HotelMold from "./HotelMold";
export default function MaybeChange() {
  return (
    <CsMaybeChange>
      <h1>Você já escolheu seu quarto:</h1>
      <HotelMold/>
      <button>TROCAR DE QUARTO</button>
    </CsMaybeChange>
  );
}

const CsMaybeChange = styled.div`
  border: 1px solid;
  *{
  border: 1px solid;
  }
`;