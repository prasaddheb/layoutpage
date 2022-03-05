import React from "react";
import MainNav from "../mainnav/mainnav.component";
import SubNav from "../subnav/subnav.component";
import Node from "../node/node.component";
import './mainpage.styles.css';
export default function Mainpage(){
    return(

        <div className="mainpage">
                <MainNav/>
                <SubNav/>
                <Node/>
        </div>
    );
}