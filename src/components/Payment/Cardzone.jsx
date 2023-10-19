import { styled } from "styled-components";

export function CardZone(){
    return(
        <CsCardZone>
            <div className="exampleCard part">Imagem demonstrativa, acredito que não da pra copiar ou exportar do figma, talvez pegar um da neta aleatório</div>
            <div className="inputs part">
                <input type="number"
                    placeholder="Card Number"
                    className="ipt long"
                />
                <input 
                    type="text" 
                    placeholder="Name"
                    className="ipt long"
                />
                <div className="dateAndCvc ipt">
                    <input 
                        type="number" 
                        placeholder="Date"
                        className="date "
                    />
                    <input 
                        type="number" 
                        placeholder="CVV"
                        className="code "
                    />
                    
                </div>
            </div>
        </CsCardZone>
    )
}

const CsCardZone = styled.div`
    display: flex;
    justify-content: space-between;

    width:80%;
    height: 225px;
    padding: 5%;
    .inputs{
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        gap: auto;
    }
    .part{
        width: 47%;
    }
    .ipt{
        height: 20%;
    }
    .long{
        width: 100%;
    }
    .dateAndCvc{
        display: flex;
        justify-content: space-around;

        .date{
            width: 65%;
        }
        .code{
            width: 27%;
        }
    }
    margin-bottom: 20px;
`;