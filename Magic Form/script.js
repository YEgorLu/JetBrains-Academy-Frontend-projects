const inputBlocks = document.getElementsByTagName("input");
const submitBtn = document.getElementById("submit-button");
const inputForm = document.querySelector("form");

applyInputEvents();
loadInputs();
setInterval(loadInputs,100);

submitBtn.onclick = ev => saveForm();

function applyInputEvents() {
  for(const input of inputBlocks) {
    input.oninput = ev => {
      localStorage.setItem(input.name, input.value);
    }
  }
}

function loadInputs() {
  for(const input of inputBlocks) {
    input.value = localStorage.getItem(input.name);
  }
}

function saveForm() {
  let history = JSON.parse(localStorage.getItem('forms')) || [];
  let currentForm = {};
  for(const input of inputForm) {
    if(input.type === "submit") continue;
    currentForm[input.name] = input.value;
    clearStorage(input);
  }
  history.push(currentForm);
  localStorage.setItem("forms", JSON.stringify(history));
}

function clearStorage(input) {
    input.value = "";
    localStorage.removeItem(input.name);

}
