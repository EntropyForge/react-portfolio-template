import React from "react";
import CrewModuledata from '../assets/images/CrewModuledata.jpg';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer">
                    <img src={CrewModuledata} className="zoom" alt="Hypersonic Crew Module Re-entry Analysis Collage" width="100%"/>
                </a>
                <h2>Crew Module </h2>
                <p>Executed advanced hypersonic aerodynamic analysis for a conceptual crew module subjected to extreme atmospheric reentry conditions. Utilizing computational fluid dynamics (CFD), I modeled reentry velocities up to Mach 20, mapping critical thermal and pressure distributions. The simulation validated a drag coefficient of 1.8 and successfully analyzed peak stagnation pressures reaching 7.9 MPa, verifying the module's structural integrity with an achieved Factor of Safety (FoS) of up to 2.8 under severe hypersonic loads.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
