import React, {useState} from 'react';
import axios from 'axios'
import {useFetch} from "../utilhooks/useFetch"
const url = process.env.REACT_APP_API_URL

export const Property=(property)=> {

    const propertyData = {
        propertyName: property.property.propertyName,
        propertyAddress: property.property.propertyAddress,
        propertyCity: property.property.propertyCity,
        propertyState: property.property.propertyState,
        propertyZip: property.property.propertyZip,
        propertyStudioUnitsRented: property.property.propertyStudioUnitsRented,
        propertyStudioUnits: property.property.propertyStudioUnits,
        propertyStudioRent: property.property.propertyStudioRent,
        propertyStudioSqft: property.property.propertyStudioSqft,
        propertyStudioBeds: property.property.propertyStudioBeds,
        propertyStudioBaths: property.property.propertyStudioBaths,
        propertyOneBedroomUnitsRented: property.property.propertyOneBedroomUnitsRented,
        propertyOneBedroomUnits:  property.property.propertyOneBedroomUnits,
        propertyOneBedroomRent: property.property.propertyOneBedroomRent,
        propertyOneBedroomSqft: property.property.propertyOneBedroomSqft,
        propertyOneBedroomBeds: property.property.propertyOneBedroomBeds,
        propertyOneBedroomBaths: property.property.propertyOneBedroomBaths,
        propertyCatsAllowed: property.property.propertyCatsAllowed,
        propertyDogsAllowed: property.property.propertyDogsAllowed,
        propertyDescription: property.property.propertyDescription,
        propertyImage: property.property.propertyImage,
    }

    const [propData, setPropData]= useState(propertyData)
    
    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setPropData(prevState=>({
            ...prevState,
            [name]: value,
        }))
    }

    const deleteProperty=(id)=>{
        axios
            .delete(`${url}/delete/${id}`)
    }
    
    const editProperty=(id)=>{
        const editedPropertyData = {...propData}
        axios
            .post(`${url}s/edit/${id}`, editedPropertyData)
    }

    return(
        <div className="flex-row edit-row">
            <div className="flex-col space-evenly">
                <input name="propertyName" className ="align-center" defaultValue={propData.propertyName} placeholder="Name" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyAddress" className ="align-center" defaultValue={propData.propertyAddress} placeholder="Address" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyCity" className ="align-center" defaultValue={propData.propertyCity} placeholder="City" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyState" className ="align-center" defaultValue={propData.propertyState} placeholder="State" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyZip" className ="align-center" defaultValue={propData.propertyZip} placeholder="Zip" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyStudioUnitsRented" className ="align-center" defaultValue={propData.propertyStudioUnitsRented} placeholder="Studios Rented" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyStudioUnits" className ="align-center" defaultValue={propData.propertyStudioUnits} placeholder="Studio Units" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyStudioRent" className ="align-center" defaultValue={propData.propertyStudioRent} placeholder="Studio Rent" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyStudioSqft" className ="align-center" defaultValue={propData.propertyStudioSqft} placeholder="Studio Sqft" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyStudioBeds" className ="align-center" defaultValue={propData.propertyStudioBeds} placeholder="Studio Beds" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyStudioBaths" className ="align-center" defaultValue={propData.propertyStudioBaths} placeholder="Studio Baths" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyOneBedroomUnitsRented" className ="align-center" defaultValue={propData.propertyOneBedroomUnitsRented} placeholder="One Bedrooms Rented" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyOneBedroomUnits" className ="align-center" defaultValue={propData.propertyOneBedroomUnits} placeholder="One Bedroom Units" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyOneBedroomRent" className ="align-center" defaultValue={propData.propertyOneBedroomRent} placeholder="One Bedroom Rent" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyOneBedroomSqft" className ="align-center" defaultValue={propData.propertyOneBedroomSqft} placeholder="One Bedroom Sqft" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyOneBedroomBeds"className ="align-center"  defaultValue={propData.propertyOneBedroomBeds} placeholder="One Bedroom Beds" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyOneBedroomBaths" className ="align-center" defaultValue={propData.propertyOneBedroomBaths} placeholder="One Bedroom Baths" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyCatsAllowed" className ="align-center" defaultValue={propData.propertyCatsAllowed} placeholder="Cats Allowed" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyDogsAllowed" className ="align-center" defaultValue={propData.propertyDogsAllowed} placeholder="Dogs Allowed" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyDescription" className ="align-center" defaultValue={propData.propertyDescription} placeholder="Description" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <input name="propertyImage" className ="align-center" defaultValue={propData.propertyImage} placeholder="image" onChange={handleChange}/>
            </div>
            <div className="flex-col space-evenly">
                <button onClick={()=>editProperty(property.property._id)}>Edit</button>
            </div>
            <div className="flex-col space-evenly">
                <button onClick={()=>deleteProperty(property.property._id)}>Delete</button>
            </div>
        </div>
    )
}

const EditProperties = ()=>{
    let properties = []
    const res = useFetch(url)
    if (!res.error) { properties = res.response } else {console.log(res.error)}
  
    return(
        <div className="admin edit">
        <h2 className="align-center">Edit Properties</h2>
           {
               (properties.length > 0 || properties.length != null)  && res.loading === false ?
               properties.map((property, index)=>(
                <Property
                property={property}
                key={index}
                />
           ))
           : <p>Loading...</p>
        } 
        </div>
    )
}

export default EditProperties;