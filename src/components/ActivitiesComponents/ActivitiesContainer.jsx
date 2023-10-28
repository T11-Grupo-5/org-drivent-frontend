import { styled } from "styled-components";
import UnitActivitie from "./UnitActivitie";



export default function ActivitiesContainer(props) {

  const { activities } = props;

  return (
    <CsActivitiesContainer>
      <UnitActivitie activities={activities}/>
      <UnitActivitie activities={activities}/>
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