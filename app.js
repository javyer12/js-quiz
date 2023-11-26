import { newQuestion } from "./data/question.js";
import {Quiz} from './models/Quiz.js';
import { UI } from "./models/UI.JS";

/**
 * 
 * @param {Quiz} quiz the main quiz
 * @param {UI} ui ui
 */
// expresion de funciones
const renderPage = (quiz, ui) =>{
    const indexProgress = document.getElementById("progress");
    let index = quiz.showIndex();
    indexProgress.textContent = index;

    if(quiz.isEnded()){
        // interfaz del resultado
        // confirm(quiz.score)
        ui.showScores(quiz.score)
    }else{
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showShoices(quiz.getQuestionIndex().choices,(currentChoice)=> {
                quiz.guess(currentChoice);
                renderPage(quiz,ui);
            }
            );
        }
    }
// declaracion de funciones
function main(){
    const quiz = new Quiz(newQuestion);
    const ui = new UI()
    
    renderPage(quiz,ui)
}
main();


