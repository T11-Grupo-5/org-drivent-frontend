import { styled } from "styled-components";
import { BsPerson, BsFillPersonFill } from "react-icons/bs";

export default function RoomMold({ number, capacity, vacancy }) {
    const amountZone = [];

    for(let i = 1; i <= capacity; i++) {
        if (i <= vacancy) {
            amountZone.push(
                <div key={`${number}${i}`} className="empty">
                    <BsPerson size={27} />
                </div>
            );
        } else {
            amountZone.push(
                <div key={`${number}${i}`} className="filled">
                    <BsFillPersonFill size={27} />
                </div>
            );
        }
    }

    return (
        <CsRoomMold className={`container ${vacancy === 0 && 'filled'}`}>
            <p>{number}</p>
            <div className={`amountZone ${vacancy === 0 && 'filled'}`}>
                {amountZone}
            </div>
        </CsRoomMold>
    );
}

const CsRoomMold = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 190px;
    height: 45px;

    border: 1px solid #CECECE;
    border-radius: 10px;
    padding: 5px 10px 5px 16px;

    p {
        font-family: Roboto;
        font-size: 20px;
        font-weight: 700;
        color: #454545;
    }

    &.filled {
        background-color: #E9E9E9;

        p {
            color: #9D9D9D;
        }

        svg {
            color: #8C8C8C
        }
    }
    
    .amountZone{
        display: flex;
        color: #000000;
    }
`;