import { styled } from "styled-components";


export default function SelectedHotel() {
  return (
    <CsSelectedHotel>
        <div className="imgHotel"></div>
        <h2>Driven Resort</h2>

        <h3>Quarto reservado:</h3>
        <p>101 (Double)</p>

        <h3>Pessoas no seu quarto:</h3>
        <p>Você e mais 1</p>
    </CsSelectedHotel>
  );
}

const CsSelectedHotel = styled.div`
    width: 196px;
    height: 264px;
    padding: 1%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-right: 5%;

    .imgHotel{
        width: 100%;
        height: 45%;
    }
`;