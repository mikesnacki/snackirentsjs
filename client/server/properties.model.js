const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Property = new Schema({
    propertyName: String,
    propertyAddress: String,
    propertyCity: String,
    propertyState: String,
    propertyZip: Number,
    propertyStudioUnitsRented: Number,
    propertyStudioUnits: Number,
    propertyStudioRent: Number,
    propertyStudioSqft: Number,
    propertyStudioBeds: Number,
    propertyStudioBaths: Number,
    propertyOneBedroomUnitsRented: Number,
    propertyOneBedroomUnits:  Number,
    propertyOneBedroomRent: Number,
    propertyOneBedroomSqft: Number,
    propertyOneBedroomBeds: Number,
    propertyOneBedroomBaths: Number,
    propertyCatsAllowed: String,
    propertyDogsAllowed: String,
    propertyDescription: String,
    propertyImage: String,
});

module.exports = mongoose.model("Property", Property);