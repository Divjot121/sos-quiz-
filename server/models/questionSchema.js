import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
  id: {type:String},
  time: {type:String},
  date: {type:String},
  title: {type:String},
  desc: {type:String},
  QuizQues: {type:Array,default:[]},
});

export default mongoose.model("Question", questionModel);
