import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faRocket, faCubes } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Mechatronic Integration",
    "3-DOF Kinematic Modeling",
    "Automated NDT (Inspection)",
    "Adaptive Gauge Locomotion",
    "Custom Transmission Design"
];

const labelsSecond = [
    "Heavy-Lift UAV Architecture",
    "ArduPilot & Pixhawk",
    "ANSYS Fluent ",
    "Aerodynamic Simulation",
    "Payload Integration Systems"
];

const labelsThird = [
    "Advanced CAD (Fusion 360)",
    "CFD & FEA (ANSYS)",
    "Structural Load Analysis",
    "Thermodynamic Modeling",
    "Additive Manufacturing"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Robotics & Mechatronics</h3>
                    <p>I specialize in designing and manufacturing dynamic mechatronic systems. My recent work includes engineering a high-speed, multigauge railway inspection robot capable of traversing varying track widths at 30 kmph for automated NDT, as well as developing a custom 3-DOF RRR robotic arm featuring 3D-printed planetary gearboxes and precision NEMA motor control</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRocket} size="3x"/>
                    <h3>UAV Architecture & Aerial Systems</h3>
                    <p>I specialize in the end-to-end design, assembly, and programming of custom unmanned aerial vehicles. I led the hardware development and firmware configuration for Project Garuda-1, a heavy-lift hexacopter engineered for 5kg payload, utilizing ArduPilot and Pixhawk flight controllers to achieve stable, autonomous flight.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCubes} size="3x"/>
                    <h3>CAD Modeling & CAE Simulation</h3>
                    <p>Before any physical hardware is manufactured, I ensure its viability through advanced digital modeling and simulation. I leverage Fusion 360 for complex, multi-component assemblies and utilize ANSYS for comprehensive Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD), ensuring structural integrity and thermodynamic stability under extreme loads.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
