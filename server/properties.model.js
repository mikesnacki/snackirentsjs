const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// let ObjectId = mongoose.Schema.Types.ObjectId;

let Property = new Schema({
    // propertyId: ObjectId,
    propertyName: String,
    propertyAddress: String,
    propertyCity: String,
    propertyState: String,
    propertyZip: Number,
    propertyStudioUnitsRented: Number,
    propertyStudioUnits: Number,
    propertyOneBedroomUnitsRented: Number,
    propertyOneBedroomUnits:  Number,
    propertyCatsAllowed: String,
    propertyDogsAllowed: String,
    propertyDescription: String,
    propertyImage: String,
    creationDate: [Date]
});

module.exports = mongoose.model("Property", Property);