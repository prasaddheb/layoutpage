import React from "react";
import './clienttree.styles.css';
import { ReactComponent as Search} from '../../assets/search.svg';
export default function ClientTree(){
    return(
        <div className="Clienttree">
              <div className="searchbar"> 
   <Search className="search"/>
    <button className="client-button">MANAGE CLIENT</button>
    </div>   
    
    <div className="client"><h2>Client 1 <i class='fa fa-check-circle green-color'></i></h2></div>
    <div className="system-demo">
        <p className="system"><i class="arrow down"></i>System-DEMO <i class='fa fa-check-circle system-color'></i></p>

    </div>
    <div className="block">
        <p><i class="arrow down"></i>Enterprise 1<i class='fa fa-check-circle enterprise-color'></i></p>
        <p className="practice1">Practice 1<i class='fa fa-check-circle practice-color'></i></p>
        <p className="practice2">Practice 2<i class='fa fa-times-circle red-color'></i></p>
        <p className="cross"><i class="arrow right"></i>Enterprise 2<i class='fa fa-check-circle enterprise2-color'></i></p>
        <p className="system-Prod"><i class="arrow right"></i>System-PROD<i class='fa fa-check-circle prod-color'></i></p>
    </div>
        </div>
    );
}