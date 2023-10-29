import React, { createContext, useState } from 'react';

export const ActivityContext = createContext();

export function ActivityProvider({ children }) {
  const [days, setDays] = useState(['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']);

  return <ActivityContext.Provider value={{ days, setDays }}>{children}</ActivityContext.Provider>;
}
