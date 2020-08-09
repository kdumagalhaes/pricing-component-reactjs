import React from 'react';
import { ToggleDiv } from './ToggleStyles';
import ToggleButton from './ToggleButton/ToggleButton';
const Toggle = () => {
  return (
    <ToggleDiv>
      <span>Anually</span>
      <ToggleButton />
      <span>Monthly</span>
    </ToggleDiv>
  );
};

export default Toggle;
