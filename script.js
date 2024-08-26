function submitQuiz() {

    const correctAnswers = {
        q1: 'C',
        q2: 'B',
        q3: 'A',
        q4: 'C',
        q5: 'A',
        q6: 'C',
        q7: 'B',
        q8: 'C',
        q9: 'C',
        q10: 'B'
    };

    let score = 0;


    const form = document.getElementById('quiz-form');
    const userAnswers = {
        q1: form.q1.value,
        q2: form.q2.value,
        q3: form.q3.value,
        q4: form.q4.value,
        q5: form.q5.value,
        q6: form.q6.value,
        q7: form.q7.value,
        q8: form.q8.value,
        q9: form.q9.value,
        q10: form.q10.value
    };


    for (let question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }


    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You scored ${score} out of 10.`;

    // Highlight correct answers
    for (let question in correctAnswers) {
        const questionElement = document.querySelector(`input[name="${question}"][value="${correctAnswers[question]}"]`);
        questionElement.parentNode.style.color = 'green';
    }
}
