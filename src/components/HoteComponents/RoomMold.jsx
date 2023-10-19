import { styled } from "styled-components";

export default function RoomMold() {
    return (
        <CsRoomMold>
            <p>101</p>
            <div className="amountZone">
                <div className="normal">
                    <ion-icon name="person-outline"></ion-icon>
                </div>
                <div className="black">
                    <ion-icon name="person"></ion-icon>
                </div>
                <div className="red">
                    <ion-icon name="person" className='red'></ion-icon>
                </div>
            </div>
        </CsRoomMold>
    );
}

const CsRoomMold = styled.div`
    display: flex;
    justify-content: space-between;

    width: 20%;
    margin: 2%;

    border: 1px solid;
    .red{
        color: red;
    }
    .black{
        color: black;
    }
    .amountZone{
        display: flex;
    }
`;