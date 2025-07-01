export default function ResumeContent({generalInfo,educationInfo,experienceInfo}) {


    return (
        <div>
            <div className="generalInformation">
            <h1>{generalInfo.firstName} {generalInfo.lastName}</h1>
            <ul>
               <li>{generalInfo.email}</li> 
               <li>{generalInfo.phone}</li>
            </ul>
            </div>

            <div className="educationInformation">
            <h1>Education</h1>
            <h2>{educationInfo.school}</h2>
            <div className="majorDateInfo">
            <h4>{educationInfo.major}</h4>
            <p>{educationInfo.date}</p>
            </div>

            </div>

            <div className="experienceInformation">
            <h1>Experience</h1>
            <h2>{experienceInfo.company}</h2>
            <div className="positionDateInfo">
            <p>{experienceInfo.position}</p>
            <p>{experienceInfo.responsibilities}</p>
            </div>
            </div>

        </div>
    )
}