import mongoose from "mongoose";
const ATLAS_URL="mongodb+srv://admin:admin123@quiz.txg27yr.mongodb.net/?retryWrites=true&w=majority"

export default async function connect(){
    await mongoose.connect(ATLAS_URL)
    console.log("Database Connected")
}