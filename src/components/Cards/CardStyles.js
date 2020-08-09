import styled from 'styled-components';

export const CardDiv = styled.div`
  width: 300px;
  height: ${({ cardHeight }) => cardHeight};
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 12px;
  box-shadow: ${({ shadow }) => shadow};
  animation: loading 1s linear;
  padding: 15px 30px 15px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

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

export const PriceTag = styled.div`
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: ${({ priceColor }) => priceColor};
`;

export const MoneySymbol = styled.span`
  font-size: 2.1rem;
  margin-right: 5px;
  color: ${({ color }) => color};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-content: center;
  color: ${({ulColor}) => ulColor};
`;

export const Title = styled.h2`
  font-size: 1.05rem;
  color: ${({ titleColor }) => titleColor};
  margin-bottom: 15px;
`;

export const ListItem = styled.li`
  border-bottom: 1px solid ${({ulColor}) => ulColor};
  width: 100%;

  &:first-child {
    border-top: 1px solid ${({ulColor}) => ulColor};
  }
`;

export const ListItemSpan = styled.span`
  justify-self: center;
  font-size: 0.7rem;
  display: block;
  margin: 15px 0 15px 0;
`;
