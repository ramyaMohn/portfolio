import './App.css';
import { useLocation, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import prof from './prof.jpeg';
import git from './github.png';
import linked from './linkedin.png';
import Skill from './Skill.js';
import Project from './Project.js';
import Paper from './Paper.js';
import Achievement from './Achievement.js';
import SpamDetails from './SpamDetails.js';
import BrainDetails from './BrainDetails.js';
import CaptchaDetails from './CaptchaDetails.js';
import PoachingDetails from './PoachingDetails.js';

function AppContent() {
  const location = useLocation();
  const isHome=location.pathname==='/'
  return (
    <div className="App">
      {isHome &&(<header className="App-header">
        <nav className="hom_nav">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Skill'>MySkill</Link></li>
            <li><Link to='/project'>Projects</Link></li>
            <li><Link to='/acheive'>Acheivements</Link></li>
          </ul>
        </nav>
      </header>)}
      

      <Routes>
        <Route path="/Skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/paper" element={<Paper />} />
        <Route path="/acheive" element={<Achievement />} />
        <Route path="/project/spam" element={<SpamDetails />} />
<Route path="/project/brain" element={<BrainDetails />} />
<Route path="/project/captcha" element={<CaptchaDetails />} />
<Route path="/project/poach" element={<PoachingDetails />} />

      </Routes>

      {location.pathname === '/' && (
        <>
          <div className='outer'>
            <center><h1>Portfolio</h1></center>
            <center>
              <div className='inner'>
                <div className='hom_img'>
                  <img id="profile" src={prof} alt="profile" />
                  <div className='hom-con'>
                    <p id="des">
                      Welcome to my portfolio. This platform serves as a detailed representation of my academic and professional journey. It includes an overview of my technical skills, a showcase of academic and personal projects, research papers I have contributed to, and the key achievements that have shaped my development. Each section reflects my commitment to continuous learning, innovation, and solving real-world problems through technology.
                    </p>
                  </div>
                </div>
              </div>
            </center>
          </div>

          <div className="hom_foot">
            <center>
              <p>Explore my projects on GitHub and connect with me on LinkedIn</p><br />
              <a
        href="https://github.com/ramyaMohn"
        target="_blank"
        rel="noopener noreferrer"
      >
              <img id="git" src={git} alt="github" />
              </a>
              <a
        href="https://www.linkedin.com/in/ramya-mohankumar-8bbb98294/"
        target="_blank"
        rel="noopener noreferrer"
      >
              <img id="linkd" src={linked} alt="linkedin" /></a>
            </center>
          </div>
        </>
      )}
    </div>
  );
}


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
