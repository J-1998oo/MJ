let signUpButton = document.getElementById("signUp");
let signInButton = document.getElementById("signIn");
let container = document.getElementById("container");

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
