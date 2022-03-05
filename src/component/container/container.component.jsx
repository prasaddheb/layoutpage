import React from "react";
import './container.styles.css';
import ClientTree from "../clienttree/clienttree.component";
import Contentt from "../content/content.component";

export default function Content(){
    return(
<div className="container">
<ClientTree/>
<Contentt/>
</div>
    );
}