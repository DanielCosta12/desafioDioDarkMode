const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const darkModeClass = "dark-mode";
function changeMode() {
  changeClasses();
  changeText();
}
function changeText() {
  const lightMode = "Light Mode";
  const darkMode = "Dark Mode";
  if (body.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode;
    h1.innerHTML = darkMode + " ON";
    return;
  }

  button.innerHTML = darkMode;
  h1.innerHTML = lightMode + " ON";
}

function changeClasses() {
  button.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
}

button.addEventListener("click", changeMode);
