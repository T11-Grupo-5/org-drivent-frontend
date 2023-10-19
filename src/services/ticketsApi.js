import api from './api';

 async function geTickets(token){
    const result = await api.get('/tickets/types', {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
    return result

}   


export const ticketServices = {geTickets};
