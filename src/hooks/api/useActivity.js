import useToken from '../useToken';
import * as activityApi from '../../services/activityApi';

export default async function useHall(dayId) {
  const token = useToken();

  try {
    const halls = await activityApi.getHallsByDayId(token, dayId);
    return halls;
  } catch (error) {
    console.error('Erro ao buscar os locais (halls):', error);
    return null;
  }
}
