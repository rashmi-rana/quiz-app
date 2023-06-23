const questions = [
    {
        'ques': 'which of the following is a markup language ?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PhP',
        'correct': 'a'
    },
    {
        'ques': ' which of the following keywords is used to define a variable in Javascript?',
        'a': 'var',
        'b': 'let',
        'c': 'Both A and B',
        'd': 'None',
        'correct': 'c'
    },
    {
        'ques': 'which of the following methods is used to access HTML elements using Javascript?',
        'a': 'getElementbyId()',
        'b': 'getElementByClassName()',
        'c': 'Both A and B',
        'd': 'None',
        'correct': 'c'
    },
    {
        'ques': 'How can a datatype be declared to be a constant type?',
        'a': 'const',
        'b': 'var',
        'c': 'let',
        'd': 'constant',
        'correct': 'a'
    }, {
        'ques': 'Which of the following is correct about JavaScript?',
        'a': 'JavaScript is an Object-Based language',
        'b': 'JavaScript is Assembly-language',
        'c': ' JavaScript is an Object-Oriented language',
        'd': 'JavaScript is a High-level language',
        'correct': 'a'
    },
    {
        'ques': 'Arrays in JavaScript are defined by which of the following statements?',
        'a': 'It is an ordered list of values',
        'b': 'It is an ordered list of objects',
        'c': 'It is an ordered list of string',
        'd': ' It is an ordered list of functions',
        'correct': 'a'
    },
    {
        'ques': 'Which of the following is not javascript data types?',
        'a': 'Null type',
        'b': 'Undefined type',
        'c': ' Number type',
        'd': ' All of the mentioned',
        'correct': 'd'
    }
]

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset()
    const data = questions[index]
    quesBox.innerText = `${index + 1}) ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;

            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style = "text-align:center">
    <h3> thank you for playing quiz </h3>
    <h2> ${right} / ${total} are correct.  </h2>
    </div>  `
}

//initial call
loadQuestion();