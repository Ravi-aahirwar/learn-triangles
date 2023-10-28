let angleInputs = document.querySelectorAll('.angles');
let angleBtn = document.querySelector('.angle-button');
let angleRes = document.querySelector('.result');
function calculate(ange1, ange2, ange3) {
    let sumOf = ange1 + ange2 + ange3;
    return sumOf;
}
function calculateAngles() {
    let sumOf = calculate(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));
    if(angleInputs[0].value,angleInputs[1].value,angleInputs[2].value === ''){
        alert('Enter Correct Inputs');
    }
    else if(sumOf === 180){
        angleRes.innerHTML = 'Yay, the angles form a Triangle'
    }
    else{
        angleRes.innerHTML = "Oh Oh! The angles don't form a Triangle"
    }
}
angleBtn.addEventListener('click', calculateAngles)