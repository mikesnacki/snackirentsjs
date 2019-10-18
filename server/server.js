require('dotenv').config()
const express = require('express');
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
const propertyRoutes = express.Router();
const PORT = 4000;

let Property = require("./properties.model");

app.use(cors());
app.use(bodyParser.json());
app.use("/properties", propertyRoutes);

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const connection = mongoose.connection;

connection.once("open", function(){
    console.log("MongoDB database connection established successfully")
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

propertyRoutes.route("/").get((req, res)=>{
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

propertyRoutes.route("/add").post((req, res)=>{
    let property = new Property(req.body);

    property.save()
        .then(property=>{
            res.status(200).json({"property": `${property} added successfully`})
        })
        .catch(err=>{
            res.status(400).send(`Error adding property, error ${err}`)
        })
})

propertyRoutes.route("/edit/:id").post((req, res)=>{
    Property.findById(req.params.id, (err, property)=>{
        if (!property){
            res.status(404).send(`Data is not found! error: ${err}`)
        } else {
            property.propertyName = req.body.propertyName;
            property.propertyAddress = req.body.propertyAddress;
            property.propertyCity = req.body.propertyCity;
            property.propertyState = req.body.propertyState;
            property.propertyZip = req.body.propertyZip;
            property.propertyStudioUnitsRented = req.body.propertyStudioUnitsRented;
            property.propertyStudioUnits = req.body.propertyStudioUnits;
            property.propertyStudioRent= req.body.propertyStudioRent;
            property.propertyStudioSqft= req.body.propertyStudioSqft;
            property.propertyStudioBeds= req.body.propertyStudioBeds;
            property.propertyStudioBaths= req.body.propertyStudioBaths;
            property.propertyOneBedroomUnitsRented = req.body.propertyOneBedroomUnitsRented;
            property.propertyOneBedroomUnits = req.body.propertyOneBedroomUnits;
            property.propertyOneBedroomRent= req.body.propertyOneBedroomRent;
            property.propertyOneBedroomSqft= req.body.propertyOneBedroomSqft;
            property.propertyOneBedroomBeds= req.body.propertyOneBedroomBeds;
            property.propertyOneBedroomBaths= req.body.propertyOneBedroomBaths;
            property.propertyCatsAllowed = req.body.propertyCatsAllowed;
            property.propertyDogsAllowed = req.body.propertyDogsAllowed;
            property.propertyDescription = req.body.propertyDescription;
            property.propertyImage = req.body.propertyImage;

            property.save()
            .then(property=>{
                res.json(`Property ${property} updated`)
            })
            .catch(err=>{
                res.status(400).send(`Error ${err}`)
            })
        }
    })
})

propertyRoutes.route("/delete/:id").delete((req, res)=>{
    let id = req.params.id;
    Property.findByIdAndDelete(id, function(err, property){
        (err) ? console.log(err) : res.json(property)
    })
})

const smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth:{
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
})

smtpTransport.verify((error, success)=>{
    (error) ? console.log(`error establishing smtp ${error}`) : console.log(`${success} reached smtp`)
})

propertyRoutes.route("/sendemail").post((req, res, next)=>{
    let name = req.body.name
    let message = req.body.message

    let mail = {
        from: name,
        to: "snackirents@gmail.com",
        subject: `Rental Inquiry From ${name}`,
        text: message,
    }

    smtpTransport.sendMail(mail, (err, data)=>{
        err ? res.json({msg: "fail"}) : res.json({msg: `${data} sent`})
    })
})