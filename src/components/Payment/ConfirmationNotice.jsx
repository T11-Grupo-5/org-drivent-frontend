import { styled } from "styled-components";

export function ConfirmationNotice() {
    return (
        <CsConfirmationNotice>
            <div className="green">
                <ion-icon name="checkmark-circle-sharp"></ion-icon>
            </div>
            <div className="text">
                <div className="bold">
                    Pagamento confirmado!
                </div>
                <div className="normal">
                    Prossiga para escolha de hospedagem e atividades
                </div>
            </div>


        </CsConfirmationNotice>
    )
}

const CsConfirmationNotice = styled.div`
    display: flex;
    align-items: center;
    //justify-content: center;
   .green{
    color: #36B853;
    font-size: 40px;
    display: flex;
    align-items: center;
   }
   .bold{
    font-weight: 700;
   }
   .normal{
    font-weight: 400;

   }
`;