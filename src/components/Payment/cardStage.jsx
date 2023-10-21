import { styled } from "styled-components";
import { CardZone } from "./Cardzone";
import { ConfirmationNotice } from "./ConfirmationNotice";


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

// componente de compra de ticket confirmado <ConfirmationNotice/>

const CsCardContainer = styled.div`
   
    
    .content{
        width: 290px;
        height: 108px;
        border-radius: 20px;
        background-color: #FFEED2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;