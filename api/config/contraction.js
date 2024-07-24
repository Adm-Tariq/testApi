
import mongoose from "mongoose";

const contraction = async () => {
    try {
        await mongoose.connect('mongodb+srv://admtariq11:sQEoswrVGT2bhZ1l@learn-mango-db.mvgfzpu.mongodb.net/EDU_COURSES');
    } catch (error) {
        console.log('error db');
    }
}

export default contraction