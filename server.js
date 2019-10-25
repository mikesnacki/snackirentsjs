const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path=require("path")
const routes = require("./routes/routes.js")
const config = require("config");
const db = config.get("mongoURI")
const app = express();

mongoose
    .connect(db, {
        useNewUrlParser: true
    })
    .then(()=> console.log("MongoDB Connected"))
    .catch(err=> console.log(err))

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes)

if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=> {
    console.log("Server is running on Port: " + PORT);
});
