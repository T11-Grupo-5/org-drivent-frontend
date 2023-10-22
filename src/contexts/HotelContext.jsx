import React, { createContext, useContext, useState } from 'react';

const HotelContext = createContext();

export function HotelProvider({ children }) {
    const [hotelData, setHotelData] = useState([]);

    return (
        <HotelContext.Provider value={{ hotelData, setHotelData }}>
            {children}
        </HotelContext.Provider>
    );
}

export function useHotel() {
    return useContext(HotelContext);
}
