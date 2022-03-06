import React from "react";
import {GiSpeaker} from 'react-icons/gi';
import {FaWpforms} from 'react-icons/fa';
import {BsFillPersonFill} from 'react-icons/bs';
import {BiTask} from 'react-icons/bi';
import {BiDollar} from 'react-icons/bi';
import {MdOutlineChat} from 'react-icons/md';
import {IoIosArrowForward} from 'react-icons/io';
import {BsFillCameraVideoFill} from 'react-icons/bs';
import './solutionoverview.styles.css';
export default function SolutionOverview(){
    return(
        <div className="SolutionClass" >


            <div className="solutiontemp">
            <p className="solt">Solution Overview</p>
            <p className="solt" id="soltt">
                Click on a solution below or navigate to the solutions configuration page to view additiobnal details and manage configuration

            </p>
            <p>
                <a href="/" className="t">Solution</a> <a href="/" className="u">Used By</a>
            </p>
            </div>
            <div className="engage">
             <p className="gispeak">   <GiSpeaker/><a href="/" className="eng" >Engage</a> <a href="/" className="engg">00/00 practices</a><IoIosArrowForward className="forward"/></p>   
             
              
            </div>
            <div className="for"> 
                <p className="forms">   <FaWpforms/><a href="/" className="forr" >Forms</a> <a href="/" className="engg">00/00 practices</a><IoIosArrowForward className="forward" /></p>  
            </div>
            <div className="person"> 
                <p className="personn">   <BsFillPersonFill/><a href="/" className="forr" >Person</a> <a href="/" className="engg">00/00 practices</a><IoIosArrowForward className="forward"/></p>  
            </div>
            <div className="person"> 
                <p className="personn">   <BiTask/><a href="/" className="forr" >PSS</a> <a href="/" className="engg">00/00 practices</a><IoIosArrowForward className="forward"/></p>  
            </div>
            <div className="person"> 
                <p className="personn">   <BiDollar/><a href="/" className="forr" >Pay</a> <a href="/" className="engg">00/00 practices</a><IoIosArrowForward className="forward"/></p>  
            </div>
            <div className="person"> 
                <p className="personn">   <MdOutlineChat className="fill"/><a href="/" className="forr" >Chat</a> <IoIosArrowForward className="iii"/></p>  
            </div>
            <div className="person"> 
                <p className="personn">   <BsFillCameraVideoFill className="fill"/><a href="/" className="forr" >Virtual Visits</a> <IoIosArrowForward className="ii"/></p>  
            </div>
         </div>
    );
}