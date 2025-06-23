import { useState } from "react"

export default function ExperienceInfo() {
    const [companyName, setCompanyName] = useState()
    const [Position, setPosition] = useState()
    const [Responsibilities, setResponsibilities] = useState()
    


    return (
        <>
        <div className="experienceForm">
            <h1>Experience Information:</h1>
        <form>


            <div className="formGroup">
            <label>Company Name:</label>
            <input type="text" />
            </div>

            <div className="formGroup">
            <label>Position:</label>
            <input type="text" />
            </div>


            <div className="formGroup">
            <label>Responsibilities:</label>
            <textarea></textarea>
            </div>
        </form>
        </div>
        </>
    )
}