const CORRECT_PASSWORD = "TrustNo1";
const checkButtons = document.getElementsByClassName("check-buttons")[0].children;
const levers = document.getElementsByClassName("levers")[0].children;

document.getElementById("password__button").onclick = ev => {
  let passwordInput = ev.path[1].children[0];
  let button = ev.target;
  if (passwordInput.value !== CORRECT_PASSWORD) return;

  for (let input of checkButtons) {
    input.removeAttribute("disabled");
  }
  for (let input of levers) {
    input.removeAttribute("disabled");
  }

  passwordInput.setAttribute("disabled", "true");
  button.setAttribute("disabled", "true");
}

document.getElementById("launch-button").onclick = e => {
  let rocket = document.getElementsByClassName("rocket")[0];
  rocket.animate([
    {
      bottom: "0px"
      , left: "0px"
    },
    {
      bottom: "580px"
      , left: "250px"
    }], 1000);
   rocket.style.bottom = "580px";
   rocket.style.left = "250px";
};

for (let input of checkButtons) {
  input.onchange = () => {
    if (allInputsMax()) {
      enableLaunch();
    }
  }
}
for (let input of levers) {
  input.onchange = () => {
    if (allInputsMax()) {
      enableLaunch();
    }
  }
}

function enableLaunch() {
  let launchButton = document.getElementById("launch-button");
  launchButton.removeAttribute("disabled");
}

function allInputsMax() {
  let onMax = true;
  for (let input of checkButtons) {
    if (input.getAttribute("checked") == false) {
      onMax = false;
      break;
    }
  }
  for (let input of levers) {
    if (input.value != 100) {
      onMax = false;
      break;
    }
  }
  return onMax;
}