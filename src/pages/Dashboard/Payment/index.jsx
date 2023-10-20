import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ticketServices } from "../../../services/ticketsApi";
import UserContext from "../../../contexts/UserContext";
import { CardContainer } from '../../../components/Payment/cardStage';



export default function Payment() {
  const { userData } = useContext(UserContext);
  const [tickets, setTickets] = useState([])
  const [ticketstype, setTicketType] = useState('')
  const [selectTickets, setSelectTickets] = useState(false)
  const [hotelInclude, sethotelInclude] = useState('')
  
  useEffect(async()=>{
    try {
      const promise = await ticketServices.geTickets(userData.token)
      setTickets(promise.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }, [])

  function selectTicket(ticket){
    if(ticket === "presencial"){
      setTicketType(
          <>
            <h5>Ótimo! Agora escolha sua modalidade de hospedagem</h5>
            <div className="options">
              <div onClick={()=>{withHotel(0)}} className="inPerson option">Sem Hotel
              <p>+ R$ 0</p>
              </div>
              <div onClick={()=>{withHotel(350)}} className="online option">Com Hotel
              <p>+ R$ 350</p>
              </div>
            </div>
          </>
      )
    }else {
      setTicketType(
      <div className="container">
        <h5>Fechado! O total ficou em <strong>R$ 100</strong>. Agora é só confirmar:</h5>
        <button onClick={()=>toReserve(100)}>RESERVAR INGRESSO</button>
      </div>
    )}
    sethotelInclude('')
    console.log(ticket)
  }

  function withHotel(money){
    let price = 0
    if(money > 0){
      price = money + 250
    }else{
      price = 250
    }
      
      sethotelInclude(
      <div className="container">
        <h5>Fechado! O total ficou em R$ <strong>{money + 250}</strong>. Agora é só confirmar:</h5>
        <button onClick={()=>toReserve(price)}>RESERVAR INGRESSO</button>
      </div>
    )
  }
  function toReserve(price){
    console.log(tickets)
    
    const ticket = tickets.filter((ticket) => {
      return ticket.price === price
    })
    console.log(ticket)
    alert('ticket Reservado')
    }

  return (
    <CsPayment>
      <h1>Ingresso e pagamento</h1>

      <div className="container">
        <h5>Primeiro, escolha sua modalidade de ingresso</h5>
          <div className="options">
          <div onClick={()=>{selectTicket("presencial")}} className="inPerson option">Presencial
            <p>R$ 250</p>
          </div>
          <div onClick={()=>{selectTicket("online")}} className="inPerson option">Online
            <p>R$ 100</p>
          </div>
        </div>
      </div>
      <div className="container">
        {ticketstype}
      </div>
        {hotelInclude}
        <CardContainer/>
    </CsPayment>
  )

}


const CsPayment = styled.div`
  //border : 1px solid black;
  *{
    //border : 1px solid black;
  }
  width: 100%;
  height:100%;
  //  padding: 5%;
  h1{
    font-family: Roboto;
    font-size: 34px;
    font-weight: 40px;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
  }
  
  .container{
    margin-top:20px;
    h5{
      margin-bottom:20px;
      color: #8E8E8E;
      font-family: Roboto;
      font-size: 20px;
      font-weight: 40px;
    }
  }
  .options{
    display: flex;
    div{
      margin-right: 20px; 
    }
    font-size: 16px;
    p{
      font-size: 14px;
      color: #898989;
    }
    .option{
      width: 145px;
      height: 145px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid #CECECE;
      border-radius: 20px;
    }
  }
  button{
      width: 162px;
      height: 37px;
      border-radius: 4px;
      border: inherit;
      background-color: #DDDDDD;
      box-shadow: 0px 4px 10px 0px #00000040;

    }
`;

