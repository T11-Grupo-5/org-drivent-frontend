import api from './api';

 async function getTickets(token){
    const result = await api.get('/tickets/types', {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
    return result.data

}   


export const ticketServices = {getTickets};
