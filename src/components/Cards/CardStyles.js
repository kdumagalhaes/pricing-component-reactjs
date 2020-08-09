import styled from 'styled-components';

export const CardDiv = styled.div`
  width: 300px;
  height: ${({ cardHeight }) => cardHeight};
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 12px;
  box-shadow: ${({ shadow }) => shadow};
  animation: loading 1s linear;

  @keyframes loading {
    0% {
      box-shadow: none;
    }
    20% {
      box-shadow: ${({ shadow }) => shadow};
    }
  }

  @media (max-width: 860px) {
    margin-bottom: 30px;
}
`;
