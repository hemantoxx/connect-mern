import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import { Link } from "react-router-dom"

const Landing = () => {
  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])
  return (
      <div className="landing">
            <Particles className='particles-hai' options={particlesOptions} init={particlesInit}/>
            <div className='main'>
              <div className='new_main'>
            <img className="logos" src={require('../images/logo.png')} alt='' />
          <div className="main-text">
              <h1>HOMEIFIND</h1>
              <p id="landing-p-desk">AFFORADABLE HOME SOLUTIONS</p>
        </div>
    </div>
    <p id="landing-p-mob">A AFFORDABLE HOME SOLUTION...</p>

    
    </div> 
    <Link id="landing-btn" to="/home">Let's Dive In</Link>         
      </div>
  )
}

export default Landing
