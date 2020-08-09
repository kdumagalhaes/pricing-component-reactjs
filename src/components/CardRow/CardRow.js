import React from 'react';
import { CardRowDiv } from './CardRowStyles';
import Card from '../Cards/Card';

const CardRow = ({setPrice, currentPrice}) => {
  const monthly = [19.99, 24.99, 39.99];
  const annually = [199.99, 249.99, 399.99];
  const priceChanged = currentPrice ? annually : monthly;

  return (
    <CardRowDiv setPrice={setPrice} currentPrice={currentPrice}>
      <Card
        cardHeight="400px"
        shadow="0px 0px 74px -39px rgba(73,76,95,0.7)"
        backgroundColor="#fff"
        title="Basic"
        titleColor="var(--light-grayish-blue)"
        price={priceChanged[0]}
        item1="500 GB Storage"
        item2="2 User Allowed"
        item3="Send up to 3 GB"
        ulColor="var(--light-grayish-blue)"
        priceColor="var(--dark-grayish-blue)"
        buttonFontColor="#fff"
        buttonBackground="var(--bg-gradient)"
        buttonBorderHover="hsl(236, 72%, 79%)"
        buttonFontColorHover="hsl(236, 72%, 79%)"
      />
      <Card
        cardHeight="450px"
        shadow="none"
        backgroundColor="var(--bg-gradient)"
        title="Professional"
        price={priceChanged[1]}
        item1="1 TG Storage"
        item2="5 User Allowed"
        item3="Send up to 10 GB"
        ulColor="#fff"
        titleColor="#fff"
        priceColor="#fff"
        borderColor="#fff"
        buttonFontColor="hsl(236, 72%, 79%)"
        buttonBackground="#fff"
        buttonBorderHover="#fff"
        buttonFontColorHover="#fff"
      />
      <Card
        cardHeight="400px"
        shadow="0px 0px 74px -39px rgba(73,76,95,0.7)"
        backgroundColor="#fff"
        title="Master"
        titleColor="var(--light-grayish-blue)"
        price={priceChanged[2]}
        item1="2 TG Storage"
        item2="10 User Allowed"
        item3="Send up to 20 GB"
        ulColor="var(--light-grayish-blue)"
        priceColor="var(--dark-grayish-blue)"
        borderColor="var(--light-grayish-blue)"
        buttonFontColor="#fff"
        buttonBackground="var(--bg-gradient)"
        buttonBorderHover="hsl(236, 72%, 79%)"
        buttonFontColorHover="hsl(236, 72%, 79%)"
      />
    </CardRowDiv>
  );
};

export default CardRow;
