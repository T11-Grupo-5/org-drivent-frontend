import { styled } from "styled-components";


export default function HotelMold({ name, image, acomodationTypes, vacancy }) {
  return (
    <CsHotelMold>
        <div className="imgHotel">
          <img src={image} />
        </div>
        <h2>{name}</h2>

        <h3>Tipos de acomodação:</h3>
        <p>{acomodationTypes}</p>

        <h3>Vagas disponíveis:</h3>
        <p>{vacancy}</p>
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

    background-color: #EBEBEB;
    border-radius: 10px;

    .imgHotel{
      width: 100%;
      height: 45%;
      border-radius: 5px;
      overflow: hidden;
      
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    h2 {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 20px;
      color: #343434;
    }

    h3 {
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 12px;
      color: #3C3C3C;
    }   

    p {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 12px;
      color: #3C3C3C;
    }   
`;