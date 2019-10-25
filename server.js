require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport")
const path=require("path")
const routes = require("./routes/routes.js")

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(routes)

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const connection = mongoose.connection;

if (process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));
    app.get("/*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

connection.once("open", ()=>{
    console.log("MongoDB database connection established successfully")
})

app.listen(PORT, ()=> {
    console.log("Server is running on Port: " + PORT);
});
