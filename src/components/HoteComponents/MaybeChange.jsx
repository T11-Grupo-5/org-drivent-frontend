import { styled } from "styled-components";
import SelectedHotel from "./SelectedHotel";

export default function MaybeChange() {
  return (
    <CsMaybeChange>
      <h1>Você já escolheu seu quarto:</h1>
      <SelectedHotel/>
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