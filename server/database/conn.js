import mongoose from "mongoose";
const ATLAS_URL="mongodb+srv://SOSTECH:sostechincc22@sosquiz.euz9i07.mongodb.net/?retryWrites=true&w=majorityy"

export default async function connect(){
    await mongoose.connect(ATLAS_URL)
    console.log("Database Connected")
}