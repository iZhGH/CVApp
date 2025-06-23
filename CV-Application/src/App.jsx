import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeneralInfo from './components/generalInfo' 
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'
import ResumeContent from './components/ResumeContent'

function App() {


  return (
    <div className='contentWrapper'>
    <div className='formContent'>
    <GeneralInfo />
    <EducationInfo />
    <ExperienceInfo />
    </div>

    <div className='resumeContent'>

    <ResumeContent />
    

    </div>
</div>
     
  )
}

export default App
