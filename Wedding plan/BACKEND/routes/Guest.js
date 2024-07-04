const router = require("express").Router();
let Guest = require("../models/Guest");

router.route("/add").post((req,res) =>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newGuest = new Guest({
        name,
        age,
        gender
    })

    newGuest.save().then(()=>{
        res.json("Guest added")
    }).catch(()=>{
        console.log(err);
    })

})

router.route("/").get((req,res) => {
    Guest.find().then(guests => {
        res.json(guests)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) =>{
    let guestId = req.params.id;
    const {name, age, gender} = req.body;
    const updateGuest = {
        name,
        age,    
        gender  
    }
    const update = await Guest.findByIdAndUpdate(guestId, updateGuest).then(()=>{
        res.status(200).send({status: "Guest updated", Guest: update })   ; 
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async (req,res) => {
    let guestId = req.params.id;
    await Guest.findByIdAndDelete(guestId)
    .then(() => {
        res.status(200).send({status: "Guest deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleteing data", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let guestId = req.params.id;
    const guest = await Guest.findById(guestId).then(() =>{
        res.status(200).send({status: "Guest fetched", Guest: guest})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with geting data", error: err.message});
    })
})

module.exports = router;