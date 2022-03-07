// import React from "react";
import React, { useState } from "react";
import {BsBookHalf} from "react-icons/bs";
// import MenuList from "./list";

// import {FaUserCircle} from 'react-icons/fa';
import {FiLink2} from 'react-icons/fi';
// import {IoAnalyticsOutline} from "react-icons/Io";
import {MdGroup} from 'react-icons/md';
// import {CgExport} from "react-icons/cg";
import {BiTask} from 'react-icons/bi';
import {ImStatsDots} from 'react-icons/im';
import {FcUpload} from 'react-icons/fc';
 import {RiAccountCircleLine} from 'react-icons/ri';
import './mainnav.styles.css';
export default function MainNav(){
  const [open,setOpen]=useState(false);

  const handleClick=()=>
  {
      setOpen(!open)
  }
    return(
<div className="Mainnav">
<div>
<a href='/' className="ccenter">PxP Command Center</a>
        <BsBookHalf className="book"/>

        <MdGroup className="circle"/>

        {/* <IoAnalyticsOutline/> */}

        <ImStatsDots className="export"/>
        <BiTask className="task"/>
        <FcUpload className="upload"/>
        {/* <div className="link"> */}
        <FiLink2 className="linkk" onClick={handleClick}/>
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
              {/* </div> */}
        
      <  RiAccountCircleLine className="profile"/>
        </div>
</div>
    );
}