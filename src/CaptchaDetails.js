import React from 'react';
import { Link } from 'react-router-dom';
import captcha from './captcha.jpg';
import './App.css';

const CaptchaDetails = () => {
  return (
    <div>
      <nav className='proj_nav'>
        <div className="nav-center">Passive CAPTCHA Solution</div>
      </nav>

      <div className="main-skill">
        <nav className='side_nav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Skill'>Skill</Link></li>
            <li><Link to='/acheive'>Achievements</Link></li>
          </ul>
        </nav>

        <div className="project-detail-container">
          <img src={captcha} alt="CAPTCHA" className="project-detail-img" />

          <section className="project-section">
            <h2>About the Project</h2>
            <p>
              This project proposes a passive CAPTCHA that identifies humans and bots without requiring user interaction, based on environmental and behavioral signals collected through the browser.
            </p>
          </section>

          <section className="project-section">
            <h2>Methodology Used</h2>
            <table className="methodology-table">
              <thead>
                <tr><th>Step</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>1. Parameter Collection</td><td>Captured passive signals like mouse movement, click delay, screen size, and browser fingerprint.</td></tr>
                <tr><td>2. Data Processing</td><td>Transformed raw input signals into numerical features for training.</td></tr>
                <tr><td>3. Model Training</td><td>Used supervised learning (Random Forest, SVM) to classify human vs bot patterns.</td></tr>
                <tr><td>4. Reinforcement Design</td><td>Integrated feedback loop for self-improvement using user validation outcomes.</td></tr>
                <tr><td>5. Evaluation</td><td>Validated using false positive and false negative rates for real-time performance.</td></tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaptchaDetails;
