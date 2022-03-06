import React from "react";
import './branding.styles.css';
import {HiDotsVertical} from 'react-icons/hi';
export default function Branding(){

    return(

        <div className="BrandingClass">
          <div className="brandtemplate">
              <a href="/" className="Branding-temp">Branding Templates</a>
              <a href="/" className="Versionb" ><button>+Version</button></a>
          </div>
          <div className="client11">
            <a href="/" id='cll'> Client 1</a>
            <a href="/" className="activebutton"><button className="ac">ACTIVE</button></a>
            <HiDotsVertical className="hidot"/>
          </div>
          <div className="practice11">
              <a href="/" className="prac">Practice 1</a>
              <a href="/" className="inactivebutton"><button className="ic">INACTIVE</button></a>
              <HiDotsVertical className="hid"/>
          </div>
          <div className="inactiveversion">
          <p><i class="arrow up"></i><a href="/" className="icc">Hide Inactive Version</a> 
          </p>

          </div>
        </div>
    );
}