const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises:[
        {
            type: {
                type: String,
                trim: true,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            duration: Number,
            distance: Number,
            sets: Number,
            reps: Number,
            weight: Number,
        }
    ]

})

const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;