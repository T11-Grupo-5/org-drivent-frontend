import styled from 'styled-components';
import { CardContainer } from '../../../components/Payment/cardStage';
export default function Payment() {
  return (
    <CsPayment>
      <h1>Ingresso e pagamento</h1>

      <div className="paymentStage">
        <div className="container">
          <h5>Primeiro, escolha sua modalidade de ingresso</h5>
          <div className="options">
            <div className="inPerson option">presencial
            <p>R$ 250</p>
            </div>
            <div className="online option">online
            <p>R$ 100</p>
            </div>
          </div>
        </div>
        <div className="container">
          <h5>Ótimo! Agora escolha sua modalidade de hospedagem</h5>
          <div className="options">
            <div className="inPerson option">Sem Hotel
            <p>+ R$ 0</p>
            </div>
            <div className="online option">Com Hotel
            <p>+ R$ 350</p>
            </div>
          </div>
        </div>
        <div className="container">
          <h5>Fechado! O total ficou em R$ 600. Agora é só confirmar:</h5>
          <button>RESERVAR INGRESSO</button>
        </div>
        
      </div>
      <CardContainer/>
    </CsPayment>
  )

}

const CsPayment = styled.div`
  border : 1px solid black;
  *{
    border : 1px solid black;
  }
  width: 100%;
  height:100%;
  //  padding: 5%;
  .container{
    margin-top:20px;
    h5{
      margin-bottom:20px;
    }
  }
  .options{
    display: flex;
    justify-content: space-between;
    width: 40%;

    .option{
      width: 145px;
      height: 145px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
