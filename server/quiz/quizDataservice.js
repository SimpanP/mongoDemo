import mongoose from "mongoose"
import { QuizModel } from "./quizModels.js"


//#region ###GET###

export const GetQuizById = async (req, res) => {
    try {
        let id = req.params.id;
        let resp = await QuizModel.findOne({ _id: id });
        res.send(resp);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: "internal server error" });
        //res.status(500).send({ err: err });
    }
}

export const GetAllQuizes = async (req, res) => {
    try {
        let resp = await QuizModel.find();
        res.send(resp);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: "internal server error" });
        //res.status(500).send({ err: err });
    }
}

//#endregion

//#region ###POST###

export const SaveQuiz = async (req, res) => {
    try {
        let quiz = req.body;
        const resp = await new QuizModel(quiz).save({new: true});
        res.send(resp);
    } catch (err) {
        console.log(err);
        //res.status(500).send({ err: "internal server error" });
        res.status(500).send({ err: err });
    }
}

//#endregion

//#region ###DELETE###

export const DeleteQuiz = async (req, res) => {
    try {
        let id = req.params.id;
        let resp = await QuizModel.deleteOne({ _id: id });
        res.send(resp);
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: "internal server error" });
        //res.status(500).send({ err: err });
    }
}

//#endregion