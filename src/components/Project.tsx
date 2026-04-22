import React from "react";
import CrewModuledata from '../assets/images/CrewModuledata.jpg';
import Roboteric from '../assets/images/Roboteric.jpg';
import DroneProject from '../assets/images/DroneProject.jpg';
import Dronedisplay from '../assets/images/Dronedisplay.jpg';
import AMR from '../assets/images/AMR.jpg';
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
            <div className="project">
                <img src={DroneProject} className="zoom" alt="Autonomous 450mm Quadcopter" width="100%"/>
            <h2>Autonomous 450mm Quadcopter</h2>
            <p><strong>Approach:</strong><br/>
            • Configured a high-thrust propulsion system utilizing 1250KV brushless motors and 30A ESCs on a rigid 450mm frame, powered by a high-discharge 3000mAh LiPo battery.<br/>
            • Integrated a Pixhawk 2.4.1 flight controller with an external GPS module to enable precise autonomous navigation and telemetry tracking.<br/>
            • Engineered and 3D-printed custom structural components—including a vibration-dampened GoPro mount—using high-strength ABS plastic on an Elegoo system.</p>
            <p><strong>Key Results:</strong><br/>
            • <strong>Operational Range & Endurance:</strong> Achieved a 1 km uninterrupted telemetry range and sustained ~15 minutes of autonomous flight time per charge.<br/>
            • <strong>Autonomous Navigation:</strong> Successfully validated GPS-guided waypoint missions, geofencing, and automated return-to-launch (RTL) fail-safes.<br/>
            • <strong>Custom Manufacturing:</strong> Proved rapid prototyping capabilities by successfully deploying end-use 3D-printed ABS hardware in dynamic flight conditions.</p>
            </div>
            <div className="project">
                <img src={Dronedisplay} className="zoom" alt="Project Garuda-1 Heavy-Lift Hexacopter" width="100%"/>
            <h2>Project Garuda-1: Heavy-Lift Hexacopter</h2>
            <p><strong>Objective:</strong><br/>Design, assemble, and configure a custom heavy-lift hexacopter platform optimized for high-capacity payload transport and advanced autonomous telemetry.</p>
            <p><strong>Approach:</strong><br/>
            • Engineered a highly rigid six-rotor propulsion architecture utilizing high-torque low-KV motors and 15-inch carbon-fiber propellers, regulated by heavy-duty 60A ESCs.<br/>
            • Designed a high-capacity power distribution system capable of safely managing peak current draw from massive dual 6S 22000mAh LiPo battery packs.<br/>
            • Integrated and tuned advanced ArduPilot flight control firmware to handle complex telemetry mapping and stable autonomous waypoint navigation under shifting loads.</p>
            <p><strong>Key Results:</strong><br/>
            • <strong>Heavy-Lift Capacity:</strong> Successfully validated the propulsion and structural architecture to reliably support and maneuver a high-capacity payload of 5 to 8 kg.<br/>
            • <strong>Fault Tolerance:</strong> Leveraged the hexacopter configuration to achieve superior mechanical redundancy, allowing safe landings even in the event of a single-motor failure.<br/>
            • <strong>Advanced Telemetry:</strong> Established reliable, data-rich ground station communication using ArduPilot's open-source autonomous architecture.</p>
            </div>
            <div className="project">
                <img src={AMR} className="zoom" alt="Industrial Autonomous Mobile Robot" width="100%"/>
            <h2>Industrial Autonomous Mobile Robot (AMR)</h2>
            <p><strong>Objective:</strong><br/>Engineer a manufacturable, zero-turn Autonomous Mobile Robot optimized for 60kg warehouse logistics within a rapid 48-hour design sprint.</p>
            <p><strong>Approach:</strong><br/>
            • Designed a rigid ladder frame chassis utilizing 40x20mm Aluminum 6106-T6 C-channels to minimize torsional twisting and maximize the payload-to-weight ratio.<br/>
            • Configured a central "Diamond" kinematic drive featuring dual 350W direct-drive hub motors and 155mm solid casters for superior traction.<br/>
            • Integrated a Sensor Fusion suite combining a roof-mounted 360° 2D LiDAR for SLAM and a front-bumper Intel RealSense Depth Camera for blind-spot obstacle avoidance.</p>
            <p><strong>Key Results:</strong><br/>
            • <strong>Structural Validation:</strong> Executed MATLAB and Fusion 360 FEA confirming a maximum deflection of 1.86mm and an Aluminum Yield Factor of Safety (FoS) of 3.84 under peak load.<br/>
            • <strong>Tractive Performance:</strong> Analytically validated 8.56 Nm of total motor torque, ensuring reliable 5-degree ramp climbing capabilities under a full 60kg gross weight.<br/>
            • <strong>Industrial Safety:</strong> Engineered recessed battery integration secured with M6 structural bolts (Shear FoS more than 200) to significantly lower the center of gravity and ensure collision safety.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
