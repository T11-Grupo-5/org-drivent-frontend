import { styled } from "styled-components";
import HotelMold from "./HotelMold";


export default function ChoiceHotel() {
  return (
    <CsChoiceHotel>
        <h1>Primeiro, escolha seu hotel</h1>
        <div className="hotels">
            <HotelMold/>
            <HotelMold/>
            <HotelMold/>
        </div>
    </CsChoiceHotel>
  );
}

const CsChoiceHotel = styled.div`
    border: 1px solid;
    *{
        border: 1px solid;
    }

    .hotels{
        display: flex;
        flex-wrap: wrap;
    }

`;