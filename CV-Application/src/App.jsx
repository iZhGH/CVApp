import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GeneralInfo from './components/generalInfo' 
import EducationInfo from './components/EducationInfo'
import ExperienceInfo from './components/ExperienceInfo'

function App() {


  return (
    <>
    <GeneralInfo />
    <EducationInfo />
    <ExperienceInfo />
     </>
  )
}

export default App
