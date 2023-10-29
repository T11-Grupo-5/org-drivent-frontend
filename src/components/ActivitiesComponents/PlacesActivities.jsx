import { styled } from 'styled-components';
import MoldPlaces from './MoldPlaces';
import { useEffect, useState } from 'react';

import useHall from '../../hooks/api/useActivity';

export default function PlacesActivities() {
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const hallData = await useHall(1);
        setHalls(hallData);
        console.log(hallData);
      } catch (error) {
        console.error('Erro ao buscar os locais (halls):', error);
      }
    }

    fetchData();
  }, []);

  return (
    <CsPlacesActivities>
      {halls.map((hall, index) => (
        <MoldPlaces key={index} placeName={hall.name} activities={hall.activities} />
      ))}
    </CsPlacesActivities>
  );
}

const CsPlacesActivities = styled.div`
  display: flex;
`;
