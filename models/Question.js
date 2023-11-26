// crear multiple de datos con base  en un modelo
export class Question {
    /**
     * 
     * @param {string} text This is the text of the question. 
     * @param {string[]} choices These are the diferences choices.8
     * @param {string} answer This is the right answer.
     */
    constructor(text, choices, answer){
        // propiedades
        this.text  = text,
        this.choices = choices,
        this.answer = answer
    }
    // metodos
    /**
     * 
     * @param {string} choice parameters
     * @returns {boolean} it returns "True" if the answer is right, else, it returns false
     */
    correctAnswer(choice){
        return choice == this.answer
    }
}

// export const question = new Question("what does HTML stand for?", ["HyperText Markup Languaje", "High Testing Markup Languaje" ], "HyperText Markup Languaje");


// console.log(question.correctFunction("HyperText Markup Languaje"))