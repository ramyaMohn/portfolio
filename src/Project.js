import React from 'react'
import './App.css';
import { Link} from 'react-router-dom';
import mail from './mail.jpeg';
import brain from './brainstroke.jpg';
import captcha from'./captcha.jpg';
import poach from './poaching.jpeg';
const Project = () => {
  
  return (
    <div>
      <nav className='proj_nav'>
        My Projects
      </nav>
      <div className='main-skill'>
                <nav className='side_nav'>
                  <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/Skill' >Skill</Link></li>
                <li><Link to='/paper' >Papers</Link></li>
                <li><Link to='/acheive' >Acheivements</Link></li></ul>
              </nav>
              <div className='container'>
                 <section className='proj'>
                  <div className='projects'>
                    <img src={mail} alt="mail"/>
                    <div className='project-content'>
                    <h3>Email Spam Detection using Bio-inspired Mechanism</h3><br/>
                    <p>This project uses machine learning techniques such as TF-IDF and classification algorithms to detect spam emails effectively. A bio-inspired optimization algorithm was implemented to fine-tune the model's parameters and improve accuracy, ensuring users receive only important and relevant emails.</p></div>  <div className="arrow-container">
                    <Link to='/project/spam' className='arrow-link'>&gt;</Link>
                  </div>
                  </div>
                  <div className="projects">
                    <img src={brain} alt="brain"/>
                    <div className='project-content'>
                    <h3>Brain Stroke Prediction System</h3>
                    <p>A machine learning model was developed to predict the likelihood of a brain stroke based on user-specific factors such as age, BMI, lifestyle, and work type. The system also suggests preventive measures to lower the risk by analyzing contributing variables.</p></div>  <div className="arrow-container">
                    <Link to='/project/brainstroke' className='arrow-link'>&gt;</Link></div>
                    </div>
                    <div className='projects'>
                      <img src={captcha} alt="captcha"/>
                      <div className='project-content'>
                      <h3>Passive CAPTCHA Solution </h3>
                      <p>A novel solution to improve CAPTCHA systems by passively identifying users as humans or bots without user interaction. Browser behavior and environmental parameters are analyzed using supervised machine learning models, with plans to integrate reinforcement learning for continuous learning.</p> </div> <div className="arrow-container">
                      <Link to='/project/captcha' className='arrow-link'>&gt;</Link>
                    </div></div>
                    <div className='projects'>
                      <img src={poach} alt=''/>
                      <div className='project-content'>
                      <h3>Real-time Poaching and Deforestation Detection</h3>
                      <p>This project utilizes YOLO and ResNet-50 models to detect illegal poaching and deforestation in forest regions using live CCTV and satellite imagery. Alerts are automatically sent to authorities based on the type of activity detected, helping in wildlife conservation and forest protection.</p> </div> <div className="arrow-container">
                      <Link to='/project/poaching' className='arrow-link'>&gt;</Link>
                      </div></div>
                 </section>
              </div>
              </div>
    </div>
  )
}

export default Project