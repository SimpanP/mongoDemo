import mongoose from "mongoose";
import { QuizModel } from "./quizModels.js";

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
};

export const GetAllQuizes = async (req, res) => {
  try {
    let resp = await QuizModel.find();
    res.send(resp);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: "internal server error" });
    //res.status(500).send({ err: err });
  }
};

export const GetQuizesByDifficulty = async (req, res) => {
  try {
    let difficulty = req.params.difficulty;
    let resp = await QuizModel.find({ difficulty: difficulty });
    res.send(resp);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: "internal server error" });
    //res.status(500).send({ err: err });
  }
};

//#endregion

//#region ###POST###

export const SaveQuiz = async (req, res) => {
  try {
    let quiz = req.body;
    const resp = await new QuizModel(quiz).save({ new: true });
    res.send(resp);
  } catch (err) {
    console.log(err);
    //res.status(500).send({ err: "internal server error" });
    //possible to add if statement if dev show this above otherwhise display the internal error as below
    res.status(500).send({ err: err });
  }
};

export const InsertManyQuizes = async (req, res) => {
  try {
    let quizArray = req.body;
    const resp = await QuizModel.insertMany(quizArray);
    res.send(resp);
  } catch (err) {
    console.log(err);
    //res.status(500).send({ err: "internal server error" });
    res.status(500).send({ err: err });
  }
};

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
};

//#endregion
