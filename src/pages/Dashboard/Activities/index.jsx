import { styled } from "styled-components";
import NotDisponible from "../../../components/ActivitiesComponents/NotDisponible";
import AllIncluded from "../../../components/ActivitiesComponents/AllIncluded";
import AvailableActivities from "../../../components/ActivitiesComponents/AvailableActivities";



export default function Activities() {
  return (
    <CsActivities>
      <h1>Escolha de atividades</h1>

      <AvailableActivities/>
      {/* <NotDisponible/>
      <AllIncluded/> */}

    </CsActivities>);
}

const CsActivities = styled.div`

    border: 1px solid;
    width: 100%;
    height: 100%;

  /* *{
    border: 1px solid;
  } */
  h1{
    font-family: Roboto;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    margin-bottom: 30px;
  }
  
`;