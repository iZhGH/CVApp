import './styles/general.css'
import { useState } from "react"

export default function GeneralInfo() {
    const [firstName,setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    


    return (
        <>
        <div className="generalForm">
            <h1>General Information:</h1>
        <form>

            <div className='formGroup'>
            <label>First Name:</label>
            <input type="text" />
            </div>

            <div className='formGroup'>
            <label>Last Name:</label>
            <input type="text" />
           </div>         
            

            <div className='formGroup'>
            <label>Email:</label>
            <input type="email" />
            </div>

            <div className='formGroup'>
            <label>Phone Number:</label>
            <input type="tel" />       
            </div>

            <div className='formGroup'>
                <input type='submit'></input>
            </div>
        </form>
        </div>
        </>
    )
}