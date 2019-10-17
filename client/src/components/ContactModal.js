 
import React, {useState, useRef } from 'react'

export default function Modal({ displayModal, show, property }) {

    const modalRef = useRef();
    const displayed = show === true ? "modal display-block" : "modal display-none";

    const [fields, setFields] = useState({
        name:"",
        subject: "",
        email:"",
        phoneNumber:"",
        message:"",
    })

    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setFields(prevState=>({
            ...prevState,
            [name]: value,
        }))
    }

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
                <h2>Let's get some information, and we will have an associate reach out to you</h2>
                <input name="name" placeholder="Your name" onChange={handleChange} required/>
                <input name="subject" placeholder={property} defaultValue={property} onChange={handleChange} required/>
                <input name="email" placeholder="Your email" onChange={handleChange} required/>
                <input name="phoneNumber" placeholder="Your phone number" onChange={handleChange} required/>
                <textarea name="message" className="modal-textarea" placeholder="Your Message"  required/>
                <button
                    className="modal-button"
                    onClick={displayModal}>
                    Send
            </button>
            </section>
        </div>
    )
}