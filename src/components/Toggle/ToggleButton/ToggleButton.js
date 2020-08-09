import React, {useState} from 'react'
import {ToggleButtonDiv, ToggleCircleDiv} from './ToggleButtonStyles'


const ToggleButton = () => {
    const [checked, setChecked] = useState(false)
    const active = checked ? '24px' : '0'
    return (
        <ToggleButtonDiv onClick={() => setChecked(!checked)}>
            <ToggleCircleDiv  rightMovement={active}/>
        </ToggleButtonDiv>
    )
}

export default ToggleButton