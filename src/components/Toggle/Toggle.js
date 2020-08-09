import React from 'react';
import { ToggleDiv } from './ToggleStyles';
import ToggleButton from './ToggleButton/ToggleButton';

const Toggle = ({setPrice, currentPrice}) => {
  return (
    <ToggleDiv >
      <span>Anually</span>
      <ToggleButton setPrice={setPrice} currentPrice={currentPrice}/>
      <span>Monthly</span>
    </ToggleDiv>
  );
};

export default Toggle;
