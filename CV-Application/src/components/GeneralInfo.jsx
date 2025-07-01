import './styles/general.css'
import { useState } from "react"

export default function GeneralInfo({onSubmit}) {
    const [firstName,setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    
    function handleSubmit(e) {
        e.preventDefault()
        const info = {firstName, lastName, email, phoneNumber}
        onSubmit(info)
    }



    return (
        <>
        <div className="generalForm">
            <h1>General Information:</h1>
        <form onSubmit={handleSubmit}>

            <div className='formGroup'>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>

            <div className='formGroup'>
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
           </div>         
            

            <div className='formGroup'>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='formGroup'>
            <label>Phone Number:</label>
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>       
            </div>

            <div className='formGroup'>
                <input type='submit'></input>
            </div>
        </form>
        </div>
        </>
    )
}