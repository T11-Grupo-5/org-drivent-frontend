import api from './api';

async function getTickets(token) {
  const result = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return result.data
}

async function createTicket(token, ticketTypeId) {
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
}


export const ticketServices = { getTickets, createTicket, getUserTicket };
