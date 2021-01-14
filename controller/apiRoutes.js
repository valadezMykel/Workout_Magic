const Workout = require("../model/workoutModel")

module.exports = (app) => {
    app.get("/api/workouts", (req, res) => {
        res.json();
    });

    app.put("/api/workouts/", (req, res) => {
        res.json();
    });

    app.post("/api/workouts/", (req, res) => {

    });

    app.get("/api/workouts/range", (req, res) => {

    })
}

