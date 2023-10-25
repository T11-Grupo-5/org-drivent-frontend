import { styled } from "styled-components";
import NotDisponible from "../../../components/ActivitiesComponents/NotDisponible";
import AllIncluded from "../../../components/ActivitiesComponents/AllIncluded";
import AvailableActivities from "../../../components/ActivitiesComponents/AvailableActivities";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../../contexts/UserContext";
import { ticketServices } from "../../../services/ticketsApi";
import ActivitiesContainer from "../../../components/ActivitiesComponents/ActivitiesContainer";

export default function Activities() {
  const { userData } = useContext(UserContext);
  const [ticket, setTicket] = useState();
  const [ticketStatus, setTicketStatus] = useState()
  const [isRemote, setIsRemote] = useState()
  const [events, setEvents] = useState()

  async function getTicket() {
    try {
      const ticket = await ticketServices.getUserTicket(userData.token)
      setTicket(ticket);
      setTicketStatus(ticket.status);
      setIsRemote(ticket.TicketType.isRemote);
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    getTicket();
  }, [])

  return (
    <>
      {
        (ticket === undefined || ticketStatus === 'RESERVED') ? <NotDisponible /> : (
          isRemote ? <AllIncluded /> :
            <CsActivities>
              <h1>Escolha de Atividades</h1>
              <AvailableActivities/>
            </CsActivities>
        )
      }
    </>
  );
}

const CsActivities = styled.div`
    width: 100%;
    height: 100%;
  h1{
    font-family: Roboto;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 30px;
  }
`;