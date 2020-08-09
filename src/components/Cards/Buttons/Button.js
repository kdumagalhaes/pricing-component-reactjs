import React from 'react'
import {ButtonTag} from './ButtonStyles'

const Button = ({borderColor, buttonFontColor}) => {
    return(
        <ButtonTag borderColor={borderColor} buttonFontColor={buttonFontColor}>
            Learn more
        </ButtonTag>
    )
}

export default Button