import api from './api';

export async function getHallsByDayId(token, dayId) {
  const response = await api.get(`/activity/halls/${dayId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  return response.data;
}

/* async function createTicket(token, ticketTypeId) {
  const result = await api.post('/tickets', {ticketTypeId}, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return result.data
}

async function getUserTicket(token) {
  const result = await api.get('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return result.data
} */

