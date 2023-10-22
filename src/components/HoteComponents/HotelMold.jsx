import { styled } from "styled-components";
import { useHotel } from "../../contexts/HotelContext";

export default function HotelMold({ name, image, acomodationTypes, vacancy, handleHotel, hotel }) {
  const { hotelData, setHotelData } = useHotel();

  return (
    <CsHotelMold onClick={() => setHotelData(hotel)}>
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
    padding: 14px;

    display: flex;
    flex-direction: column;

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
      margin-top: 14px;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 20px;
      color: #343434;
    }

    h3 {
      margin-top: 15px;
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 12px;
      color: #3C3C3C;
    }   

    p {
      margin-top: 5px;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 12px;
      color: #3C3C3C;
    }   
`;