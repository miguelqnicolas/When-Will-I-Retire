const questionContainer = document.querySelector('.get-started-main');

function createQuestion(argumentNumber, argumentQuestion, argumentID, argumentPlaceholder, argumentTip) {
    const container = document.createElement('div');
        const question = document.createElement('h2');
        const input = document.createElement('input');
        const tip = document.createElement('p');

    container.classList.add('question');
    container.classList.add(`question${argumentNumber}`);
    
    question.textContent = argumentQuestion;
    input.type = 'text';
    input.id = argumentID;
    input.placeholder = argumentPlaceholder;
    tip.textContent = argumentTip;

    container.append(question, input, tip);

    return container;
};

const name = document.querySelector('#name');
const age = document.querySelector('#age');
const income = document.querySelector('#income');
const savings = document.querySelector('#savings');
const lifestyle = document.querySelector('#lifestyle');

const question1 = document.querySelector('.question1');
const question2 = document.querySelector('.question2');
const question3 = document.querySelector('.question3');
const question4 = document.querySelector('.question4');
const question5 = document.querySelector('.question5');

const responses = [];

name.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        responses.push(name.value);
        question1.classList.toggle('hide');
        question2.classList.toggle('hide');
    };
});

age.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        responses.push(age.value);
        question2.classList.toggle('hide');
        question3.classList.toggle('hide');
    };
});

income.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        responses.push(income.value);
        question3.classList.toggle('hide');
        question4.classList.toggle('hide');
    };
});

savings.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        responses.push(savings.value);
        question4.classList.toggle('hide');
        question5.classList.toggle('hide');
    };
});

lifestyle.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        responses.push(lifestyle.value);
        question5.classList.toggle('hide');
        console.log(responses);
    };
});

// let question1Answer;

// name.addEventListener('keydown', (event) => {
//     if (event.keyCode === 13) {
//         question1Answer = name.value;
//         question1.classList.add('hide');
//         questionContainer.append(createQuestion(2, 'How old are you?', 'age', 'Ex. 21'));
//     };

//     const age = document.querySelector('#age');
//     const question2 = document.querySelector('.question2');

//     age.addEventListener('keydown', (event) => {
//         if (event.keyCode === 13) {
//             const question2Answer = age.value;
//             question2.classList.add('hide');
//             questionContainer.append(createQuestion(3, 'What is your income/ expected income?', 'income', 'Ex. 70,000'));
//         };

//         const income = document.querySelector('#income');
//         const question3 = document.querySelector('.question3');

//         income.addEventListener('keydown', (event) => {
//             if (event.keyCode === 13) {
//                 const question3Answer = income.value;
//                 question3.classList.add('hide');
//                 questionContainer.append(createQuestion(4, 'How much do you save per month?', 'savings', 'Ex. 5,000'));
//             };

//             const savings = document.querySelector('#savings');
//             const question4 = document.querySelector('.question4');

//             savings.addEventListener('keydown', (event) => {
//                 if (event.keyCode === 13) {
//                     const question4Answer = savings.value;
//                     question4.classList.add('hide');
//                     questionContainer.append(createQuestion(5, 'What is your income/ expected income?', 'lifestyle', 'Ex. 50,000'));
//                     console.log(question1Answer, question2Answer, question3Answer, question4Answer);
//                 };
//             });
//         });
//     });
// });