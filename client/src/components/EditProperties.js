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
        propertyOneBedroomUnitsRented: property.property.propertyOneBedroomUnitsRented,
        propertyOneBedroomUnits:  property.property.propertyOneBedroomUnits,
        propertyCatsAllowed: property.property.propertyCatsAllowed,
        propertyDogsAllowed: property.property.propertyDogsAllowed,
        propertyDescription: property.property.propertyDescription,
        propertyImage: property.property.ropertyImage,
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
            <div className="flex-col space-evenly"><input name="propertyStudioUnitsRented" defaultValue={propData.propertyStudioUnitsRented} placeholder="Studios rented" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyStudioUnits" defaultValue={propData.propertyStudioUnits} placeholder="Studio units" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyOneBedroomUnitsRented" defaultValue={propData.propertyOneBedroomUnitsRented} placeholder="One bedrooms rented" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyOneBedroomUnits" defaultValue={propData.propertyOneBedroomUnits} placeholder="One bedroom units" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyCatsAllowed" defaultValue={propData.propertyCatsAllowed} placeholder="Cats allowed" onChange={handleChange}/></div>
            <div className="flex-col space-evenly"><input name="propertyDogsAllowed" defaultValue={propData.propertyDogsAllowed} placeholder="Dogs allowed" onChange={handleChange}/></div>
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