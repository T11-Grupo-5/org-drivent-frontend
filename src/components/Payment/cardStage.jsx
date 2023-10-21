import { styled } from "styled-components";
import { CardZone } from "./Cardzone";
import { ConfirmationNotice } from "./ConfirmationNotice";


export function CardContainer() {
    return (
        <CsCardContainer>
            <div className="container">
                <h5>Ingresso escolhido</h5>
                <div className="content bege">
                    <p className="negrito">Presencial + Com Hotel</p>
                    <p>R$ 600</p>
                </div>
            </div>
            <form className="container">
                <h5>Pagamento</h5>
                <CardZone />
                <button>FINALIZAR PAGAMENTO</button>
            </form>


            <ConfirmationNotice />
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
    .bege{
        background-color: #FFEED2;
        border-radius: 20px;
    }
    p{
        color: #898989;
    }
    .negrito{
        color: #454545;
        font-weight: bold;
    }
    button{
        background-color: #E0E0E0;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;
        color: #000000;
    }
`;