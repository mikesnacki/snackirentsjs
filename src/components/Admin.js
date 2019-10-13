import React, { Component } from 'react'

export class AdminForm extends Component {  
    
    constructor(props){
        super(props)
        this.state={
            newPropData:{
                propertyId: 0,
                propertyName: "",
                propertyAddress: "",
                propertyCity: "",
                propertyState: "",
                propertyZip: 0,
                propertyStudioUnitsRented: 0,
                propertyStudioUnits: 0,
                propertyOneBedroomUnitsRented: 0,
                propertyOneBedroomUnits:  0,
                propertyCatsAllowed: "",
                propertyDogsAllowed: "",
                propertyDescription: "",
                propertyImage: "",
            }
        }
    }
    
    render(){
    return (
        <div className="admin">
            <h3 className="align-center">To add a property, enter information below</h3>
            <form >
                <div className="flex-row container-padding no-padding-bottom">
                     <div>
                        <input type="hidden" name="propID" value={this.state.newPropData.propertyId} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Property Name</label>
                        <input type="text" name="propName" placeholder="Property Name" defaultValue={this.state.newPropData.propertyName} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Address</label>
                        <input type="text" name="propAddress" placeholder="Address" defaultValue={this.state.newPropData.propertyAddress} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>City</label>
                        <input type="text" name="propCity" placeholder="City" defaultValue={this.state.newPropData.propertyCity} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>State</label>
                        <input type="text" name="propState" placeholder="State" defaultValue={this.state.newPropData.propertyState} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Zip</label>
                        <input type="text" name="propZip" placeholder="Zip Code" defaultValue={this.state.newPropData.propertyZip} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Studio Units Rented</label>
                        <input type="text" name="propStudioUnitsRented" placeholder="Studios rented" defaultValue={this.state.newPropData.propertyStudioUnitsRented} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>Studio Units</label>
                        <input type="text" name="propStudioUnits" placeholder="Studios" defaultValue={this.state.newPropData.propertyStudioUnits} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>One Bedroom Units Rented</label>
                        <input type="text" name="propOneBedRoomUnitsRented" placeholder="One bedrooms rented" defaultValue={this.state.newPropData.propertyOneBedroomUnitsRented} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col">
                        <label>One Bedroom Units</label>
                        <input type="text" name="propOneBedRoomUnits" placeholder="One bedrooms" defaultValue={this.state.newPropData.propertyOneBedroomUnits} onChange={this.handleChange}></input>
                    </div>
                    <div className="flex-col fill-width">
                        <label>Cats Allowed</label>
                        <select name="propCatsAllowed" defaultValue={this.state.newPropData.propertyCatsAllowed}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div className="flex-col fill-width">
                        <label>Dogs Allowed</label>
                        <select name="propDogsAllowed" defaultValue={this.state.newPropData.propertyDogsAllowed}>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div className="flex-col fill-width">
                        <label className="display-block">Image</label>
                        <input name="propertyImage" placeholder="image URL" defaultValue={this.state.newPropData.propertyImage}></input>
                    </div>
                </div>
                <div className="flex-col">
                    <label className="display-block">Property Description</label>
                    <textarea name="propertyDescription" placeholder="Property Description" defaultValue={this.state.newPropData.propertyDescription}></textarea>
                </div>
                <button type="submit" className="btn-submit">Add Property</button>
            </form>
        </div>
    )}
}