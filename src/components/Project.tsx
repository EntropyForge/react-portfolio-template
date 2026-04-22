import React from "react";
import CrewModuledata from '../assets/images/CrewModuledata.jpg';
import Roboteric from '../assets/images/Roboteric.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
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
            <div className="project">
                <img src={Roboteric} className="zoom" alt="Proprietary Rail Inspection Robot" width="100%"/>
            <h2>Multi-Gauge Rail Inspection Robot</h2>
            <p><strong>Objective:</strong><br/>Design and validate a ruggedized, IP64-rated robotic system for ultra-precision rail head flaw detection at high operational speeds.</p>
            <p><strong>Approach:</strong><br/>
            • Engineered a kinematic chassis featuring a rapid pin-locking mechanism, allowing reliable manual adaptation across Broad (1676±8mm), Standard, and Narrow gauges.<br/>
            • Enforced a strict 10-micron manufacturing tolerance across all mechanical components to ensure flawless sensor payload alignment.<br/>
            • Executed real-world field testing, calibration, and operational validation on Pune Maha Metro tracks.</p>
            <p><strong>Key Results:</strong><br/>
            • <strong>High-Speed Inspection:</strong> Validated reliable dynamic data acquisition at travel speeds up to 30 km/h, utilizing integrated sensors with a 1-micron guaranteed accuracy.<br/>
            • <strong>Dynamic Adaptability:</strong> Successfully deployed and shifted between three distinct railway gauge standards.<br/>
            • <strong>Environmental Durability:</strong> Validated IP64 dust-proof rating for harsh, real-world track conditions.</p>
            </div>
            <div className="project">
                <img src={Roboteric} className="zoom" alt="Proprietary Mobile Docking Station" width="100%"/>
            <h2>Mobile Data & Power Docking Hub</h2>
            <p><strong>Objective:</strong><br/>Design and fabricate a heavy-duty, mobile docking infrastructure to facilitate centralized robot data collection and high-capacity power management.</p>
            <p><strong>Approach:</strong><br/>
            • Engineered a rugged, mobile chassis utilizing welded 25x25mm Mild Steel (MS) square tubing, mounted on heavy-duty industrial caster wheels.<br/>
            • Integrated a high-performance, onboard workstation to enable seamless, high-speed data extraction directly from the robotic units.<br/>
            • Designed a tiered energy management system spatially optimized to simultaneously house and charge 4 robot batteries and 6 heavy-duty inverter batteries.</p>
            <p><strong>Key Results:</strong><br/>
            • <strong>Maximum Load Capacity:</strong> Successfully validated to support up to 500 kg of equipment without structural deformation.<br/>
            • <strong>Structural Integrity:</strong> Achieved a rigid Factor of Safety (FoS) of 3 under maximum operational payload.<br/>
            • <strong>Centralized Logistics:</strong> Streamlined field operations by combining complex data processing and dense power storage into a single, highly mobile unit.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
