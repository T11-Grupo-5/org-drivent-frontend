import { styled } from "styled-components";
import UnitActivitie from "./UnitActivitie";



export default function ActivitiesContainer(props) {
  const { activities } = props;


  if(!activities)return ''
  return (
    <CsActivitiesContainer>
     { 
     activities.map((act, index) => <UnitActivitie key={index} activities={act} />)
     }
    </CsActivitiesContainer>
  );
}

const CsActivitiesContainer = styled.div`
    padding: 10px;
    border: 1px solid #D7D7D7;
    width: 100%;
    height: 500px;
    overflow: auto;
    margin-bottom: 20px;
`;