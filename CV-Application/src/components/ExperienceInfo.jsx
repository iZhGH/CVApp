import { useState } from "react"

export default function ExperienceInfo({onSubmit}) {
    const [companyName, setCompanyName] = useState()
    const [Position, setPosition] = useState()
    const [Responsibilities, setResponsibilities] = useState()
    

     function handleSubmit(e) {
        e.preventDefault()
        const info = { companyName, Position, Responsibilities }
        onSubmit(info)
    }



    return (
        <>
        <div className="experienceForm">
            <h1>Experience Information:</h1>
        <form onSubmit={handleSubmit}>


            <div className="formGroup">
            <label>Company Name:</label>
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
            </div>

            <div className="formGroup">
            <label>Position:</label>
            <input type="text" value={Position} onChange={(e) => setPosition(e.target.value)}/>
            </div>


            <div className="formGroup">
            <label>Responsibilities:</label>
            <textarea value={Responsibilities} onChange={(e) => setResponsibilities(e.target.value)}></textarea>
            </div>

            <div className='formGroup'>
                <input type='submit'></input>
            </div>
        </form>
        </div>
        </>
    )
}