import { styled } from 'styled-components';
import MoldPlaces from './MoldPlaces';
import { useContext, useEffect, useState } from 'react';

import useHall from '../../hooks/api/useActivity';
import UserContext from '../../contexts/UserContext';

export default function PlacesActivities() {
  const [halls, setHalls] = useState('carregando...');
  const { userData } = useContext(UserContext);
  

  async function fetchData() {
    try {
      const hallData = await useHall(1, userData.token);
      setHalls(hallData);
      console.log(hallData);
    } catch (error) {
      console.error('Erro ao buscar os locais (halls):', error);
    }
  }
  useEffect(() => {fetchData()}, []);

  if(halls==='carregando...')return halls;
  return (
    <CsPlacesActivities>
      {halls.map((hall, index) => (
        <MoldPlaces key={index} placeName={hall.name} activities={hall.Activities} />
      ))}
    </CsPlacesActivities>
  );
}

const CsPlacesActivities = styled.div`
  display: flex;
`;
