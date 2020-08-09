import React from 'react'
import {CardDiv} from './CardStyles'

const Card = ({cardHeight, shadow, backgroundColor}) => {
    return (
        <>
        <CardDiv cardHeight={cardHeight} shadow={shadow} backgroundColor={backgroundColor}>

        </CardDiv>
        </>
    )
}

export default Card