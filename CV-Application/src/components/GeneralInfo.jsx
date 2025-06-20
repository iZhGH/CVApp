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
        <form>
            <label>First Name:</label>
            <input type="text" />

            <label>Last Name:</label>
            <input type="text" />

            <label>Email:</label>
            <input type="email" />

            <label>Phone Number:</label>
            <input type="tel" />       

        </form>
        </div>
        </>
    )
}