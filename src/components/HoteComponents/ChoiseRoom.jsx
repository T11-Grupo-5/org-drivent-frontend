import { styled } from "styled-components";
import RoomMold from "./RoomMold";

export default function ChoiceRoom() {
  return (
    <CsChoiceRoom>
        <h1>Ótima pedida! Agora escolha seu quarto:</h1>
        <div className="rooms">
          <RoomMold/>
          <RoomMold/>
          <RoomMold/>
          <RoomMold/>
          <RoomMold/>
          <RoomMold/>
          <RoomMold/>
          <RoomMold/>
          <RoomMold/>
          <RoomMold/>
          <RoomMold/>
        </div>
    </CsChoiceRoom>
  );
}

const CsChoiceRoom = styled.div`
  .rooms{
    display: flex;
    flex-wrap: wrap;
    //justify-content: space-between;
  }
`;