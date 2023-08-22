import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import "dotenv/config"
import { DeleteQuiz, GetAllQuizes, GetQuizById, SaveQuiz } from "./quiz/quizDataservice.js";


export const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
function log(req) {
    console.log(req.originalUrl);
}

app.use(function (req, res, next) {
    log(req);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
    next();
});

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_DB);

app.get("/GetQuizById/:id", GetQuizById);

app.get("/GetAllQuizes", GetAllQuizes);

app.post("/SaveQuiz", SaveQuiz);

app.get("/DeleteQuiz/:id", DeleteQuiz);

































app.listen(process.env.PORT, () => {
    console.log('App listening on port: ' + process.env.PORT);
});