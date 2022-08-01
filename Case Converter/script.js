let buttonUpper = document.getElementById("upper-case");
let buttonLower = document.getElementById("lower-case");
let buttonProper = document.getElementById("proper-case");
let buttonSentence = document.getElementById("sentence-case");
let buttonSave = document.getElementById("save-text-file");
let textArea = document.querySelector("textarea");

buttonUpper.addEventListener("click", () => {
  textArea.value = textArea.value.toUpperCase();
});

buttonLower.addEventListener("click", () => {
  textArea.value = textArea.value.toLowerCase();
});

buttonProper.addEventListener("click", () => {
  let str = textArea.value.toLowerCase().split(' ');
  str.forEach(firstToUpper);
  textArea.value = str.join(' ');
});

buttonSentence.addEventListener("click", () => {
  let str = textArea.value.toLowerCase().split('. ');
  str.forEach(firstToUpper);
  textArea.value = str.join('. ');
});

buttonSave.addEventListener("click", () => {
  let link = document.createElement("a");
  let text = textArea.value;
  link.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  link.setAttribute("download", "text.txt");

  link.click();
});

function firstToUpper(value, index, array) {
  array[index] = value[0].toUpperCase() + value.slice(1);
}