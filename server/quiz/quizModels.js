import mongoose from "mongoose";

const quiz = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    category: {
        type: String,
        enum: ["sport", "cars", "science", "chemistry", "languages", "politics"],
        required: true
    }
});
export const QuizModel = mongoose.model("Quiz", quiz);