import React from "react";
import './content.styles.css';
import Tile from "../tile/tile.component";
import Branding from "../branding/branding.component";
import BasicInfo from "../basicinfo/basicinfo.component";
import SolutionOverview from "../solutionoverview/solutionoverview.component";
export default function Contentt(){
    return(
        <div className="content" >
            <div className="ContainerBackGround">

                <div>
                    <a href='/' className="cli">Client 1</a>
                    <button href="/" className="button-console">Edit</button>
                </div>
                <div>
                <i class='fa fa-check-circle system-color'></i>   <a href="/" className="activee">Active</a>
                </div>
            </div>
          < Tile/>   
          <Branding/>
        <  BasicInfo/> 
        <SolutionOverview/>
        </div>

    );
}