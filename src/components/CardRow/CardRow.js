import React from 'react'
import { CardRowDiv } from './CardRowStyles'
import Card from '../Cards/Card'

const CardRow = () => {
    return (
        <CardRowDiv>
            <Card cardHeight="400px" shadow="0px 0px 74px -39px rgba(73,76,95,0.7)" backgroundColor="#fff"/>
            <Card cardHeight="450px" shadow="none" backgroundColor="var(--bg-gradient)"/>
            <Card cardHeight="400px" shadow="0px 0px 74px -39px rgba(73,76,95,0.7)" backgroundColor="#fff"/>
        </CardRowDiv>
    )
}

export default CardRow