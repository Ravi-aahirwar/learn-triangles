let inputs = document.querySelectorAll(".hypotenuse-input");
let hypoBtn = document.querySelector(".hypotenuse-btn");
let hypoRes = document.querySelector('.result');
function calculate(base, height) {
    let inputCalc = base * base + height * height;
    return inputCalc;
}
function calculateHypotenuse() {
    let inputCalc = calculate(Number(inputs[0].value),Number(inputs[1].value));
    hypoRes.innerHTML = `Hypotenuse of a triangle with base ${inputs[0].value} units & height ${inputs[1].value} units is ${Math.sqrt(inputCalc)} units`
}
hypoBtn.addEventListener("click", calculateHypotenuse);
