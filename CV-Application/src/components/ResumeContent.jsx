export default function ResumeContent({generalInfo,educationInfo,experienceInfo}) {

    console.log("General Info in ResumeContent:", generalInfo);
  console.log("Education Info in ResumeContent:", educationInfo);
  console.log("Experience Info in ResumeContent:", experienceInfo);

    return (
        <div>
            <div className="generalInformation">
            <h1>{generalInfo.firstName} {generalInfo.lastName}</h1>
            <ul>
               <li>{generalInfo.email}</li> 
               <li>{generalInfo.phoneNumber}</li>
            </ul>
            </div>

            <div className="educationInformation">
            <h1>Education</h1>
            <h2>{educationInfo.schoolName}</h2>
            <div className="majorDateInfo">
            <h4>{educationInfo.Major}</h4>
            <p>{educationInfo.studyDate}</p>
            </div>

            </div>

            <div className="experienceInformation">
            <h1>Experience</h1>
            <h2>{experienceInfo.companyName}</h2>
            <div className="positionDateInfo">
            <p>{experienceInfo.Position}</p>
            <p>{experienceInfo.Responsibilities}</p>
            </div>
            </div>

        </div>
    )
}