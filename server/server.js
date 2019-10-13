const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const propertyRoutes = express.Router();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use("/properties", propertyRoutes);

mongoose.connect("mongodb://127.0.0.1/properties", {useNewUrlParser: true})
const connection = mongoose.connection;

connection.once("open", function(){
    console.log("MongoDB database connection established successfully")
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

propertyRoutes.route("/Properties").get((req, res)=>{
    Property.find(function(err, properties){
        (err) ? console.log(err) : res.json(properties)
    })
})

propertyRoutes.route("/:id").get((req, res)=>{
    let id = req.params.id;
    Property.findById(id, function(err, property){
        (err) ? console.log(err) : res.json(property)
    })
})

propertyRoutes.route("/Admin").post((req, res)=>{
    let property = new Property(req.body);

    property.save()
        .then(property=>{
            res.status(200).json({"property": `${property} added successfully`})
        })
        .catch(err=>{
            res.status(400).send(`Error adding property, error ${err}`)
        })
})

propertyRoutes.route("/update/:id").post((req, res)=>{
    Property.findById(req.params.id, (err, property)=>{
        if (!property){
            res.status(404).send(`Data is not found! error: ${err}`)
        } else {
            property.propertyId = req.body.propertyId;
            property.propertyName = req.body.propertyName;
            property.propertyAddress = req.body.propertyAddress;
            property.propertyCity = req.body.propertyCity;
            property.propertyState = req.body.propertyState;
            property.propertyZip = req.body.propertyZip;
            property.propertyStudioUnitsRented = req.body.propertyStudioUnitsRented;
            property.propertyStudioUnits = req.body.propertyStudioUnits;
            property.propertyOneBedroomUnitsRented = req.body.propertyOneBedroomUnitsRented;
            property.propertyOneBedroomUnits = req.body.propertyOneBedroomUnits;
            property.propertyCatsAllowed = req.body.propertyCatsAllowed;
            property.propertyDogsAllowed = req.body.propertyDogsAllowed;
            property.propertyDescription = req.body.propertyDescription;
            property.propertyImage = req.body.propertyImage;
        }
    })
})