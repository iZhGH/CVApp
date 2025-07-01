import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeneralInfo from './components/GeneralInfo' 
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'
import ResumeContent from './components/ResumeContent'






function App() {

  
  const[generalInfo, setGeneralInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'Email@Email.com',
    phone: '123456'

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
    console.log("General Info Received:", info);
    setGeneralInfo(info)
  }

  function educationSubmitHandler(info) {
    console.log("Education Info Received:", info);
    setEducationInfo(info)
  }

  function experienceSubmitHandler(info) {
     console.log("Experience Info Received:", info);
    setExperienceInfo(info)
  }






  return (
    <div className='contentWrapper'>
    <div className='formContent'>
    <GeneralInfo onSubmit={generalSubmitHandler}/>
    <EducationInfo onSubmit={educationSubmitHandler} />
    <ExperienceInfo onSubmit={experienceSubmitHandler}/>
    </div>

    <div className='resumeContent'>

    <ResumeContent generalInfo={generalInfo} educationInfo={educationInfo} experienceInfo={experienceInfo} />
    

    </div>
</div>
     
  )
}

export default App
