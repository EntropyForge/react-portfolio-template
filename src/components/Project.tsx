import React from "react";
import CrewModuledata from '../assets/images/CrewModuledata.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                    <img src={CrewModuledata} className="zoom" alt="Hypersonic Crew Module Re-entry Analysis Collage" width="100%"/>
                <h2>Crew Module </h2>
               <p><strong>Objective:</strong><br/>Evaluate aerodynamic performance and structural integrity under extreme reentry conditions.</p>
               <p><strong>Approach:</strong><br/>
               • Performed CFD analysis for hypersonic flow conditions (up to <strong>Mach 20</strong>).<br/>
               • Mapped thermal and pressure distributions across the module surface.<br/>
               • Conducted structural validation using pressure loads.</p>
               <p><strong>Key Results:</strong><br/>
               • <strong>Drag coefficient:</strong> 1.8<br/>
               • <strong>Peak stagnation pressure:</strong> 7.9 MPa<br/>
               • <strong>Factor of Safety (FoS):</strong> 2.8 under hypersonic loads.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
