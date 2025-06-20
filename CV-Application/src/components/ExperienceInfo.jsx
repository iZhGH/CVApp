import { useState } from "react"

export default function ExperienceInfo() {
    const [companyName, setCompanyName] = useState()
    const [Position, setPosition] = useState()
    const [Responsibilities, setResponsibilities] = useState()
    


    return (
        <>
        <div className="EducationInfo">
        <form>
            <label>Company Name:</label>
            <input type="text" />

            <label>Position:</label>
            <input type="text" />

            <label>Responsibilities:</label>
            <textarea>List your responsibilities!</textarea>

        </form>
        </div>
        </>
    )
}