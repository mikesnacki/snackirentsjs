import React, {useState} from 'react';
import AddProperty from "./AddProperty"
import EditProperties from './EditProperties'
import UpdateModal from './UpdateModal';
import axios from 'axios';
import {useFetch} from "../utilhooks/useFetch"

const Admin =()=> {  
    let properties = []
    const res = useFetch(`/api/properties`)
    
    if (!res.error) { properties = res.response } else {console.log(res.error)}

    const initialState = {
        propertyName: "",
        propertyAddress: "",
        propertyCity: "",
        propertyState: "",
        propertyZip: "",
        propertyStudioUnitsRented: "",
        propertyStudioUnits: "",
        propertyStudioRent: "",
        propertyStudioSqft: "",
        propertyStudioBeds: "",
        propertyStudioBaths: "",
        propertyOneBedroomUnitsRented: "",
        propertyOneBedroomUnits:  "",
        propertyOneBedroomRent: "",
        propertyOneBedroomSqft: "",
        propertyOneBedroomBeds: "",
        propertyOneBedroomBaths: "",
        propertyCatsAllowed: "",
        propertyDogsAllowed: "",
        propertyDescription: "",
        propertyImage: "",
        propertyDeleted: false,
    }

    const [newPropData, setNewPropData]= useState(initialState)
    const [updateModal, setUpdateModal] = useState(false)
    const [adminAction, setAdminAction] = useState(null) 
    
    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setNewPropData(prevState=>({
            ...prevState,
            [name]: value,
        }))
        console.log(newPropData)
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const newProperty = {...newPropData}

        await axios
            .post(`/api/properties/add`, newProperty)
            .then(res=> console.log(res.data))
            .catch(err=>console.log(err))

        setNewPropData({...initialState})
        setAdminAction("added")
        setUpdateModal(true)
    }

    const closeUpdateModal=()=>{
        setAdminAction(null)
        setUpdateModal(false)
    }

    return (
        <div>
            <AddProperty
                newPropData={newPropData}
                initialState={initialState} 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <EditProperties
                properties={properties}
            />
            <UpdateModal
                show={updateModal}
                setUpdateModal={setUpdateModal}
                adminAction={adminAction}
                closeUpdateModal={closeUpdateModal}
            />
        </div>
    )
}

export default Admin;