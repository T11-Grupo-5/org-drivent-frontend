import { styled } from "styled-components";


export default function HotelMold() {
  return (
    <CsHotelMold>
        <div className="imgHotel"></div>
        <h2>Driven Resort</h2>

        <h3>Tipos de acomodação:</h3>
        <p>Single e Double</p>

        <h3>Vagas disponíveis:</h3>
        <p>103</p>
    </CsHotelMold>
  );
}

const CsHotelMold = styled.div`
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