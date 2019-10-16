import React, {useState} from 'react';
import axios from 'axios'
import {useFetch} from "../utilhooks/useFetch"

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
            .delete(`http://localhost:4000/properties/delete/${id}`)
    }
    
    const editProperty=(id)=>{
        const editedPropertyData = {...propData}
        axios
            .post(`http://localhost:4000/properties/edit/${id}`, editedPropertyData)
    }

    return(
        <div className="flex-row admin-row">
            <div className="flex-col space-evenly"><input name="propertyName" defaultValue={propData.propertyName} placeholder="Name" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyAddress" defaultValue={propData.propertyAddress} placeholder="Address" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyCity" defaultValue={propData.propertyCity} placeholder="City" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyState" defaultValue={propData.propertyState} placeholder="State" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyZip" defaultValue={propData.propertyZip} placeholder="Zip" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyStudioUnitsRented" defaultValue={propData.propertyStudioUnitsRented} placeholder="Studios Rented" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyStudioUnits" defaultValue={propData.propertyStudioUnits} placeholder="Studio Units" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyStudioRent" defaultValue={propData.propertyStudioRent} placeholder="Studio Rent" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyStudioSqft" defaultValue={propData.propertyStudioSqft} placeholder="Studio Sqft" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyStudioBeds" defaultValue={propData.propertyStudioBeds} placeholder="Studio Beds" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyStudioBaths" defaultValue={propData.propertyStudioBaths} placeholder="Studio Baths" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyOneBedroomUnitsRented" defaultValue={propData.propertyOneBedroomUnitsRented} placeholder="One Bedrooms Rented" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyOneBedroomUnits" defaultValue={propData.propertyOneBedroomUnits} placeholder="One Bedroom Units" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyOneBedroomRent" defaultValue={propData.propertyOneBedroomRent} placeholder="One Bedroom Rent" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyOneBedroomSqft" defaultValue={propData.propertyOneBedroomSqft} placeholder="One Bedroom Sqft" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyOneBedroomBeds" defaultValue={propData.propertyOneBedroomBeds} placeholder="One Bedroom Beds" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyOneBedroomBaths" defaultValue={propData.propertyOneBedroomBaths} placeholder="One Bedroom Baths" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyCatsAllowed" defaultValue={propData.propertyCatsAllowed} placeholder="Cats Allowed" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyDogsAllowed" defaultValue={propData.propertyDogsAllowed} placeholder="Dogs Allowed" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyDescription" defaultValue={propData.propertyDescription} placeholder="Description" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyImage" defaultValue={propData.propertyImage} placeholder="image" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><button onClick={()=>editProperty(property.property._id)}>Edit</button></div>
            <div className="flex-col space-evenly"><button onClick={()=>deleteProperty(property.property._id)}>Delete</button></div>
        </div>
    )
}

const EditProperties = ()=>{
    let properties = []
    const url = 'http://localhost:4000/properties/'
    const res = useFetch(url)
    if (!res.error) { properties = res.response } else {console.log(res.error)}
  
    return(
        <div className="admin">
        <h2 className="align-center">Properties</h2>
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