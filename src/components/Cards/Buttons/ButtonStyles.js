import styled from 'styled-components';

export const ButtonTag = styled.button`
  width: 100%;
  border: 1px solid var(--light-grayish-blue);
  background: transparent;
  border-radius: 5px;
  height: 35px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  font-size: 0.7rem;
  margin-top: 30px;
  transition: all 0.5s;
  color: var(--grayish-blue);

  &:hover {
  border: 1px solid hsl(236, 72%, 79%);
  color: hsl(236, 72%, 79%);
  }
`;
