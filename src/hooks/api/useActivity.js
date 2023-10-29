import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useHall(dayId) {
    const token = useToken()
  const {
    data: halls,
    loading: hallLoading,
    error: hallError,
  } = useAsync(activityApi.getHallsByDayId(token, dayId));

  return {
    halls,
    hallLoading,
    hallError,
  };
}