 
import React, { useRef } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function UpdateModal({ adminAction, show, closeUpdateModal }) {

    const modalRef = useRef();
    const displayed = show === true ? "modal display-block" : "modal display-none";
    let status;

    switch(adminAction){
        case "added":
        status = <p>Property added</p>
        break
        case "updated":
        status = <p>Property updated</p>
        break
        case "deleted":
        status = <p>Property deleted</p>
        break
        default:
        status = null 
        break;
    }

    return (
        <div
            ref={modalRef}
            className={displayed}>
            <section className="modal-update align-center">
            <button
                    className="modal-button align-right-button"
                    onClick={closeUpdateModal}>
            <FaTimes/>
            </button>
                <h3>{status}</h3>
                <FaCheck/>
            </section>
        </div>
    )
}