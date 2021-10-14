import React from 'react';
import {dropdownData} from "../context/dropdownDataData"

function DropdownMenu() {
    return (
        <div>
            {dropdownData.map(data=>(
                <h6>{data.text} </h6>
            ))}
            
        </div>
    )
}

export default DropdownMenu
