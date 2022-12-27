import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const resultModel = new Schema({
  quesid:{type:String},
  avvgtime:{type:Number},
  name:{type:String},
  email:{type:String},
  score:{type:Number},
})

export default mongoose.model('result', resultModel);