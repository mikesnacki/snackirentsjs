 
import React, {useState, useRef } from 'react'
import axios from 'axios';
const url = process.env.REACT_APP_API_URL

export default function Modal({ displayModal, show, property }) {

    const modalRef = useRef();
    const displayed = show === true ? "modal display-block" : "modal display-none";

    const initialFields = {
        name:"",
        subject: "",
        email:"",
        phoneNumber:"",
        message:"",
    }

    const [fields, setFields] = useState(initialFields)
    const [sent, isSent] = useState(false)
    const [error, isError] = useState(false)

    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setFields(prevState=>({
            ...prevState,
            [name]: value,
        }))
    }

    const submitForm = async ()=> {
        const sendData =()=>{
                 axios.post(`${url}/api/properties/sendemail`, {
                        name: fields.name,
                        email: fields.email,
                        message: `${fields.name} at ${fields.email} / ${fields.phoneNumber} writes: ${fields.message}`,
                    })
                    .then(response=>{
                    if (response.data.msg !== "fail") isSent(true)
                    else if (response.data.msg === "fail") isError(true)
                })
        }
        sendData()
        setFields(initialFields)
    }

    const messageSent = <h2>We've got your message, we will reach out to you</h2>
    const messageNotSent = <h2>There's an error on our end, please reach out to the office</h2>
    const modalForm = (
        <div className="modal-form">
            <h2>Let's get some information, and we will have an associate reach out to you</h2>
            <input name="name" placeholder="Your name" onChange={handleChange} required/>
            <input name="subject" placeholder={property} defaultValue={property} onChange={handleChange} required/>
            <input name="email" placeholder="Your email" onChange={handleChange} required/>
            <input name="phoneNumber" placeholder="Your phone number" onChange={handleChange} required/>
            <textarea name="message" className="modal-textarea" placeholder="Your Message"  onChange={handleChange} required/>
            <button
                className="modal-button"
                onClick={submitForm}>
                Send
            </button>
        </div>
    )

    return (
       
        <div
            ref={modalRef}
            className={displayed}>
            <section className="modal-main align-center">
            <button
                    className="modal-button align-right-button"
                    onClick={displayModal}>
                    x
            </button>
            {error ? messageNotSent : sent ? messageSent : modalForm}
            </section>
        </div>
    )
}