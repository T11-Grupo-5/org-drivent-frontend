import React, { createContext, useState } from 'react';

export const ActivityContext = createContext();

export function ActivityProvider({ children }) {
  const [days, setDays] = useState([]);
  const [day, setDay] = useState([]);
  const [dayId, setDayId] = useState();
  const [activitiesHours, setActivitiesHours] = useState([]);

  return (
    <ActivityContext.Provider value={{ days, setDays, day, setDay, dayId, setDayId, activitiesHours, setActivitiesHours }}>
      {children}
    </ActivityContext.Provider>
  );
}
