import React, { createContext, useState } from 'react';

export const PaymentContext = createContext();

export function PaymentProvider({ children }) {
    const [paymentData, setPaymentData] = useState({
        ticketId: '',
        cardData: {
            issuer: '',
            number: '',
            name: '',
            expirationDate: '',
            cvv: '',
        },
        status: 'PENDING',
    });

    return (
        <PaymentContext.Provider value={{ paymentData, setPaymentData }}>
            {children}
        </PaymentContext.Provider>
    );
}

