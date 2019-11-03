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

function output(array) {
    const savingsRate = array[2] / array[3];
    let yearsUntilRetirement;
    
    if (savingsRate < 0 || typeof(savingsRate) !== 'number') {
        // look over this
        yearsUntilRetirement = 'error';
    } else if (savingsRate === 0) {
        yearsUntilRetirement = 'never';
    } else if (savingsRate > 0 && savingsRate <= 5) {
        yearsUntilRetirement = 66;
    } else if (savingsRate > 5 && savingsRate <= 10) {
        yearsUntilRetirement = 51;
    } else if (savingsRate > 10 && savingsRate <= 15) {
        yearsUntilRetirement = 43;
    } else if (savingsRate > 15 && savingsRate <= 20) {
        yearsUntilRetirement = 37;
    } else if (savingsRate > 20 && savingsRate <= 25) {
        yearsUntilRetirement = 32;
    } else if (savingsRate > 25 && savingsRate <= 30) {
        yearsUntilRetirement = 28;
    } else if (savingsRate > 30 && savingsRate <= 35) {
        yearsUntilRetirement = 25;
    } else if (savingsRate > 35 && savingsRate <= 40) {
        yearsUntilRetirement = 22;
    } else if (savingsRate > 40 && savingsRate <= 45) {
        yearsUntilRetirement = 19;
    } else if (savingsRate > 45 && savingsRate <= 50) {
        yearsUntilRetirement = 17;
    } else if (savingsRate > 50 && savingsRate <= 55) {
        yearsUntilRetirement = 14.5;
    } else if (savingsRate > 55 && savingsRate <= 60) {
        yearsUntilRetirement = 12.5;
    } else if (savingsRate > 60 && savingsRate <= 65) {
        yearsUntilRetirement = 10.5;
    } else if (savingsRate > 65 && savingsRate <= 70) {
        yearsUntilRetirement = 8.5;
    } else if (savingsRate > 70 && savingsRate <= 75) {
        yearsUntilRetirement = 7;
    } else if (savingsRate > 75 && savingsRate <= 80) {
        yearsUntilRetirement = 5.5;
    } else if (savingsRate > 80 && savingsRate <= 85) {
        yearsUntilRetirement = 4;
    } else if (savingsRate > 85 && savingsRate <= 90) {
        yearsUntilRetirement = 'under 3';
    } else if (savingsRate > 95 && savingsRate <= 99) {
        yearsUntilRetirement = 'under 2';
    } else {
        yearsUntilRetirement = 0;
    }

    const retirementAge = array[1] + yearsUntilRetirement;

    return `${array[0]}, at this rate you'll retire in ${yearsUntilRetirement} years at the age of ${retirementAge}.`;
};

function attachOutputToContainer(argument) {
    const div = document.createElement('div');
        const h2 = document.createElement('h2');

    div.classList.add('question');

    h2.textContent = argument;

    div.appendChild(h2);

    return div;
};

const questionContainer = document.querySelector('.get-started-main');

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
        responses.push(Number(age.value));
        // could put Number() here or when in return statement, which would be better?
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
        questionContainer.appendChild(attachOutputToContainer(output(responses)));
    };
});