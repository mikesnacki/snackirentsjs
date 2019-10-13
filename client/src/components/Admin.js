﻿import React, {useState} from 'react'

const AdminForm =()=> {  
    
    const [newPropData, setNewPropData]= useState({
            propertyId: "",
            propertyName: "",
            propertyAddress: "",
            propertyCity: "",
            propertyState: "",
            propertyZip: "",
            propertyStudioUnitsRented: "",
            propertyStudioUnits: "",
            propertyOneBedroomUnitsRented: "",
            propertyOneBedroomUnits:  "",
            propertyCatsAllowed: "",
            propertyDogsAllowed: "",
            propertyDescription: "",
            propertyImage: "",
        })
    
    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setNewPropData(prevState=>({
            ...prevState,
            [name]: value,
        }))

        console.log(newPropData)
    }

    return (
        <div className="admin">
            <h3 className="align-center">To add a property, enter information below</h3>
            <form >
                <div className="flex-row container-padding no-padding-bottom">
                     <div>
                        <input type="hidden" name="propID" className="admin-inputs" value={newPropData.propertyId} onChange={handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Property Name</label>
                        <input type="text" name="propName" className="admin-inputs" placeholder="Property Name" defaultValue={newPropData.propertyName} onChange={handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Address</label>
                        <input type="text" name="propAddress"  className="admin-inputs" placeholder="Address" defaultValue={newPropData.propertyAddress} onChange={handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>City</label>
                        <input type="text" name="propCity" className="admin-inputs" className="admin-inputs"placeholder="City" defaultValue={newPropData.propertyCity} onChange={handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>State</label>
                        <input type="text" name="propState" className="admin-inputs" placeholder="State" defaultValue={newPropData.propertyState} onChange={handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Zip</label>
                        <input type="text" name="propZip" className="admin-inputs" placeholder="Zip Code" defaultValue={newPropData.propertyZip} onChange={handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Studios Rented</label>
                        <input type="text" name="propStudioUnitsRented"  className="admin-inputs" placeholder="Studios rented" defaultValue={newPropData.propertyStudioUnitsRented} onChange={handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Studios</label>
                        <input type="text" name="propStudioUnits"  className="admin-inputs" placeholder="Studios" defaultValue={newPropData.propertyStudioUnits} onChange={handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>One Bedrooms Rented</label>
                        <input type="text" name="propOneBedRoomUnitsRented" className="admin-inputs" placeholder="One bedrooms rented" defaultValue={newPropData.propertyOneBedroomUnitsRented} onChange={handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>One Bedrooms</label>
                        <input type="text" name="propOneBedRoomUnits" className="admin-inputs" placeholder="One bedrooms" defaultValue={newPropData.propertyOneBedroomUnits} onChange={handleChange}></input>
                    </div>
                    <div className="flex-col fill-width">
                        <label>Cats Allowed</label>
                        <select name="propCatsAllowed"  className="admin-inputs" defaultValue={newPropData.propertyCatsAllowed} onChange={handleChange}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div className="flex-col fill-width">
                        <label>Dogs Allowed</label>
                        <select name="propDogsAllowed" className="admin-inputs" defaultValue={newPropData.propertyDogsAllowed} onChange={handleChange}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div className="flex-col fill-width">
                        <label className="display-block">Image</label>
                        <input name="propertyImage" className="admin-inputs" placeholder="image URL" defaultValue={newPropData.propertyImage} onChange={handleChange}></input>
                    </div>
                </div>
                <div className="flex-col">
                    <label className="display-block">Property Description</label>
                    <textarea name="propertyDescription" placeholder="Property Description" defaultValue={newPropData.propertyDescription} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn-submit">Add Property</button>
            </form>
        </div>
    )
    }

    export default AdminForm;