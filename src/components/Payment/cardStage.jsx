import { styled } from "styled-components";
import { CardZone } from "./Cardzone";
export function CardContainer() {
    return (
        <CsCardContainer>
            <div className="container">
                <h5>Ingresso escolhido</h5>
                <div className="content">
                    <p className="negrito">Presencial + Com Hotel</p>
                    <p>R$ 600</p>
                </div>
            </div>
            <div className="container">
                <h5>Pagamento</h5>
                <CardZone/>
            </div>
            <button>FINALIZAR PAGAMENTO</button>
        </CsCardContainer>
    );
}

const CsCardContainer = styled.div`
    border: 1px solid red;
    *{
        border: 1px solid red;
    }
    .content{
        width: 290px;
        height: 108px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;