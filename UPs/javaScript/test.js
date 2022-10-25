let x =" hello";
var myName ="My name is mohammad";
console.log("hi");

onload = function () {
  document.querySelector("p").style.fontSize = "4rem";
  console.log(document.querySelectorAll("p"));
  document.querySelectorAll("p")[0].style.backgroundColor = "red";
  document.querySelector("a").style.textDecoration = "none";
  document.getElementById("a").style.backgroundColor = "pink";
  document.getElementsByClassName("p")[1].style.backgroundColor = "green";
  document.querySelector("h1").style.fontSize="1rem";
};
window.alert(x);
window.alert(myName);
document.write(x);
