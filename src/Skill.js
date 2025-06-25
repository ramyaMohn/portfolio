import React from 'react'
import './App.css';
import Project from './Project.js';
import Paper from './Paper.js';
import Acheivement from './Achievement.js';
import git from './github.png';
import linked from './linkedin.png';
import { Link} from 'react-router-dom';
const Skill = () => {
  return (
    <div>
        <nav className='skill_nav'>
            <p>My Skillsets</p>
        </nav>
    <div className='main-skill'>
          <nav className='side_nav'>
            <ul>
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/project' >Project</Link></li>
          <li><Link to='/acheive' >Acheivements</Link></li></ul>
        </nav>
        <div className='container'>
          <section className='skill'>
            <dl>
              <div className='skill-box'>
              <dt>Programming Languages</dt>
              <dd>I am proficient in several programming languages that serve as the foundation for software development and algorithmic problem-solving:
                <ul>
                  <li>Java – Experienced in object-oriented programming and backend development.</li>
                  <li>Python – Skilled in scripting, data analysis, and building machine learning models.</li>
                  <li>C/C++ – Solid understanding of system-level programming and memory management.</li>
                  <li>JavaScript – Utilized for creating interactive web interfaces and dynamic content.</li>
                </ul>
              </dd></div>
              <div className='skill-box'>
              <dt>Machine Learning & Artificial Intelligence</dt>
              <dd>My expertise in ML and AI includes building intelligent systems and predictive models using industry-standard libraries and frameworks:
                <ul>
                  <li>Scikit-learn – Implemented classification, regression, and clustering models.</li>
                  <li>TensorFlow / Keras – Developed and trained deep learning networks.</li>
                  <li>OpenCV – Applied computer vision techniques for real-time image and video processing.</li>
                  <li>YOLO / CNNs – Used for object detection and image classification tasks.</li>
                  <li>Pandas / NumPy – For efficient data handling and numerical computations.</li>
                </ul>
              </dd></div>
              <div className='skill-box'>
              <dt>Web Development</dt>
              <dd>I have hands-on experience in building responsive and full-stack web applications using modern development tools:
                <ul>
                  <li>HTML, CSS, JavaScript – Developed structured, styled, and interactive front-end interfaces.</li>
                  <li>React.js – Built scalable, component-based user interfaces.</li>
                  <li>Node.js & Express.js – Developed RESTful APIs and server-side applications.</li>
                  <li>MongoDB & MySQL – Used for efficient data storage, retrieval, and management.</li>
                </ul>
              </dd></div>
              <div className="skill-box">
              <dt>Tools & Technologies</dt>
              <dd>I utilize a variety of tools to ensure efficient development, collaboration, and deployment:
                <ul>
                  <li>Git & GitHub – Version control and collaborative development.</li>
                  <li>VS Code – Preferred IDEs for efficient coding and debugging.</li>
                  <li>Postman – API testing and development.</li>
                  <li>Firebase / Netlify – Used for hosting and deployment of web applications.</li>
                </ul>
              </dd></div>
              <div className='skill-box'>
              <dt>Soft Skills</dt>
              <dd>In addition to technical proficiency, I bring essential soft skills that support collaboration and project execution:
    <ul>
      <li>Problem-Solving – Strong analytical thinking and approach to resolving complex challenges.</li>
      <li>Teamwork – Experience in collaborative environments, both academic and project-based.</li>
      <li>Time Management – Ability to meet deadlines and balance multiple responsibilities effectively.</li>
      <li>Communication – Clear in written and verbal communication, especially in presenting technical content.</li>
    </ul>
</dd></div>

            </dl>
          </section>
        </div>
        
        </div>
        <div className='skill-foot'><center>
          <p>Explore my projects on GitHub and connect with me on LinkedIn</p><br />
          <a
        href="https://github.com/ramyaMohn"
        target="_blank"
        rel="noopener noreferrer"
      >
              <img id="git" src={git} alt="github" /></a>
               <a
        href="https://www.linkedin.com/in/ramya-mohankumar-8bbb98294/"
        target="_blank"
        rel="noopener noreferrer"
      >
              <img id="linkd" src={linked} alt="linkedin" /></a>
              </center>
        </div>
    </div>
  )
}

export default Skill
