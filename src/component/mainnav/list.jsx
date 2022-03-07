import React, { useState } from "react";
import {FiLink2} from 'react-icons/fi';
// import './list.scss';

export default function MenuList()
{

    const [open,setOpen]=useState(false);

    const handleClick=()=>
    {
        setOpen(!open)
    }


    return (
        <div className="linkk">
             <FiLink2 className="flink" onClick={handleClick}/>

             {open && (
                 <div className="dropdown">
                     <ul id="items">
                         <li>Appointment DashBoard</li>
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