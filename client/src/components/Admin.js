import React, {useState} from 'react';
import EditProperties from './EditProperties'
import axios from 'axios';
const url = process.env.REACT_APP_API_URL

const AdminForm =()=> {  
    
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
    }

    const [newPropData, setNewPropData]= useState(initialState)
    
    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setNewPropData(prevState=>({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit=(e)=>{
        const newProperty = {...newPropData}

        axios
            .post(`${url}/add`, newProperty)
            .then(res=> console.log(res.data))

        setNewPropData({...initialState})
    }

    return (
        <div>
            <div className="admin">
                <h3 className="align-center">To add a property, enter information below</h3>
                <form  onSubmit={handleSubmit}>
                    <div className="flex-row container-padding no-padding-bottom">
                        <div className="flex-col">
                            <label>Property Name</label>
                            <input type="text" name="propertyName" className="admin-inputs" placeholder="Property Name" value={newPropData.propertyName} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>Address</label>
                            <input type="text" name="propertyAddress"  className="admin-inputs" placeholder="Address" value={newPropData.propertyAddress} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>City</label>
                            <input type="text" name="propertyCity" className="admin-inputs" placeholder="City" value={newPropData.propertyCity} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>State</label>
                            <input type="text" name="propertyState" className="admin-inputs" placeholder="State" value={newPropData.propertyState} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>Zip</label>
                            <input type="text" name="propertyZip" className="admin-inputs" placeholder="Zip Code" value={newPropData.propertyZip} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>Studios Rented</label>
                            <input type="text" name="propertyStudioUnitsRented"  className="admin-inputs" placeholder="Studios rented" value={newPropData.propertyStudioUnitsRented} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>Studios</label>
                            <input type="text" name="propertyStudioUnits"  className="admin-inputs" placeholder="Studios" value={newPropData.propertyStudioUnits} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>Studios</label>
                            <input type="text" name="propertyStudioRent"  className="admin-inputs" placeholder="Studio Rent" value={newPropData.propertyStudioRent} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>Studios</label>
                            <input type="text" name="propertyStudioSqft"  className="admin-inputs" placeholder="Studio Sqft" value={newPropData.propertyStudioSqft} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>Studios</label>
                            <input type="text" name="propertyStudioBeds"  className="admin-inputs" placeholder="Studio Beds" value={newPropData.propertyStudioBeds} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>Studios</label>
                            <input type="text" name="propertyStudioBaths"  className="admin-inputs" placeholder="Studio Baths" value={newPropData.propertyStudioBaths} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>One Bedrooms Rented</label>
                            <input type="text" name="propertyOneBedroomUnitsRented" className="admin-inputs" placeholder="One bedrooms rented" value={newPropData.propertyOneBedroomUnitsRented} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>One Bedrooms</label>
                            <input type="text" name="propertyOneBedroomUnits" className="admin-inputs" placeholder="One Bedrooms" value={newPropData.propertyOneBedroomUnits} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>One Bedroom Rent</label>
                            <input type="text" name="propertyOneBedroomRent"  className="admin-inputs" placeholder="One Bedroom Rent" value={newPropData.propertyOneBedroomRent} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>Studios</label>
                            <input type="text" name="propertyStudioSqft"  className="admin-inputs" placeholder="One Bedroom Sqft" value={newPropData.propertyOneBedroomSqft} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>Studios</label>
                            <input type="text" name="propertyOneBedroomBeds"  className="admin-inputs" placeholder="One Bedroom Beds" value={newPropData.propertyOneBedroomBeds} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col">
                            <label>Studios</label>
                            <input type="text" name="propertyOneBedroomBaths"  className="admin-inputs" placeholder="One Bedroom Baths" value={newPropData.propertyOneBedroomBaths} onChange={handleChange}></input>
                        </div>
                        <div className="flex-col fill-width">
                            <label>Cats Allowed</label>
                            <select name="propertyCatsAllowed"  className="admin-inputs" value={newPropData.propertyCatsAllowed} onChange={handleChange}>
                                <option value="No">Select</option>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <div className="flex-col fill-width">
                            <label>Dogs Allowed</label>
                            <select name="propertyDogsAllowed" className="admin-inputs" value={newPropData.propertyDogsAllowed} onChange={handleChange}>
                                <option value="No">Select</option>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                        <div className="flex-col fill-width">
                            <label className="display-block">Image</label>
                            <input name="propertyImage" className="admin-inputs" placeholder="image URL" value={newPropData.propertyImage} onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="flex-col">
                        <label className="display-block">Property Description</label>
                        <textarea className="admin-textarea" name="propertyDescription" placeholder="Property Description" value={newPropData.propertyDescription} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn-submit">Add Property</button>
                </form>
            </div>
            <EditProperties/>
        </div>
        )
    }

    export default AdminForm;