import api from './api';

export async function getHallsByDayId(token, dayId) {
  const response = await api.get(`/activity/halls/${dayId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
