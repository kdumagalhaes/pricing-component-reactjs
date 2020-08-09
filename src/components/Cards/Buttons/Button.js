import React from 'react';
import { ButtonTag } from './ButtonStyles';

const Button = ({
  borderColor,
  buttonFontColor,
  buttonBackground,
  buttonBorderHover,
  buttonFontColorHover,
}) => {
  return (
    <ButtonTag
      borderColor={borderColor}
      buttonFontColor={buttonFontColor}
      buttonBackground={buttonBackground}
      buttonBorderHover={buttonBorderHover}
      buttonFontColorHover={buttonFontColorHover}
    >
      Learn more
    </ButtonTag>
  );
};

export default Button;
