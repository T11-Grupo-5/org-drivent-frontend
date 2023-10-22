import { styled } from "styled-components";
import RoomMold from "./RoomMold";
import { useHotel } from "../../contexts/HotelContext";
import { useState, useEffect } from "react";

export default function ChoiceRoom() {
  const { hotelData, setHotelData } = useHotel();
  const [ roomsData, setRoomsData ] = useState([]);

  useEffect(() => {
    if (hotelData.Rooms) {
      const bookings = hotelData.bookings;
      const sortedRooms = hotelData.Rooms.slice().sort((a, b) => a.name - b.name);
      console.log(sortedRooms);
      for (let i = 0; i < sortedRooms.length; i++) {
        sortedRooms[i].bookings = [];
        for (let j = 0; j < bookings.length; j++) {
          if (sortedRooms[i].id === bookings[j].roomId) {
            sortedRooms[i].bookings.push(bookings[j])
          }
        }
      }

      console.log(sortedRooms);
      console.log('sortedRooms.length',sortedRooms.length)
      setRoomsData(sortedRooms);
    }
  }, [hotelData]);

  return (
    <CsChoiceRoom>
        { roomsData.length > 0
          ? <h1>Ótima pedida, {hotelData.name}! Agora escolha seu quarto:</h1>
          : ''
        }
        <div className="rooms">
          {
            roomsData.map((e, i) => <RoomMold
              key={`${e.name}${i}`}
              number={e.name}
              capacity={e.capacity}
              vacancy={e.capacity - e.bookings.length}
            />)
          }
        </div>
    </CsChoiceRoom>
  );
}

const CsChoiceRoom = styled.div`
  margin-top: 50px;

  & > h1 {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    color: #8E8E8E;
  }

  .rooms{
    margin-top: 35px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px 17px;
  }
`;