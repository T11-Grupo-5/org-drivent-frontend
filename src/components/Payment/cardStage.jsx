import { styled } from "styled-components";
import { CardZone } from "./Cardzone";


export function CardContainer(ticket) {
    console.log(ticket.ticket.name)
    return (
        <CsCardContainer>
            <h1>Ingresso e pagamento</h1>
            <div className="container">
                <h5>Ingresso escolhido</h5>
                <div className="content">
                    <p className="negrito">{ticket.ticket.name}{ticket.ticket.includesHotel === true? ' + Com Hotel':''}</p>
                    <p>R$ {ticket.ticket.price}</p>
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