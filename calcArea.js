let showResult = document.querySelector(".show-result");
let areaOne = document.getElementById("area-one");
let triangleAreaBtn = document.querySelector(".calculateAreaOfTriangle");
let outPutOfArea = document.querySelector(".triangle-area-result");
let inputTriangleArea = document.querySelectorAll(".input-triangle-Area");
let TriangleArea = document.getElementById("triangle");
let equilateralTriangle = document.getElementById("equilateral");
let tringleSides = document.getElementById("triangleDifferentSides");
let twoSidesOfTriangle = document.getElementById(
  "area-of-triangle-with-Two-sides"
);
function handleClickOne() {
  TriangleArea.style.display = "block";
  TriangleArea.style.display = "flex";
  equilateralTriangle.style.display = "none";
  tringleSides.style.display = "none";
  twoSidesOfTriangle.style.display = "none";
}
function handleClickTwo() {
  equilateralTriangle.style.display = "block";
  equilateralTriangle.style.display = "flex";
  TriangleArea.style.display = "none";
  tringleSides.style.display = "none";
  twoSidesOfTriangle.style.display = "none";
}
function handleClickThree() {
  tringleSides.style.display = "block";
  tringleSides.style.display = "flex";
  TriangleArea.style.display = "none";
  equilateralTriangle.style.display = "none";
  twoSidesOfTriangle.style.display = "none";
}
function handleClickFour() {
  twoSidesOfTriangle.style.display = "block";
  twoSidesOfTriangle.style.display = "flex";
  tringleSides.style.display = "none";
  TriangleArea.style.display = "none";
  equilateralTriangle.style.display = "none";
}
function calculateArea(triangle1, triangle2) {
  let sumOfArea = (triangle1 * triangle2) / 2;
  return sumOfArea;
}
function calculateTriangleArea() {
  if (triangleAreaBtn.innerHTML === "Calculate") {
    if (inputTriangleArea[0].value === "") {
      alert("enter correct Base value");
    } else if (inputTriangleArea[1].value === "") {
      alert(" enter correct Height value ");
    } else {
      let sumOfTotalArea = calculateArea(
        Number(inputTriangleArea[0].value),
        Number(inputTriangleArea[1].value)
      );
      outPutOfArea.innerHTML = `Area of a right angled triangle is ${sumOfTotalArea} units`;
    }
  } else {
    alert("enter correct Both Base value and Height Value ..");
  }
}
triangleAreaBtn.addEventListener("click", calculateTriangleArea);
let equilInput = document.querySelector(".equilateralInput");
let equilBtn = document.querySelector(".equilateralTriangleBtn");
let displayres = document.querySelector(".resultEquil");
function calculateEquilateral() {
  let sideValue = equilInput.value;
  if (sideValue <= 0 || sideValue === "") {
    alert("please enter the Correct side Length");
  } else {
    let formula = (Math.sqrt(3) / 4) * sideValue * sideValue;
    let resEquil = formula.toFixed(2);
    console.log(resEquil);
    displayres.innerHTML = `Area of equilateral triangle is ${resEquil} units`;
  }
}
equilBtn.addEventListener("click", calculateEquilateral);
let sideOne = document.querySelector(".side-one");
let sideTwo = document.querySelector(".side-two");
let sideThree = document.querySelector(".side-three");
let areaThreeResult = document.querySelector(".ThreeResult");
function calculateAreaThree() {
  const sideOneValue = parseInt(sideOne.value);
  console.log(sideOneValue);
  const sideTwoValue = parseInt(sideTwo.value);
  console.log(sideTwoValue);
  const sideThreeValue = parseInt(sideThree.value);
  console.log(sideThreeValue);
  const s = (sideOneValue + sideTwoValue + sideThreeValue) / 2;
  console.log(s);
  let formula = Math.sqrt(
    s * (s - sideOneValue) * (s - sideTwoValue) * (s - sideThreeValue)
  );
  let finalValue = formula.toFixed(2);
  console.log(finalValue);
  areaThreeResult.innerText = `Area of triange is ${finalValue} units`;
}
function calculateAreaFour() {
      const side1 = parseFloat(document.getElementById("side1").value);
      const side2 = parseFloat(document.getElementById("side2").value);
      const angleDegrees = parseFloat(document.getElementById("angle").value);
      // Convert degrees to radians
      const angleRadians = (angleDegrees * Math.PI) / 180;

      // Calculate the area
      const area = 0.5 * side1 * side2 * Math.sin(angleRadians);

      // Display the result
      const resultElement = document.getElementById("result-four");
      resultElement.textContent = `Area of the triangle is: ${area.toFixed(2)}`;
  }