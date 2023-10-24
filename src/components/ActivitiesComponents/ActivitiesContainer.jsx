import { styled } from "styled-components";
import UnitActivitie from "./UnitActivitie";



export default function ActivitiesContainer() {
   
  return (
    <CsActivitiesContainer>
        <UnitActivitie/>
    </CsActivitiesContainer>
  );
}

const CsActivitiesContainer = styled.div`
    padding: 10px;

    border: 1px solid #D7D7D7;
    width: 100%;
    
`;