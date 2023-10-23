import { styled } from "styled-components";
import { CardZone } from "./Cardzone";
import { useContext, useEffect, useState } from "react";
import { PaymentContext } from "../../contexts/PaymentContext";
import { set } from "date-fns";
import useSavePayment from "../../hooks/api/useSavePayment";
import { ConfirmationNotice } from "./ConfirmationNotice";
import { TicketContext } from "../../contexts/TicketContext";


export function CardContainer(ticket) {
    const { paymentData, setPaymentData } = useContext(PaymentContext);
    const { savePaymentLoading, savePayment } = useSavePayment();
    const { ticketId } = useContext(TicketContext)

    async function setPayment() {
        console.log(paymentData);
        delete (paymentData.status)
        try {
            await savePayment(paymentData);
            setPaymentData((prevData) => ({
                ...prevData,
                status: 'PAID',
            }));
        } catch (err) {
            console.log(err.response.data.message)
            toast('Não foi possível realizar o pagamento!');
        }
        //   setPaymentData((prevData) => ({
        //     ...prevData,
        //     status: 'PAID',
        // }));
    }

    useEffect(() => {
        console.log('ticket', ticketId)
        if (ticketId) {
            setPaymentData((prevData) => ({
                ...prevData,
                ticketId: ticketId.id,
            }));
        }
    }
        , [ticketId])
    return (
        <CsCardContainer>
            <h1>Ingresso e pagamento</h1>
            <div className="container">
                <h5>Ingresso escolhido</h5>
                <div className="content">
                    <p className="negrito">{ticket.ticket.name}{ticket.ticket.includesHotel === true ? ' + Com Hotel' : ''}</p>
                    <p>R$ {ticket.ticket.price}</p>
                </div>
            </div>
            <div className="container">
                <h5>Pagamento</h5>
                {paymentData.status === 'PAID' ? (
                    <ConfirmationNotice />
                ) : (
                    <>
                        <CardZone />
                        <button className="payment" onClick={() => setPayment()}>FINALIZAR PAGAMENTO</button>
                    </>
                )}

            </div>

        </CsCardContainer>
    );
}

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
    .payment {
    background-color: #E0E0E0;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    color: #000000;
    width: max-content;
    height: 37px;
    }

    button:hover {
        cursor: pointer;
    }
`;