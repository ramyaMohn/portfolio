import React from 'react';
import './skill.css';
import git from './github.png';
import linked from './linkedin.png';
import { Link } from 'react-router-dom';

const Skill = () => {
  return (
    <div>
      <nav className='skill_nav'>
        <p>My Skillsets</p>
      </nav>
<nav className='side_nav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/project'>Projects</Link></li>
            <li><Link to='/acheive'>Achievements</Link></li>
          </ul>
        </nav>
      <div className='main-skill'>
        

        <div className='container'>
          <section className='skill'>
            <dl>
              <div className='skill-box'>
                <dt>Programming Languages</dt>
                <dd>
                  <ul>
                    <li>Java – Object-oriented backend development.</li>
                    <li>Python – Scripting, data analysis, ML models.</li>
                    <li>C/C++ – System-level programming, memory management.</li>
                    <li>JavaScript – Interactive front-end interfaces.</li>
                  </ul>
                </dd>
              </div>

              <div className='skill-box'>
                <dt>Machine Learning & AI</dt>
                <dd>
                  <ul>
                    <li>Scikit-learn – Classification & clustering models.</li>
                    <li>TensorFlow / Keras – Deep learning networks.</li>
                    <li>OpenCV – Image/video processing.</li>
                    <li>YOLO / CNNs – Object detection & classification.</li>
                    <li>Pandas / NumPy – Data handling & computation.</li>
                  </ul>
                </dd>
              </div>

              <div className='skill-box'>
                <dt>Web Development</dt>
                <dd>
                  <ul>
                    <li>HTML, CSS, JavaScript – Responsive front-end design.</li>
                    <li>React.js – Scalable UIs with components.</li>
                    <li>Node.js & Express.js – REST APIs & backend.</li>
                    <li>MongoDB & MySQL – Database management.</li>
                  </ul>
                </dd>
              </div>

              <div className='skill-box'>
                <dt>Tools & Technologies</dt>
                <dd>
                  <ul>
                    <li>Git & GitHub – Version control.</li>
                    <li>VS Code – Code editing & debugging.</li>
                    <li>Postman – API testing.</li>
                    <li>Firebase / Netlify – Hosting & deployment.</li>
                  </ul>
                </dd>
              </div>

              <div className='skill-box'>
                <dt>Soft Skills</dt>
                <dd>
                  <ul>
                    <li>Problem-Solving – Analytical thinking.</li>
                    <li>Teamwork – Project collaboration experience.</li>
                    <li>Time Management – Task prioritization & delivery.</li>
                    <li>Communication – Clear technical presentation.</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </div>

      <div className='skill-foot'>
        <center>
          <p>Explore my projects on GitHub and connect with me on LinkedIn</p><br />
          <a href="https://github.com/ramyaMohn" target="_blank" rel="noopener noreferrer">
            <img id="git" src={git} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/ramya-mohankumar-8bbb98294/" target="_blank" rel="noopener noreferrer">
            <img id="linkd" src={linked} alt="linkedin" />
          </a>
        </center>
      </div>
    </div>
  );
};

export default Skill;
