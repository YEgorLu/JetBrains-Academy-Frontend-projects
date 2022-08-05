const wrapper = document.querySelector("#history-wrapper");
let forms = JSON.parse(localStorage.getItem("forms"));

forms.forEach(createForm);

function createForm(data, id) {
  let parentBlock = document.createElement("div");
  parentBlock.setAttribute("class", "submit-history-card");
  parentBlock.setAttribute("id", id);
  let formWrapper = document.createElement("div");
  formWrapper.setAttribute("class", "form-wrapper");
  let firstName = document.createElement("p");
  firstName.setAttribute("class", "card-first-name");
  firstName.textContent = data["first-name"];
  let lastName = document.createElement("p");
  lastName.setAttribute("class", "card-last-name");
  lastName.textContent = data["last-name"];
  let email = document.createElement("p");
  email.setAttribute("class", "card-email");
  email.textContent = data["email"];
  let phone = document.createElement("p");
  phone.setAttribute("class", "card-phone");
  phone.textContent = data["phone"];
  let company = document.createElement("p");
  company.setAttribute("class", "card-company");
  company.textContent = data["company"];
  let address = document.createElement("p");
  address.setAttribute("class", "card-address");
  address.textContent = data["address"];
  let button = document.createElement("button");
  button.setAttribute("class", "delete-button");
  button.textContent = "Delete";
  button.onclick = deleteData;
  parentBlock.appendChild(firstName);
  parentBlock.appendChild(lastName);
  parentBlock.appendChild(email);
  parentBlock.appendChild(phone);
  parentBlock.appendChild(company);
  parentBlock.appendChild(address);
  parentBlock.appendChild(button);
  formWrapper.appendChild(parentBlock);
  wrapper.appendChild(formWrapper);
}

function deleteData(ev) {
  let div = ev.target.parentElement;
  let divWrapper = div.parentElement;
  let id = div.getAttribute("id");
  divWrapper.removeChild(div);
  wrapper.removeChild(divWrapper);
  forms.splice(id,1);
  localStorage.setItem("forms", JSON.stringify(forms));
}