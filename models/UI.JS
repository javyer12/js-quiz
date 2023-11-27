export class UI {
    constructor(){
  
    }
    /**
     * 
     * @param {string} text this text will be print on the screen 
     */
    showQuestion(text){
        const questionTitle = document.getElementById("question");
        questionTitle.innerHTML = text;
    }
    /**
     * 
     * @param {string[]} choices choices of asnwer for every question
     */
    showShoices(choices, callback){
        const choicesText = document.getElementById('choices');
        choicesText.innerHTML = "";
        choices.map(answerChoice => {
            const button = document.createElement('button');
            button.className = 'button'
            button.textContent = answerChoice;
            button.addEventListener('click', ()=> callback(answerChoice))
            choicesText.appendChild(button);
        })
    }
    /**
     * @param {number} score total score
     */
    showScores(score){
        const playAgain = document.createElement("button");
        playAgain.className = "button";
        playAgain.textContent = "Play Again";
        playAgain.addEventListener("click", ()=> location.reload());

        // logic no ended
        const addQuestionButton = document.createElement("button");
        addQuestionButton.className = "button";
        addQuestionButton.textContent = "Add a question";
        // funcion para mostrar la interfaz de agregar preguntas
        addQuestionButton.addEventListener('click',()=>this.newQuestionUI())
        const quizEndHTML = `
            <h1>Result: </h1>
            <h2>Your Score: ${score} </h2>

        `        
        const element = document.getElementById("quiz")

        element.innerHTML = quizEndHTML;
        element.append(playAgain,addQuestionButton)
    }
    newQuestionUI(){
        // const choicesInput = document.createElement('input');
        // const answerInput = document.createElement('input');
        // const title = document.createElement('h2');
        
        const addQuestionButton = document.createElement("button");
        addQuestionButton.className = "button";
        addQuestionButton.textContent = "Add";
        addQuestionButton.addEventListener('click', ()=>this.errorMessageUI())

    
        const newQuestionUI = `
            <h2 >Add a Question</h2>
            </hr>
            <h6>Question: </h6>
            <input type="text" id="newQuestion" name="question" value="Question"/>

            <h6>Choices | Separate by ','|:</h6>
            <input value="Choices"/>

            <h6>Correct Answer:</h6>
            <input value="Answer"/>
            <hr/>
            `
            // <button class='button'>Add </button>
        const ele = document.getElementById('quiz');
        ele.innerHTML = newQuestionUI;
        ele.append(questionInput, addQuestionButton)

    }
    errorMessageUI(){
        const errroUI =    `
        </hr>
            <h2>We are sorry</h2>

            <p>The Site that you're requiring is not working,</br> we're working on it to fix it as soon as possible</p>
       </hr>
            `
        const button = document.createElement('button');
        button.className = 'button';
        button.innerHTML = 'Play Again';
        button.addEventListener('click', ()=>{location.reload()})

        const ele = document.getElementById('quiz');
        ele.innerHTML = errroUI;
        ele.append(button)
    }
}                                   