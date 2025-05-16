import React from 'react'
import '../styles/Project.css';


const Project = () => {
  return (
    <div className='project'>
      <h2 className="project-title">Chrome Extension</h2>
      <div className="project-container">
        <div className="project-image">
          <img src="https://www.actuia.com/storage/uploads/2022/09/oeuvre-art-generee-IA-MidJourney-remporte-1er-prix-Colorado-State-Fair-696x385.png" alt="Project" />
        </div>
        <div className="project-description">
          <p>
            This is a Chrome extension that helps users manage their tabs more efficiently. It allows users to group tabs, save tab sessions, and quickly access frequently used websites.
          </p>
          <p>
            Technologies used: JavaScript, HTML, CSS
          </p>
        </div>
        </div>
        
    </div>
  )
}

export default Project