import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2026 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mechanical Design Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">ERIC Robotics</h4>
            <h4 className="vertical-timeline-element-subtitle">Pune,Maharashtra</h4>
            <p>
             Multigauge Robotics | NDT Integration | Fusion 360 | Rapid Prototyping
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2025 - Jan 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">CAE Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Vintillix Global Innovations</h4>
             <h4 className="vertical-timeline-element-subtitle">Hyderabad,Telangana</h4>
            <p>
             CAE System Validation | Thermal Stress Modeling | Fatigue Analysis | Load Simulation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 - July 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Manufacturing Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Manjira Machine Builders</h4>
             <h4 className="vertical-timeline-element-subtitle">Hyderabad,Telangana</h4>
            <p>
              5-Axis CNC Machining | Aerospace QA/QC | 5µm Precision Metrology | DXF Generation
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
