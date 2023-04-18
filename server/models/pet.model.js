const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Pet Name is required"],
        minLength: [3, "Pet Name must be 3 or more characters"]
    },
    petType: {
        type: String,
        required: [true, "Pet Type is required"],
        minLength: [3, "Pet Type must be 3 or more characters"]
    },
    petDescription: {
        type: String,
        required: [true, "Pet Description is required"],
        minLength: [3, "Pet Description must be 3 or more characters"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
}, {timestamps: true})


const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;