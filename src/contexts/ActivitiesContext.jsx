import React, { createContext, useState } from 'react';

export const ActivityContext = createContext();

export function ActivityProvider({ children }) {
    const [days, setDays] = useState([{name: 'Segunda, 25/10', id: 1}]);
    

    return (
        <ActivityContext.Provider value={{ days, setDays }}>
            {children}
        </ActivityContext.Provider>
    );
}

