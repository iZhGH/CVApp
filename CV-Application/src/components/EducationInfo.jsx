import { useState } from "react"

export default function GeneralInfo({onSubmit}) {
    const [schoolName,setSchoolName] = useState()
    const [Major, setMajor] = useState()
    const [studyDate, setStudyDate] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        const info = { schoolName, Major, studyDate }
        onSubmit(info)
    }

    
  

    return (
        <>
        <div className="educationForm">
            <h1>Education Information:</h1>
        <form onSubmit={handleSubmit}>

            <div className="formGroup">
            <label>School</label>
            <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)}/>
            </div>

            <div className="formGroup">
            <label>Major</label>
            <input type="text" value={Major} onChange={(e) => setMajor(e.target.value)}/>
            </div>

            <div className="formGroup">
            <label>Date</label>
            <input type="date" value={studyDate} onChange={(e) => setStudyDate(e.target.value)}/>     
            </div>

            <div className='formGroup'>
                <input type='submit'></input>
            </div>
        </form>
        </div>
        </>
    )
}