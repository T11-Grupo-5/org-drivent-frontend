import { styled } from "styled-components";
import RoomMold from "./RoomMold";

export default function ChoiceRoom() {
  return (
    <CsChoiceRoom>
        <h1>Ótima pedida! Agora escolha seu quarto:</h1>
        <div className="rooms">
          <RoomMold number={101} capacity={2} vacancy={2} />
          <RoomMold number={102} capacity={2} vacancy={2} />
          <RoomMold number={103} capacity={2} vacancy={0} />            
          <RoomMold number={104} capacity={1} vacancy={1} />
          <RoomMold number={105} capacity={3} vacancy={1} />
          <RoomMold number={106} capacity={1} vacancy={1} />
          <RoomMold number={107} capacity={2} vacancy={1} />
          <RoomMold number={108} capacity={3} vacancy={3} />
          <RoomMold number={109} capacity={3} vacancy={2} />
        </div>
    </CsChoiceRoom>
  );
}

const CsChoiceRoom = styled.div`
  .rooms{
    display: flex;
    flex-wrap: wrap;
  }
`;