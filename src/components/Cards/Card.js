import React from 'react';
import { CardDiv, MoneySymbol, PriceTag, List, Title, ListItem, ListItemSpan } from './CardStyles';
import Button from './Buttons/Button'

const Card = ({
  cardHeight,
  shadow,
  backgroundColor,
  title,
  price,
  item1,
  item2,
  item3,
  priceColor,
  ulColor,
  titleColor,
  borderColor,
  buttonFontColor,
}) => {
  return (
    <CardDiv
      cardHeight={cardHeight}
      shadow={shadow}
      backgroundColor={backgroundColor}
    >
      <div>
      <Title titleColor={titleColor}>{title}</Title>
      <PriceTag priceColor={priceColor}><MoneySymbol>$</MoneySymbol>{price}</PriceTag>
      <List ulColor={ulColor}>
        <ListItem><ListItemSpan>{item1}</ListItemSpan></ListItem>
        <ListItem><ListItemSpan>{item2}</ListItemSpan></ListItem>
        <ListItem><ListItemSpan>{item3}</ListItemSpan></ListItem>
      </List>
      <Button borderColor={borderColor} buttonFontColor={buttonFontColor}/>
      </div>
    </CardDiv>
  );
};

export default Card;
