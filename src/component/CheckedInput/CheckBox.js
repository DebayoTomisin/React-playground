/*import React from "react"

export const CheckBox = props => 
{
    const {id, handleCheckChildElement, value, isChecked} = props
    return(
        <li>
            <input key={id} onClick={handleCheckChildElement} type="checkbox" checked={isChecked} value={value}/> {value}
        </li>
    )
}
*/

import React from 'react'

export const CheckBox = props => {
    return (
      <li>
       <input key={props.id} onChange={props.handleCheckChildElement} type="checkbox" checked={props.isChecked} value={props.value} /> {props.value}
      </li>
    )
}


export default CheckBox