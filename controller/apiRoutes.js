const Workout = require("../models/workoutModel")

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then(data => {
            res.json(data);
        }).catch( err => {
            console.log(err)
            res.json(err)
        })

        
    });

    app.put("/api/workouts/:id", (req, res) => {
        const id = req.params.id
        console.log(id)

        Workout.findByIdAndUpdate(id, { $push: { exercises: req.body}})
        .then( data => {
            res.json(data)
        }).catch( err => {
            console.log(err)
            res.json(err)
        })

        res.json();
    });

    app.post("/api/workouts/", (req, res) => {
        console.log(req.body)
        Workout.create(req.body)
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        })
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({
            day: { $gte: new Date().setDate(new Date().getDate()-7)}
        }).then( data => {
            res.json(data)
        }).catch( err => {
            console.log(err)
            res.json(err)
        })
    })
}

