const Workout = require("../model/workoutModel")

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        const id = req.params.id

        res.json();
    });

    app.put("/api/workouts/:id", (req, res) => {
        const id = req.params.id
        res.json();
    });

    app.post("/api/workouts/", (req, res) => {
        console.log(req.body)
        Workout.create(req.body)
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.send(err)
        })
    });

    app.get("/api/workouts/range", (req, res) => {

    })
}

