const correctAnswers = ['90','right angled triangle','right angled triangle',' Equilateral triangle'];
let formQuiz = document.querySelector('.quiz-form');
let submitBtn = document.querySelector('.submit-Quiz');
let finalScore = document.querySelector('.final-score');
function playQuizFunction(event){
    event.preventDefault();
    let score = 0;
    let index = 0;
    let question = new FormData(formQuiz);
    for(let entry of question.values()){
        if(entry === correctAnswers[index]){
            score = score + 1;
        } index = index + 1;
    } 
    finalScore.innerHTML = 'Your Score is'+score+'/5';
}
submitBtn.addEventListener('click',playQuizFunction)
