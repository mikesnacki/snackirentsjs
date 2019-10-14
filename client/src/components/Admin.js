import React, {useState} from 'react';
import axios from 'axios';

const AdminForm =()=> {  
    
    const initialState = {
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
        e.preventDefault();
        console.log("submit")
        const newProperty = {...newPropData}
        console.log(`Form submitted`)

        axios
            .post('http://localhost:4000/properties/add', newProperty)
            .then(res=> console.log(res.data))

        setNewPropData({...initialState})
    }

    return (
        <div className="admin">
            <h3 className="align-center">To add a property, enter information below</h3>
            <form  onSubmit={handleSubmit}>
                <div className="flex-row container-padding no-padding-bottom">
                     <div>
                        <input type="hidden" name="propertyID" className="admin-inputs" value={newPropData.propertyId} onChange={handleChange}></input>
                    </div>
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
                        <input type="text" name="propertyCity" className="admin-inputs" className="admin-inputs"placeholder="City" value={newPropData.propertyCity} onChange={handleChange}></input>
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
                        <label>One Bedrooms Rented</label>
                        <input type="text" name="propertyOneBedroomUnitsRented" className="admin-inputs" placeholder="One bedrooms rented" value={newPropData.propertyOneBedroomUnitsRented} onChange={handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>One Bedrooms</label>
                        <input type="text" name="propertyOneBedroomUnits" className="admin-inputs" placeholder="One bedrooms" value={newPropData.propertyOneBedroomUnits} onChange={handleChange}></input>
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
                    <textarea name="propertyDescription" placeholder="Property Description" value={newPropData.propertyDescription} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn-submit">Add Property</button>
            </form>
        </div>
    )
    }

    export default AdminForm;