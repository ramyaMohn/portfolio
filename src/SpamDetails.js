import React from 'react';
import { Link } from 'react-router-dom';
import mail from './mail.jpeg';
import './App.css'; // make sure styles are reused

const SpamDetails = () => {
  return (
    <div>
      {/* Top Navigation Bar */}
      <nav className='proj_nav'>
        <div className="nav-center">Email Spam Detection</div>
      </nav>

      <div className="main-skill">
        {/* Sidebar */}
        <nav className='side_nav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Skill'>Skill</Link></li>
            
            <li><Link to='/acheive'>Achievements</Link></li>
          </ul>
        </nav>

        {/* Content Section */}
        <div className="project-detail-container">
          <img src={mail} alt="Email Spam Detection" className="project-detail-img" />
          
          <section className="project-section">
            <h2>About the Project</h2>
            <p>
              This project leverages machine learning to effectively detect spam emails using textual feature extraction and classification. It ensures users receive only relevant and important messages by filtering unwanted and potentially harmful emails.
            </p>
          </section>

          <section className="project-section">
  <h2>Methodology Used</h2>
  <table className="methodology-table">
    <thead>
      <tr>
        <th>Step</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1. Data Preprocessing</td>
        <td>Cleaned email text data, removed stopwords, punctuation, and applied tokenization.</td>
      </tr>
      <tr>
        <td>2. Feature Extraction</td>
        <td>Used TF-IDF to convert textual data into numerical vectors representing word importance.</td>
      </tr>
      <tr>
        <td>3. Model Selection</td>
        <td>Trained classification models including Naive Bayes and Logistic Regression.</td>
      </tr>
      <tr>
        <td>4. Optimization</td>
        <td>Applied a bio-inspired algorithm to fine-tune model hyperparameters and improve accuracy.</td>
      </tr>
      <tr>
        <td>5. Evaluation</td>
        <td>Evaluated the model performance using metrics like accuracy, precision, and recall.</td>
      </tr>
    </tbody>
  </table>
</section>

        </div>
      </div>
    </div>
  );
};

export default SpamDetails;
