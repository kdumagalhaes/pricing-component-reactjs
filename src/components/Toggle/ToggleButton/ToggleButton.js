import React, { useState } from 'react';
import { ToggleButtonDiv, ToggleCircleDiv } from './ToggleButtonStyles';

const ToggleButton = ({setPrice, currentPrice}) => {
  const [checked, setChecked] = useState(false);
  const active = checked ? '0' : '24px';
  return (
    <ToggleButtonDiv
      onClick={() => {
        setChecked(!checked);
        setPrice(!currentPrice);
      }}
    >
      <ToggleCircleDiv rightMovement={active} />
    </ToggleButtonDiv>
  );
};

export default ToggleButton;
