import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const newQuestion = data.map(question=> new Question(question.question, question.choices, question.answer))