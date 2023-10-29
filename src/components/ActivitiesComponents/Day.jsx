import { useState } from 'react';
import { styled } from 'styled-components';

export default function Day(props) {
  const { day, handleButtonClick, index, activeButton } = props;

  function getActivities() {
    handleButtonClick(index);
  }

  return (
    <CsDay onClick={getActivities} selected={activeButton === index ? '#FFD37D' : '#E0E0E0'}>
      {day}
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
  background-color: ${(p) => p.selected};
  border-radius: 4px;
  cursor: pointer;
`;
