import { styled } from "styled-components";

export default function Day() {
  return (
    <CsDay>
        Sexta, 22/10
    </CsDay>
  );
}

const CsDay = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    width: 131px;
    height: 37px;

    margin: 0.5%;

    background-color: #E0E0E0;
    border-radius: 4px;
`;