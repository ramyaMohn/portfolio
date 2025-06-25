import React, { useState } from 'react';
import './Paper.css';

const Paper = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const downloadFile = (filePath, fileName) => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="hom_nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/project">Projects</a></li>
          <li><a href="/paper">Papers</a></li>
        </ul>
        <h1 className="nav-title">Papers</h1>
      </nav>

      {/* Dropdown Content */}
      <div className="dropdown-container">
        <div className="dropdown-header" onClick={toggleDropdown}>
          <span>Research Paper Section</span>
          <span className={`arrow ${isOpen ? 'rotate' : ''}`}>&#9660;</span>
        </div>

        {isOpen && (
          <div className="dropdown-content">
            <p>
              This section explains our project methodology and research findings. You can download the supporting materials below.
            </p>
            <button
              className="download-btn"
              onClick={() => downloadFile('/files/sample-paper.pdf', 'ResearchPaper.pdf')}
            >
              Download PDF
            </button>
            <button
              className="download-btn"
              onClick={() => downloadFile('/files/sample-ppt.pptx', 'Presentation.pptx')}
            >
              Download PPT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Paper;
