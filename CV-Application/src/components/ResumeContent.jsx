export default function ResumeContent() {


    return (
        <div>
            <div className="generalInformation">
            <h1>First Last</h1>
            <ul>
               <li>Email</li> 
               <li>Phone</li>
            </ul>
            </div>

            <div className="educationInformation">
            <h1>Education</h1>
            <h2>School</h2>
            <div className="majorDateInfo">
            <h4>Major</h4>
            <p>Date</p>
            </div>

            </div>

            <div className="experienceInformation">
            <h1>Experience</h1>
            <h2>Company</h2>
            <div className="positionDateInfo">
            <p>Position</p>
            <p>Date</p>
            </div>
            </div>

        </div>
    )
}