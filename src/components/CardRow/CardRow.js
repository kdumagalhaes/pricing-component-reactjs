import React from 'react';
import { CardRowDiv } from './CardRowStyles';
import Card from '../Cards/Card';

const CardRow = () => {
  return (
    <CardRowDiv>
      <Card
        cardHeight="400px"
        shadow="0px 0px 74px -39px rgba(73,76,95,0.7)"
        backgroundColor="#fff"
        title="Basic"
        titleColor="var(--light-grayish-blue)"
        price="19.99"
        item1="500 GB Storage"
        item2="2 User Allowed"
        item3="Send up to 3 GB"
        ulColor="var(--light-grayish-blue)"
        priceColor="var(--dark-grayish-blue)"
        borderColor="var(--light-grayish-blue)"
        buttonFontColor="var(--light-grayish-blue)"
      />
      <Card
        cardHeight="450px"
        shadow="none"
        backgroundColor="var(--bg-gradient)"
        title="Professional"
        price="24.99"
        item1="1 TG Storage"
        item2="5 User Allowed"
        item3="Send up to 10 GB"
        ulColor="#fff"
        titleColor="#fff"
        priceColor="#fff"
        borderColor="#fff"
        buttonFontColor="#fff"
      />
      <Card
        cardHeight="400px"
        shadow="0px 0px 74px -39px rgba(73,76,95,0.7)"
        backgroundColor="#fff"
        title="Master"
        titleColor="var(--light-grayish-blue)"
        price="39.99"
        item1="2 TG Storage"
        item2="10 User Allowed"
        item3="Send up to 20 GB"
        ulColor="var(--light-grayish-blue)"
        priceColor="var(--dark-grayish-blue)"
        borderColor="var(--light-grayish-blue)"
        buttonFontColor="var(--light-grayish-blue)"
      />
    </CardRowDiv>
  );
};

export default CardRow;
