import React, { createContext, useState } from 'react';

export const TicketContext = createContext();

export function TicketProvider({ children }) {
    const [ticketId, setTicketId] = useState();

    return (
        <TicketContext.Provider value={{ ticketId, setTicketId }}>
            {children}
        </TicketContext.Provider>
    );
}

