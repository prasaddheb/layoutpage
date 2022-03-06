import React from "react";
import './tile.styles.css';
import { ReactComponent as Location} from '../../assets/location.svg';
import { ReactComponent as Person} from '../../assets/person.svg';
import { ReactComponent as Calender} from '../../assets/calender.svg';
// import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css'

export default function Tile(){


    return(
              <div className="main-tile">
                            <div className="tilee">
                                    <div>
                                    <a href="/"><Location   className="location"/></a>
                                      <p className="locationsclass"> Locations</p> 
                                      <p className="fif">15</p> 
                                    </div>

                            </div>
                            <div className="provider">
                                    <div>
                                   <a href="/"> <Person   className="PersonLogo"/></a>
                                   <p className="Provider_Resuorce">Provider&Resources</p>
                                    <p className="fif">20</p>
                                    </div>

                            </div>
                            <div className="appointment">
                                    <div>
                                 <a href="/">   <Calender  className="CalenderLogo"/></a>
                                 <p className="Appointment_Type">Appointment Types</p>
                                    <p className="fif">100</p>
                                    </div>

                            </div>
            </div>
    )
    ;
}