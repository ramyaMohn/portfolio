import React from 'react';
import './Achievement.css';

const Achievement = () => {
  return (
    <div className="page-container">
      {/* Navbar */}
      <nav className="hom_nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/project">Projects</a></li>
          <li><a href="/achievement">Achievements</a></li>
        </ul>
      </nav>

      {/* Page Header */}
      <div className="page-header">
        <h1>Achievements</h1>
      </div>

      {/* Achievement List */}
      <div className="achievement-list">
  <div className="achievement-item">
    <strong>2nd Prize</strong> – Presented a research paper on <em>"The Role of Artificial Intelligence in the Study of Black Holes"</em> at <strong>SNS College, Coimbatore</strong>.
  </div>

  <div className="achievement-item">
    <strong>2nd Prize</strong> – Paper presentation on <em>"AI-Based CAPTCHA Refinement"</em> at the <strong>Exodia event</strong> held at <strong>Kongu Engineering College</strong>.
  </div>

  <div className="achievement-item">
    <strong>2nd Prize</strong> – Idea presentation on <em>"AI-Powered CAPTCHA Enhancement"</em> at <strong>K.S.R. College</strong>.
  </div>

  <div className="achievement-item">
    <strong>2nd Prize</strong> – Presented the project <em>"AI Tutor – An Interactive Educational Assistant"</em> at <strong>Sri Ramakrishna College, Coimbatore</strong>.
  </div>

  <div className="achievement-item">
    Successfully completed the <strong>MongoDB Certification Course</strong>, gaining hands-on experience in NoSQL database management and CRUD operations.
  </div>

  <div className="achievement-item">
    Successfully completed the <strong>Oracle Certification Course</strong>, covering SQL fundamentals, relational databases, and Oracle tools.
  </div>
</div>

    </div>
  );
};

export default Achievement;
