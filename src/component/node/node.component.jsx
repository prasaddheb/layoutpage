import React from "react";
import './node.styles.css';
import { ReactComponent as Seting} from '../../assets/setting.svg'; 
import { ReactComponent as History} from '../../assets/history.svg'; 
export default function Node(){
    return(

        <div className='header'>
        <ul>
          
          <li>  <Seting className="logo"/></li>
          <li>
          <a href="/"  className="gene">General Setting</a>
        
          </li> 
          <li>
          <History className="history"/ >
          </li>
          <li className="history" id="activity">Activity History</li>
        </ul>
        
        </div>
    );
}