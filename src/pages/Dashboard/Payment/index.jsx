import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ticketServices } from "../../../services/ticketsApi";
import UserContext from "../../../contexts/UserContext";
import { CardContainer } from '../../../components/Payment/cardStage';
import { getPersonalInformations } from "../../../services/enrollmentApi";
import { TicketContext } from "../../../contexts/TicketContext";

export default function Payment() {
  const { userData } = useContext(UserContext);
  const { setTicketId } = useContext(TicketContext);
  const [tickets, setTickets] = useState([])
  const [ticketstype, setTicketType] = useState('')
  const [ticketsReserved, setTicketsReserved] = useState([])
  const [hotelInclude, sethotelInclude] = useState('')
  const [ticketHotel, setticketHotel] = useState('')
  const [corSelect, setcorSelect] = useState('')
  const [reserved, setReserved] = useState(false)
  const [enrrolment, setEnrrolment] = useState(false)
  
  
  useEffect(()=>{
    async function requests(){
      try {
        const checkEnrrolment = await getPersonalInformations(userData.token)
        console.log(checkEnrrolment)
        const promise = await ticketServices.getTickets(userData.token)
        setTickets(promise)
        
      } catch (error) {
        console.log(error.response.data)
        if(error.response.status === 400) {
          setReserved(true)
          setEnrrolment(true)
        }
      }
    }
    requests()
    
  }, [])


  function selectTicket(ticket){
    if(ticket === "presencial"){
      setcorSelect("Presencial")
      setTicketType(
          <>
            <h5>Ótimo! Agora escolha sua modalidade de hospedagem</h5>
            <div className="options">
              <div onClick={()=>{withHotel(0)}} className={hotelInclude === "withoutHotel"? "inPerson option select":"inPerson option"}>Sem Hotel
              <p>+ R$ 0</p>
              </div>
              <div onClick={()=>{withHotel(350)}} className={hotelInclude === "withHotel"? "inPerson option select":"inPerson option"}>Com Hotel
              <p>+ R$ 350</p>
              </div>
            </div>
          </>
      )
    }else {
      setcorSelect("Online")
      setTicketType(
      <div className="container">
        <h5>Fechado! O total ficou em <strong>R$ 100</strong>. Agora é só confirmar:</h5>
        <button onClick={()=>toReserve(100)}>RESERVAR INGRESSO</button>
      </div>
    )}
    setticketHotel('')
   
    console.log(corSelect)
  }

  function withHotel(money){
    let price = 0
    let include = ''
    if(money > 0){    
      include = "withHotel"
      price = money + 250
    }else{ 
      include = "withoutHotel"
      price = 250
    }
    setTicketType(
      <>
        <h5>Ótimo! Agora escolha sua modalidade de hospedagem</h5>
        <div className="options">
          <div onClick={()=>{withHotel(0)}} className={include === "withoutHotel"? "inPerson option select":"inPerson option"}>Sem Hotel
          <p>+ R$ 0</p>
          </div>
          <div onClick={()=>{withHotel(350)}} className={include === "withHotel"? "inPerson option select":"inPerson option"}>Com Hotel
          <p>+ R$ 350</p>
          </div>
        </div>
      </>
    )
    setticketHotel(
      <div className="container">
        <h5>Fechado! O total ficou em R$ <strong>{money + 250}</strong>. Agora é só confirmar:</h5>
        <button onClick={()=>toReserve(price)}>RESERVAR INGRESSO</button>
      </div>
    )
    
  }

  async function toReserve(price){
    console.log(price)
    setReserved(true)
    const ticket = tickets.filter((ticket) => {
      return ticket.price === price
    })
    console.log(ticket)
    console.log(tickets)
    setTicketsReserved(ticket[0])
    setTicketId(await ticketServices.createTicket(userData.token, ticket[0].id));
    console.log(ticket[0])
    //alert('ticket Reservado')
  }
  
  return (
    <CsPayment>
      {reserved === true? (
        enrrolment === false? ( <CardContainer ticket={ticketsReserved} />) : 
        (
        <>
        <h1>Ingresso e pagamento</h1>
        <NoEnrrolment> 
          Você precisa completar sua inscrição antes
          de prosseguir pra escolha de ingresso
        </NoEnrrolment>
        </>)
      )
      
       
      :(
        <>
        <h1>Ingresso e pagamento</h1>
      <div className="container">
        <h5>Primeiro, escolha sua modalidade de ingresso</h5>
          <div className="options">
          <div onClick={()=>{selectTicket("presencial")}} className={corSelect === "Presencial"? "inPerson option select":"inPerson option"}>Presencial
            <p>R$ 250</p>
          </div>
          <div onClick={()=>{selectTicket("online")}} className={corSelect === "Online"? "inPerson option select":"inPerson option"}>Online
            <p>R$ 100</p>
          </div>
        </div>
      </div>
      <div className="container">
        {ticketstype}
      </div>
        {ticketHotel}
        </>
      )}
      
        
    </CsPayment>
  )

}

const NoEnrrolment = styled.div`
  width: 388px;
  margin: 0 auto;
  margin-top: 25%;
  left: 562px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #8E8E8E;

`
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
    :hover{
        cursor: pointer;
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
    .select{
      background-color:#FFEED2;
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

