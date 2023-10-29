import api from './api';

async function getActivitiesByDayId(token, id) {
  const result = await api.get(`/activity/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return result.data
}

async function getDays(token) {
  const result = await api.get('/Days', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return result.data
}

async function setEnrollment(token, id) {
  const result = await api.put(`/activity/${id}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return result.data
}

export const activitiesServices = { getActivitiesByDayId, getDays, setEnrollment };
