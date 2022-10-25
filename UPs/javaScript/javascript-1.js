function calc() {
  let firstNumber = document.getElementById("first-number");
  let secondNumber = document.getElementById("second-number");
  let result = document.getElementById("result");
  let opeSum = document.getElementById("sum");
  let opemin = document.getElementById("min");
  let mult = document.getElementById("mult");
  let div = document.getElementById("div");

if(opeSum.checked){
    result.innerHTML = parseInt(firstNumber.value) + parseInt(secondNumber.value);

}
if(opemin.checked){
    result.innerHTML = parseInt(firstNumber.value) - parseInt(secondNumber.value);

}
if(mult.checked){
  result.innerHTML = parseInt(firstNumber.value) * parseInt(secondNumber.value);

}
if(div.checked){
  result.innerHTML = parseInt(firstNumber.value) / parseInt(secondNumber.value);

}
}
