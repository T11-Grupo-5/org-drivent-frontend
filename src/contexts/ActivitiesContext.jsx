import React, { createContext, useState } from 'react';

export const ActivityContext = createContext();

export function ActivityProvider({ children }) {
    const [days, setDays] = useState(['Segunda, 25/10', 'Terça, 26/10', 'Quarta, 27/10', 'Quinta, 28/10', 'Sexta, 29/10']);
    const [day, setDay] = useState([
        {
          "id": 1,
          "name": "Aula de C++",
          "capacity": 2,
          "startTime": "1970-01-01T00:00:00.000Z",
          "endTime": "1970-01-01T01:00:00.000Z",
          "halllId": 1,
          "createdAt": "2023-10-26T19:14:05.145Z",
          "updatedAt": "2023-10-26T19:06:42.803Z",
          "Users": [
            {
              "id": 1
            }
          ]
        },
        {
          "id": 2,
          "name": "Aula de MySQL",
          "capacity": 1,
          "startTime": "1970-01-01T00:00:00.000Z",
          "endTime": "1970-01-01T01:00:00.000Z",
          "halllId": 3,
          "createdAt": "2023-10-26T19:14:05.146Z",
          "updatedAt": "2023-10-27T19:37:59.277Z",
          "Users": []
        }
      ]);

    return (
        <ActivityContext.Provider value={{ days, setDays, day, setDay }}>
            {children}
        </ActivityContext.Provider>
    );
}

