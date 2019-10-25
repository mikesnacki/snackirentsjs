require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path=require("path")
const routes = require("./routes/routes.js")

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes)

if (process.env.NODE_ENV==="production"){
    app.use(express.static("/client/build/"));
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
    })
}

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
const connection = mongoose.connection;

const PORT = process.env.PORT || 4000;

connection.once("open", ()=>{
    console.log("MongoDB database connection established successfully")
})

app.listen(PORT, ()=> {
    console.log("Server is running on Port: " + PORT);
});
