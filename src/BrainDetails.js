import React from 'react';
import { Link } from 'react-router-dom';
import brain from './brainstroke.jpg';
import './App.css';

const BrainDetails = () => {
  return (
    <div>
      <nav className='proj_nav'>
        <div className="nav-center">Brain Stroke Prediction</div>
      </nav>

      <div className="main-skill">
        <nav className='side_nav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Skill'>Skill</Link></li>
            <li><Link to='/paper'>Papers</Link></li>
            <li><Link to='/acheive'>Achievements</Link></li>
          </ul>
        </nav>

        <div className="project-detail-container">
          <img src={brain} alt="Brain Stroke" className="project-detail-img" />

          <section className="project-section">
            <h2>About the Project</h2>
            <p>
              This system predicts the likelihood of a brain stroke based on key risk factors such as age, BMI, smoking status, and work type. It provides early warning indicators and preventive recommendations to help users reduce their risk.
            </p>
          </section>

          <section className="project-section">
            <h2>Methodology Used</h2>
            <table className="methodology-table">
              <thead>
                <tr><th>Step</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>1. Data Collection</td><td>Collected anonymized patient records with stroke-related factors like age, hypertension, smoking.</td></tr>
                <tr><td>2. Preprocessing</td><td>Handled missing values, normalized features, and converted categorical variables using one-hot encoding.</td></tr>
                <tr><td>3. Feature Selection</td><td>Selected features with high correlation to stroke outcome for better accuracy.</td></tr>
                <tr><td>4. Model Training</td><td>Trained Logistic Regression and Decision Tree classifiers.</td></tr>
                <tr><td>5. Evaluation</td><td>Used accuracy, recall, and confusion matrix to validate model performance.</td></tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BrainDetails;
