import React from 'react';
import { Link } from 'react-router-dom';
import './project.css'; // Use general responsive CSS
import mail from './mail.jpeg';
import brain from './brainstroke.jpg';
import captcha from './captcha.jpg';
import poach from './poaching.jpeg';

const Project = () => {
  return (
    <div className="project-wrapper">
      {/* Top Navbar */}
      <header className="top-navbar">
        My Projects
      </header>

      {/* Sidebar Navigation */}
      <nav className="side-navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Skill">Skill</Link></li>
          <li><Link to="/acheive">Achievements</Link></li>
        </ul>
      </nav>

      {/* Main Project Content */}
      <main className="content-wrapper">
        <div className="project-container">
          <section className="project-list">
            {/* Spam Project */}
            <div className="project-card">
              <img src={mail} alt="Email Spam Detection" className="project-image" />
              <div className="project-content">
                <h3>Email Spam Detection using Bio-inspired Mechanism</h3>
                <p>
                  This project uses machine learning techniques such as TF-IDF and classification algorithms
                  to detect spam emails effectively. A bio-inspired optimization algorithm was implemented to
                  fine-tune the model's parameters and improve accuracy.
                </p>
                <div className="arrow-container">
                  <Link to="/project/spam" className="arrow-link">&gt;</Link>
                </div>
              </div>
            </div>

            {/* Brain Stroke Project */}
            <div className="project-card">
              <img src={brain} alt="Brain Stroke" className="project-image" />
              <div className="project-content">
                <h3>Brain Stroke Prediction System</h3>
                <p>
                  A machine learning model was developed to predict the likelihood of a brain stroke based
                  on factors such as age, BMI, lifestyle, and work type. Preventive suggestions are also provided.
                </p>
                <div className="arrow-container">
                  <Link to="/project/brain" className="arrow-link">&gt;</Link>
                </div>
              </div>
            </div>

            {/* CAPTCHA Project */}
            <div className="project-card">
              <img src={captcha} alt="CAPTCHA" className="project-image" />
              <div className="project-content">
                <h3>Passive CAPTCHA Solution</h3>
                <p>
                  A novel CAPTCHA system that passively identifies humans or bots using browser behavior
                  and environmental parameters, avoiding manual user input. ML + Reinforcement Learning planned.
                </p>
                <div className="arrow-container">
                  <Link to="/project/captcha" className="arrow-link">&gt;</Link>
                </div>
              </div>
            </div>

            {/* Poaching Detection Project */}
            <div className="project-card">
              <img src={poach} alt="Poaching Detection" className="project-image" />
              <div className="project-content">
                <h3>Real-time Poaching & Deforestation Detection</h3>
                <p>
                  Utilizes YOLO and ResNet-50 models with satellite and CCTV data to detect illegal poaching
                  and deforestation. Alerts are sent in real time to the concerned authorities.
                </p>
                <div className="arrow-container">
                  <Link to="/project/poach" className="arrow-link">&gt;</Link>
                </div>
              </div>
            </div>

          </section>
        </div>
      </main>
    </div>
  );
};

export default Project;
