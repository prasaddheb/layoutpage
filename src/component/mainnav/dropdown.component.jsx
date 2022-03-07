import React, { useState } from "react";
import {FiLink2} from 'react-icons/fi';
import './dropdown.styles.css';

export default function MenuList()
{

    const [open,setOpen]=useState(false);

    const handleClick=()=>
    {
        setOpen(!open)
    }


    return (
        <div className="link">
             <FiLink2 className="link1" onClick={handleClick}/>

             {open && (
                 <div className="dropdown">
                     <ul id="list">
                         <li>AppointmentDashBoard</li>
                         <li>Form Builder</li>
                         <li>Patient Self Scheduling</li>
                         <li>Practice Portal</li>
                         <li>Virtual Visits</li>
                         </ul>
                         </div>
                       )}
            </div>
    )
}