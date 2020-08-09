import styled from 'styled-components';

export const ToggleButtonDiv = styled.div`
  width: 50px;
  height: 26px;
  background: var(--bg-gradient);
  margin: 0 auto;
  border-radius: 50px;
  padding: 3px;
  cursor: pointer;
`;

export const ToggleCircleDiv = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--very-light-grayish-blue);
  border-radius: 50%;
  margin-left: ${({rightMovement}) => rightMovement};
  transition: all 0.3s;
`;
