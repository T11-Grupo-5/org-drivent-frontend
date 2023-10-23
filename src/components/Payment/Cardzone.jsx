import { styled } from "styled-components";
import Cards  from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useContext, useState } from "react";
import { PaymentContext } from "../../contexts/PaymentContext";
import { set } from "date-fns";

export function CardZone() {
    
    const { setPaymentData } = useContext(PaymentContext);
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });
    let cardIssuer = 'Desconhecido';
    

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        
        setState((prev) => ({ ...prev, [name]: value }));

        const newCardData = {
            issuer: cardIssuer,
            number: state.number,
            name: state.name,
            expirationDate: state.expiry,
            cvv: state.cvc,
        }

        setPaymentData((prevData) => ({
            ...prevData,
            cardData : newCardData,
        }));
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }

    const setIssuer = (type) => {
        cardIssuer = type.issuer;
    }

    return (
        <CsCardZone>

            <div className="exampleCard part">
                <Cards
                    number={state.number}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    name={state.name}
                    focused={state.focus}
                    callback={(type) => setIssuer(type)}
                />
            </div>
            <div className="inputs part">
                <input
                    type="number"
                    className="ipt long"
                    placeholder="Card Number"
                    name="number"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <p>Ex.:1234567891234567</p>
                <input
                    type="text"
                    placeholder="Name"
                    className="ipt long"
                    name="name"
                    value={state.name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <div className="dateAndCvc ipt">
                    <input
                        type="number"
                        placeholder="Date"
                        className="date "
                        name="expiry"
                        value={state.expiry}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />
                    <input
                        type="number"
                        placeholder="CVC"
                        className="code "
                        name="cvc"
                        value={state.cvc}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                    />

                </div>
            </div>

        </CsCardZone>
    )
}

const CsCardZone = styled.div`
    display: flex;
    //align-items: center;

    .inputs{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        gap: auto;
        input{
            border-radius: 6px;
        }
        
    }
    .part{
        width: 47%;
    }
    .ipt{
        height: 20%;
    }
    .long{
        width: 100%;
    }
    .dateAndCvc{
        display: flex;
        justify-content: space-between;
        .date{
            width: 65%;
        }
        .code{
            width: 27%;
        }
    }
    margin-bottom: 20px;

    .exampleCard{
        width: inherit;
        margin-right: 40px;
    }
`;