import React from "react";
import './basicinfo.styles.css';
export default function BasicInfo(){

    return(
        <div className="basictemplate">
           
           <div className="basic">
               <a href="/" className="Bass">Basic Info</a>
                <a href="/" className="basicedit"><button className="edi">Edit</button></a>
           </div>
            <div className="commandcenterbox">
                <table  className="one">
                <tr className="com" >
                    <a  href='/'className="rowss">Command Center Id</a>
                    <a  href='/'className="rowsss">EHR System</a>
                  
                </tr>
               
              <tr > 
               
                <a href='/' className="rowss" id='blackl'>00000000</a>
                <a href='/' className="rowssss" id='blackl'>NextGen Enterprise</a>
                
            </tr>
            <p></p>
            <tr className="com" >
                    <a  href='/'className="rowss">SAP ID Id</a>
                    <a  href='/'className="pmm">PM System</a>
                  
                </tr>
              <tr>
               
                <a href='/' className="rowss" id='blackl'>00000000</a>
                <a href='/' className="rowssss" id='blackl'>NextGen Enterprise</a>
                
            </tr>
                <p></p>
            <tr className="com" >
                    <a  href='/'className="rowss">Client Type</a>
                    <a  href='/'className="tim">TimeZone</a>
                  
                </tr>
              <tr>
               
                <a href='/' className="rowss" id='blackl'>Direct Type</a>
                <a href='/' className="rowssss" id='blackl'>(GMT :5:00)Eastern Standard Time</a>
                
            </tr>
                </table>

            </div>
        </div>
    )
    ;
}
