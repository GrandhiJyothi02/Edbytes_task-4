
const questions = [
    {
        text: 'Which tag is a heading?',
        choices: ['h1', 'p', 'div'],
        answer: 0
    },
    {
        text: 'Which language styles a page?',
        choices: ['CSS', 'SQL', 'C++'],
        answer: 0
    },
    {
        text: 'How many days in a week?',
        choices: ['5', '7', '9'],
        answer: 1
    }
];

let index = 0, score = 0, answered = false;

function render() {
    document.getElementById('question').textContent =
        questions[index].text;

    document.getElementById('feedback').textContent = '';

    answered = false;

    const answers = document.getElementById('answers');
    const next = document.getElementById('next');

    answers.innerHTML = '';
    next.disabled = true;

    // Create answer buttons
    questions[index].choices.forEach((choice, i) => {
        const button = document.createElement('button');

        button.textContent = choice;

        button.onclick = () => {
            if (answered) return;

            answered = true;

            if (i === questions[index].answer) {
                score++;
                document.getElementById('feedback').textContent =
                    'Correct!';
            } else {
                document.getElementById('feedback').textContent =
                    'Incorrect!';
            }

            // Disable all answer buttons
            answers.querySelectorAll('button').forEach(btn => {
                btn.disabled = true;
            });

            next.disabled = false;
        };

        answers.appendChild(button);
    });
}

// Next button functionality
document.getElementById('next').onclick = () => {

    if (!answered) return;

    index++;

    if (index < questions.length) {
        render();
    } else {
        document.getElementById('question').textContent =
            'Quiz Completed!';

        document.getElementById('answers').innerHTML = '';

        document.getElementById('feedback').textContent =
            'You have completed all questions!';

        document.getElementById('score').textContent =
            `Your final score: ${score} out of 3`;

        document.getElementById('next').style.display = 'none';
    }
};

render();
