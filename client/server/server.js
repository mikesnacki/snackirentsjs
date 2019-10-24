require("dotenv").config()
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport")
const path=require("path")
const LocalStrategy = require("passport-local").Strategy;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());


const PORT = process.env.PORT || 4000;
let Admin = require("./admins.model");
let Property = require("./properties.model");

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const connection = mongoose.connection;

if (process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../build")));
    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "../build/index.html"));
    })
}

passport.serializeUser(function(user, done) {
    done(null, user); 
});

passport.deserializeUser(function(user, done) {
    done(null, user); 
});

connection.once("open", ()=>{
    console.log("MongoDB database connection established successfully")
})

app.listen(PORT, ()=> {
    console.log("Server is running on Port: " + PORT);
});


app.route("/").get((req, res)=>{
    Property.find((err, properties)=>{
        (err) ? console.log(err) : res.json(properties)
    })
})

app.route("/:id").get((req, res)=>{
    let id = req.params.id;
    Property.findById(id, function(err, property){
        (err) ? console.log(err) : res.json(property)
    })
})

app.route("/add").post((req, res)=>{
    let property = new Property(req.body);

    property.save()
        .then(property=>{
            res.status(200).json({"property": `${property} added successfully`})
        })
        .catch(err=>{
            res.status(400).send(`Error adding property, error ${err}`)
        })
})

app.route("/edit/:id").post((req, res)=>{
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

app.route("/delete/:id").delete((req, res)=>{
    let id = req.params.id;
    Property.findByIdAndDelete(id, function(err, property){
        (err) ? console.log(err) : res.json(property)
    })
})

const smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth:{
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
})

smtpTransport.verify((error, success)=>{
    (error) ? console.log(`error establishing smtp ${error}`) : console.log(`${success} reached smtp`)
})

app.route("/sendemail").post((req, res, next)=>{
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

passport.use(new LocalStrategy(
    function(username, password, done) {
      Admin.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
          }
        return done(null, user);
      });
    }
  )
);

app.post(
    '/login',
    function (req, res, next) {
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        let userInfo = {
            username: req.user.username,
            password: req.user.password
        };
        res.send(userInfo);
    }
)

app.route("/admins").get((req, res)=>{
    Admin.find((err, admins)=>{
        (err) ? console.log(err) : res.json(admins)
    })
})

app.route("/admins/add").post((req, res)=>{
    let admin = new Admin(req.body);

    admin.save()
        .then(admin=>{
            res.status(200).json({"admin": `${admin} added successfully`})
        })
        .catch(err=>{
            res.status(400).send(`Error adding admin, error ${err}`)
        })
})