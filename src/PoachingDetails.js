import React from 'react';
import { Link } from 'react-router-dom';
import poach from './poaching.jpeg';
import './App.css';

const PoachingDetails = () => {
  return (
    <div>
      <nav className='proj_nav'>
        <div className="nav-center">Real-Time Poaching & Deforestation Detection</div>
      </nav>

      <div className="main-skill">
        <nav className='side_nav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/paper'>Papers</Link></li>
            <li><Link to='/acheive'>Achievements</Link></li>
          </ul>
        </nav>

        <div className="project-detail-container">
          <img src={poach} alt="Poaching Detection" className="project-detail-img" />

          <section className="project-section">
            <h2>About the Project</h2>
            <p>
              This solution detects illegal poaching and deforestation in forest regions using YOLO object detection and ResNet-50-based image analysis on satellite and CCTV feeds. It alerts officials in real time for immediate intervention.
            </p>
          </section>

          <section className="project-section">
            <h2>Methodology Used</h2>
            <table className="methodology-table">
              <thead>
                <tr><th>Step</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>1. Data Acquisition</td><td>Collected labeled image data of poachers, animals, trees, and deforested zones.</td></tr>
                <tr><td>2. Object Detection</td><td>Applied YOLOv5 for detecting humans, tools, and vehicles in protected areas.</td></tr>
                <tr><td>3. Image Classification</td><td>Used ResNet-50 to analyze satellite images for tree loss and deforestation patterns.</td></tr>
                <tr><td>4. Alert System</td><td>Integrated alert mechanism to notify officials based on detection confidence and type.</td></tr>
                <tr><td>5. Deployment</td><td>Deployed on edge devices with remote monitoring dashboards for real-time action.</td></tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PoachingDetails;
