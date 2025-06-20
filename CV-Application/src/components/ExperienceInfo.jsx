import { useState } from "react"

export default function ExperienceInfo() {
    const [companyName, setCompanyName] = useState()
    const [Position, setPosition] = useState()
    const [Responsibilities, setResponsibilities] = useState()
    


    return (
        <>
        <div className="experienceForm">
        <form>
            <label>Company Name:</label>
            <input type="text" />

            <label>Position:</label>
            <input type="text" />

            <label>Responsibilities:</label>
            <textarea></textarea>

        </form>
        </div>
        </>
    )
}