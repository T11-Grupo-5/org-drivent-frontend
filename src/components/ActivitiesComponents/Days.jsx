import { styled } from "styled-components";
import Day from "./Day";
export default function Days() {
  return (
    <CsDays>
        <Day/>
        <Day/>
        <Day/>
    </CsDays>
  );
}

const CsDays = styled.div`
    display: flex;
`;