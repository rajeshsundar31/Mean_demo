const express = require("express");
const bodyParser  = require("body-parser");
const mongoose = require("mongoose");

const user= require("../model/post");
const auth = require("../backend/auth");

const app = express();
mongoose.connect('mongodb://localhost:27017/myscm');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Orgin, X-Requested-with, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH"
    );
    next();
});

app.post("/api/posts", (req, res, next) => {
    console.log("added datas")
    const userList = new user({
      description: req.body.description,
      customer: req.body.customer,
      organization: req.body.organization,
      insert_date: req.body.insert_date,
      insert_user: req.body.insert_user,
      updated_date: req.body.updated_date,
      updated_user: req.body.updated_user,
    });
    userList.save();
    res.status(201).json({
        message: "Data Added successfully!"
    });
    next();
})


app.use('/api/base', (req, res, next) => {
    console.log('FETCHEING SUCCESSFULLY!')
    user.find().then((documents) => {
        res.status(200).json({
           message: 'data render Successfully',
          results: documents,
        });
      })
})

app.delete("/api/delete/:id", (req, res, next) => {
    user.deleteOne({_id: req.params.id}).then(result => {
        console.log("deleted datas",result);
        res.status(200).json({message: "post deleted!"})
    })
})

app.patch("/api/update/:id", (req, res, next) => {
    console.log("REQ successfully", req);
    var updateObject = req.body;
    let id = req.params.id;
    console.log("id-12", id)
    user.findById( {_id: id}, updateObject).then(result => {
        console.log("updated successfully1", result);
        res.status(200).json({
            message: "updated successfully",
            result: result,
    })
    })
})

app.use("/api", auth)

module.exports = app;