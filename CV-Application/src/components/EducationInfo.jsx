import { useState } from "react"

export default function GeneralInfo() {
    const [schoolName,setSchoolName] = useState()
    const [Major, setMajor] = useState()
    const [studyDate, setStudyDate] = useState()
    


    return (
        <>
        <div className="educationForm">
            <h1>Education Information:</h1>
        <form>

            <div className="formGroup">
            <label>School</label>
            <input type="text" />
            </div>

            <div className="formGroup">
            <label>Major</label>
            <input type="text" />
            </div>

            <div className="formGroup">
            <label>Date</label>
            <input type="date" />     
            </div>
        </form>
        </div>
        </>
    )
}