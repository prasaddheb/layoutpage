
import React from 'react';
import {FaUserCircle} from 'react-icons/fa';
import { useState } from 'react';
import './profile.styles.css';


export default function Profile()
{

    const [open,setOpen]=useState(false);

    const handleClick=()=>
    {
        setOpen(!open)
    }


    return (
        <div className="link">
             <FaUserCircle className="profile" onClick={handleClick}/>

             {open && (
                 <div className="dropdown1">
                     <ul id="list">
                         <li>Profile Setting</li>
                         <li>Help</li>
                         <li>Logout</li>
                         </ul>
                         </div>
             )}
            </div>
    )
}