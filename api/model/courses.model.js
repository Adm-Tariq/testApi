import mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, sub_title: {
        type: String,
        required: true
    }, description: {
        type: String,
        required: true
    }, image: {
        type: String,
        required: true
    }, courseUrl: {
        type: String,
        required: true
    }

})


export default mongoose.model("course", coursesSchema)