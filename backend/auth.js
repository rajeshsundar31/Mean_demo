const express = require("express");

const login= require("../model/login");
const { routes } = require("./app");

const router = express.Router();

// router.post("/login", (req, res, next) => {
//     console.log("added datas")
//     bcrypt.hash(req.body.password, 10)
//     .then(hash => {
//         const authUser = new login({
//             user_name: req.body.user_name,
//             password: hash
//         });
//         authUser.save()
//         .then(result => {
//             res.status(201).json({
//                 message: "Data Added successfully!",
//                 results: result
//             });
//         })
        
//     })
// });

router.post("/login", (req, res, next) => {
    console.log("added datas")
    const authUser = new login({
        user_name: req.body.user_name,
        password: req.body.password,
    });
    authUser.save();
    res.status(201).json({
        message: "Data Added successfully!"
    });
    next();
});

router.post("/login", (req, res, next) => {
    authUser.findOne({user_name: req.body.user_name}).then(authUser => {
        if(!authUser){
            return res.status(401).json({
                message: "Authentication is Failed!",
            })
        }
        return bcrypt.compare(req.body.password, authUser.password);
    })
    .then(result => {
        if(!result){
            return res.status(401).json({
                message:"Auth Failed"
            });
        }
    })
    .catch( err =>{
        return res.status(401).json({
            message: "Auth Failed!"
        })
    })
})

router.get('/login/user', (req, res, next) => {
    login.find().then((document)=> {
        res.status(200).json({
            message: "user get successfully",
            result: document
        })
    })
})

module.exports = router;