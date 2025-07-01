import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeneralInfo from './components/generalInfo' 
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'
import ResumeContent from './components/ResumeContent'

  const[generalInfo, setGeneralInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'Email@Email.com',
    phone: '1234'

  })

   const[educationInfo, setEducationInfo] = useState({
    school: 'N/A University',
    major: 'N/A Science',
    date: '0/0/000'

  })

   const[experienceInfo, setExperienceInfo] = useState({
    company:  'N/A Inc.',
    position: 'Assistant',
    responsibilities: 'Nothing'

  })

  function generalSubmitHandler(info) {
    setGeneralInfo(info)
  }

  function educationSubmitHandler(info) {
    setEducationInfo(info)
  }

  function experienceSubmitHandler(info) {
    setExperienceInfo(info)
  }





function App() {


  return (
    <div className='contentWrapper'>
    <div className='formContent'>
    <GeneralInfo onSubmit={generalSubmitHandler}/>
    <EducationInfo onSubmit={educationSubmitHandler} />
    <ExperienceInfo onSubmit={experienceSubmitHandler}/>
    </div>

    <div className='resumeContent'>

    <ResumeContent />
    

    </div>
</div>
     
  )
}

export default App
