import mongoose from "mongoose";


const User = new mongoose.Schema({
    name: {type: String, require: true},
    surname: {type: String, require: true},
    date: {type: String, require: true},
    img: {type: String},
    timestamps: {type: Date, default: Date.now()},
})

export default mongoose.model('User', User)