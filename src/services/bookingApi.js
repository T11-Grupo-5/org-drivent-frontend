import api from './api';

export async function getBookingsByRoomId(roomId, token) {
  const response = await api.get(`/booking/${roomId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getHotelById(hotelId, token) {
  const response = await api.get(`/hotels/${hotelId}` , {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}