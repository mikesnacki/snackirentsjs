const config = require("config");
const gmailuser = config.get("username")
const gmailpass = config.get("gmailpassword")
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


let Admin = require("../models/admins.model");
let Property = require("../models/properties.model");

passport.serializeUser(function(user, done) {
    done(null, user); 
});

passport.deserializeUser(function(user, done) {
    done(null, user); 
});

router.route("/api/properties").get((req, res)=>{
    Property.find((err, properties)=>{
        return (err) ? console.log(err) : res.json(properties)
    })
})

router.route("/api/properties/:id").get((req, res)=>{
    let id = req.params.id;
    Property.findById(id, function(err, property){
        (err) ? console.log(err) : res.json(property)
    })
})

router.route("/api/properties/add").post((req, res)=>{
    let property = new Property(req.body);
    
    property.save()
        .then(property=>{
            res.status(200).json({"property": `${property} added successfully`})
        })
        .catch(err=>{
            res.status(400).send(`Error adding property, error ${err}`)
        })
})

router.route("/api/properties/edit/:id").post((req, res)=>{
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
            property.propertyCatsAllowed = req.body.propertyCatsAllowed 
            property.propertyDogsAllowed = req.body.propertyDogsAllowed
            property.propertyDescription = req.body.propertyDescription;
            property.propertyImage = req.body.propertyImage;
            property.propertyDeleted = false;

            property.save()
            .then(property=>{
                res.json(`Property ${property} updated`)
            })
            .catch(err=>{
                console.log(err)
                res.status(400).send(`Error ${err}`)
            })
        }
    })
})

router.route("/api/properties/delete/:id").delete((req, res)=>{
    // Property.findByIdAndDelete(id, function(err, property){
    //     (err) ? console.log(err) : res.json(property)
    // })

    Property.findById(req.params.id, (err, property)=>{
        if (!property){
            res.status(404).send(`Data is not found! error: ${err}`)
        } else {
            property.propertyDeleted = true;

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

let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: gmailuser,
        pass: gmailpass
    },
    tls: {
        rejectUnauthorized: false
    }
});

transport.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

router.post('/api/properties/sendemail', async (req,res)=>{
    let name = req.body.name
    let message = req.body.message

    var mail = {
        from: name,
        to: "snackirents@gmail.com",
        subject: `Rental Inquiry From ${name}`,
        text: message,
    };

    
    console.log("sending email")
    await transport.sendMail(mail, (err, data)=>{
        if(err){
            console.log(err)
            res.json({msg: `fail ${err}`})
        } else {
            console.log(`Message sent`);
            res.json({msg: 'success'})
        }
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

router.post(
    '/api/login',
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

router.route("/api/admins").get((req, res)=>{
    Admin.find((err, admins)=>{
        return (err) ? console.log(err) : res.json(admins)
    })
})

router.route("/api/admins/add").post((req, res)=>{
    let admin = new Admin(req.body);

    admin.save()
        .then(admin=>{
            res.status(200).json({"admin": `${admin} added successfully`})
        })
        .catch(err=>{
            res.status(400).send(`Error adding admin, error ${err}`)
        })
})

module.exports = router;