import { useState } from "react"

export default function GeneralInfo() {
    const [schoolName,setSchoolName] = useState()
    const [Major, setMajor] = useState()
    const [studyDate, setStudyDate] = useState()
    


    return (
        <>
        <div className="educationForm">
        <form>
            <label>School</label>
            <input type="text" />

            <label>Major</label>
            <input type="text" />

            <label>Date</label>
            <input type="date" />     

        </form>
        </div>
        </>
    )
}