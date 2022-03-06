import React from "react";
// import ReactTooltip from 'react-tooltip';
import { ReactComponent as Logo } from '../../assets/setting.svg';
import { ReactComponent as Location} from '../../assets/location.svg';
import { ReactComponent as Person} from '../../assets/person.svg';
import { ReactComponent as Calender} from '../../assets/calender.svg';
import { ReactComponent as Light} from '../../assets/light.svg';
import { ReactComponent as Chart} from '../../assets/chart.svg';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import './subnav.styles.css';
export default function SubNav(){
    // function Logoin(event) {
    //     event.target.style.background = 'white';
    //   }
    //   function Logoout(event){
    //     event.target.style.background="";
    //   }
    return(
        <div className="Subnav">
          {/* <ReactTooltip /> */}
 <ul>
        <li>
        <a href="/">client</a>
      
        </li> 
        <Tippy content="Setting" placement="bottom" arrow={false}>
        <li>  <Logo   className="logo"/></li>
        </Tippy>
        <Tippy content="Location" placement="bottom" arrow={false}>
        <li>  <Location   className="logo"/></li>
        </Tippy>
        <Tippy content="Person" placement="bottom" arrow={false}>
        <li>  <Person   className="logo"/></li>
        </Tippy>
        <Tippy content="Todotask" placement="bottom" arrow={false}>
        <li>  <Calender  className="logo"/></li>
        </Tippy>
        <Tippy content="Light" placement="bottom" arrow={false}>
        <li>  <Light   className="logo"/></li>
        </Tippy>
        <Tippy content="Statistics" placement="bottom" arrow={false}>
        <li>  <Chart   className="logo"/></li></Tippy>
     </ul>
        </div>
    );
}