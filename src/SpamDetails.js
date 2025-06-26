import React from 'react';
import { Link } from 'react-router-dom';
import mail from './mail.jpeg';
import './prj.css'; 

const SpamDetails = () => {
  return (
    <div>
      {/* Top Navigation Bar */}
      <div className='top-navbar'>
        Email Spam Detection
      </div>

      {/* Layout container */}
      <div className="content-wrapper">
        {/* Sidebar */}
        <nav className='side-navbar'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Skill'>Skill</Link></li>
            <li><Link to='/acheive'>Achievement</Link></li>
            <li><Link to='/project'>Project</Link></li>
          </ul>
        </nav>

        {/* Main Project Container */}
        <div className="project-container">
          {/* Image */}
          <img src={mail} alt="Email Spam Detection" className="project-image" />

          {/* About Section */}
          <section className="section">
            <h2>About the Project</h2>
            <p>
              This project leverages machine learning to effectively detect spam emails using textual feature
              extraction and classification. It ensures users receive only relevant and important messages by
              filtering unwanted and potentially harmful emails.
            </p>
          </section>


          <section className="section">
            <h2>Methodology Used</h2>
            <table className="details-table">
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
