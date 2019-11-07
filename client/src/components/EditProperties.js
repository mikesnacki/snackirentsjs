import React, {useState} from 'react';
import axios from 'axios';
import {Tooltip} from "./Tooltip"

export const Property=({property})=> {
    
    const propertyData = {
        propertyName: property.propertyName,
        propertyAddress: property.propertyAddress,
        propertyCity: property.propertyCity,
        propertyState: property.propertyState,
        propertyZip: property.propertyZip,
        propertyStudioUnitsRented: property.propertyStudioUnitsRented,
        propertyStudioUnits: property.propertyStudioUnits,
        propertyStudioRent: property.propertyStudioRent,
        propertyStudioSqft: property.propertyStudioSqft,
        propertyStudioBeds: property.propertyStudioBeds,
        propertyStudioBaths: property.propertyStudioBaths,
        propertyOneBedroomUnitsRented: property.propertyOneBedroomUnitsRented,
        propertyOneBedroomUnits:  property.propertyOneBedroomUnits,
        propertyOneBedroomRent: property.propertyOneBedroomRent,
        propertyOneBedroomSqft: property.propertyOneBedroomSqft,
        propertyOneBedroomBeds: property.propertyOneBedroomBeds,
        propertyOneBedroomBaths: property.propertyOneBedroomBaths,
        propertyCatsAllowed: property.propertyCatsAllowed,
        propertyDogsAllowed: property.propertyDogsAllowed,
        propertyDescription: property.propertyDescription,
        propertyImage: property.propertyImage,
    }

    const [propData, setPropData]= useState(propertyData)
    
    const handleChange =(e)=>{
        const name = e.target.name;
        const defaultValue = e.target.value;
        setPropData(prevState=>({
            ...prevState,
            [name]: defaultValue,
        }))
    }

    const deleteProperty= async (id)=>{
        await axios.delete(`/api/properties/delete/${id}`)
   }
   
   const editProperty= async (id)=>{
       const editedPropertyData = {...propData}
       console.log(editedPropertyData)
       await axios.post(`/api/properties/edit/${id}`, editedPropertyData)
   }

    return(
        <div className="flex-row space-evenly edit-row">
            <Tooltip text="Property Name">
            <div className="flex-col">
                <input name="propertyName" 
                className ="align-center" 
                defaultValue={property.propertyName} 
                placeholder="Name" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="Address">
            <div className="flex-col">
                <input name="propertyAddress" 
                className ="align-center" 
                defaultValue={property.propertyAddress} 
                placeholder="Address" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="City">
            <div className="flex-col">
                <input name="propertyCity" 
                className ="align-center" 
                defaultValue={property.propertyCity} 
                placeholder="City" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="State">
            <div className="flex-col">
                <input name="propertyState" 
                className ="align-center" 
                defaultValue={property.propertyState} 
                placeholder="State" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="Zip Code">
            <div className="flex-col">
                <input name="propertyZip" 
                className ="align-center" 
                defaultValue={property.propertyZip} 
                placeholder="Zip" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="Studios Rented">
            <div className="flex-col">
                <input name="propertyStudioUnitsRented" 
                className ="align-center" 
                defaultValue={property.propertyStudioUnitsRented} 
                placeholder="Studios Rented" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="Studio Units">
            <div className="flex-col">
                <input name="propertyStudioUnits" 
                className ="align-center" 
                defaultValue={property.propertyStudioUnits} 
                placeholder="Studio Units" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="Studio Rent">
            <div className="flex-col">
                <input name="propertyStudioRent" 
                className ="align-center" 
                defaultValue={property.propertyStudioRent} 
                placeholder="Studio Rent" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="Studio Sqft">
            <div className="flex-col">
                <input name="propertyStudioSqft" 
                className ="align-center" 
                defaultValue={property.propertyStudioSqft} 
                placeholder="Studio Sqft" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="Studio Beds">
            <div className="flex-col">
                <input name="propertyStudioBeds" 
                className ="align-center" 
                defaultValue={property.propertyStudioBeds} 
                placeholder="Studio Beds" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="Studio Baths">
            <div className="flex-col">
                <input name="propertyStudioBaths" 
                className ="align-center" 
                defaultValue={property.propertyStudioBaths} 
                placeholder="Studio Baths" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="One Bedrooms Rented">
            <div className="flex-col">
                <input name="propertyOneBedroomUnitsRented" 
                className ="align-center"
                defaultValue={property.propertyOneBedroomUnitsRented} 
                placeholder="One Bedrooms Rented" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="One Bedroom Units">
            <div className="flex-col">
                <input name="propertyOneBedroomUnits" 
                className ="align-center" 
                defaultValue={property.propertyOneBedroomUnits} 
                placeholder="One Bedroom Units" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="One Bedroom Rent">
            <div className="flex-col">
                <input name="propertyOneBedroomRent" 
                className ="align-center" 
                defaultValue={property.propertyOneBedroomRent} 
                placeholder="One Bedroom Rent" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="One Bedroom Sqft">
            <div className="flex-col">
                <input name="propertyOneBedroomSqft" 
                className ="align-center" 
                defaultValue={property.propertyOneBedroomSqft} 
                placeholder="One Bedroom Sqft" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="One Bedroom Beds">
            <div className="flex-col">
                <input name="propertyOneBedroomBeds"
                className ="align-center"  
                defaultValue={property.propertyOneBedroomBeds} 
                placeholder="One Bedroom Beds" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="One Bedroom Baths">
            <div className="flex-col">
                <input name="propertyOneBedroomBaths" 
                className ="align-center" 
                defaultValue={property.propertyOneBedroomBaths} 
                placeholder="One Bedroom Baths" 
                onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="Cats Allowed">
            <select name="propertyCatsAllowed" 
                className ="flex-col"
                placeholder="Catss Allowed"
                defaultValue={property.propertyCatsAllowed} 
                onChange={handleChange}>
                    <option value="Select">Select</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </Tooltip>
            <Tooltip text="Dogs Allowed">
                <select name="propertyDogsAllowed" 
                className ="flex-col"
                placeholder="Dogs Allowed"
                defaultValue={property.propertyDogsAllowed} 
                onChange={handleChange}>
                    <option value="Select">Select</option>
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                </select>
            </Tooltip>
            <Tooltip text="Description">
            <div className="flex-col">
                <input name="propertyDescription" className ="align-center" defaultValue={property.propertyDescription} placeholder="Description" onChange={handleChange}/>
            </div>
            </Tooltip>
            <Tooltip text="Image URL">
            <div className="flex-col">
                <input name="propertyImage" className ="align-center" defaultValue={property.propertyImage} placeholder="image" onChange={handleChange}/>
            </div>
            </Tooltip>
            <div className="flex-col">
                <button className="btn-primary" onClick={()=>editProperty(property._id)}>Edit</button>
            </div>
            <div className="flex-col">
                <button className="btn-primary" onClick={()=>deleteProperty(property._id)}>Delete</button>
            </div>
        </div>
        
    )
}

const EditProperties = ({properties})=>{

    return(
        <div className="admin">
        <h3 className="align-center">Edit Properties</h3>
           {
               (properties.length > 0 || properties.length != null)  ?
               properties.filter(property=> property.propertyDeleted===true || property.propertyDeleted===false).map((property, index)=>(
                <Property
                    key={index} 
                    property={property}
                />
           ))
           : <p>Loading...</p>
        } 
        </div>
    )
}

export default EditProperties;