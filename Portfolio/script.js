const buttons = document.getElementsByClassName("open-window");
const hamburger = document.getElementsByClassName("hamburger")[0];
const menus = document.getElementsByClassName("menu");
const projects = {
  list: {
    title: "To-Do List",
    link: "../To-Do_List/index.html",
    description: "В данном проекте я реализовал список. Туда можно добавлять новые задачи, отмечать и удалять выполненные. Для реализации мне пришлось изучить некоторые анимации, добавление элементов в dom через js, и хранение состояния списка в localStorage."
  },
  piano: {
    title: "Virtual Piano",
    link: "../Virtual_Piano/index.html",
    description: "В данном проекте я реализовал небольшое виртуальное пианино. Клавишам присвоена буква, при нажатии на которую издается звук нужной ноты. Во время работы над проектом я изучил основы js и html."
  },
  cards: {
    title: "Flashcards",
    link: "../Flashcards/index.html",
    description: "В данном проекте я реализовал небольшую карточную игру, где игрок должен угадать столицу каждой из 9 стран. Ответ записан на обратной стороне карточек. Чтобы проверить ответ игрок должен навести мышь на карточку, тогда она переворачивается. Реализуя проект я научился некоторым css анимациям."
  }
}

hamburger.onclick = () => {
  hamburger.classList.toggle("active");
  for(let menu of menus)
    menu.classList.toggle("active");
}

for (let button of buttons) {
  button.onclick = ev => {
    if(button.parentNode.parentNode.childElementCount <= 3)
      showPopup(ev);
  }
}

function showPopup(ev) {
  let projectName = ev.target.name;
  let project = projects[projectName];
  let window = document.createElement("div");
  window.className = "window";
  window.innerHTML = '<div class="popup">\n' +
    `\t<h2 class="popup-name">${project.title}</h2>\n` +
    `\t<p>Вы можете посмотреть проект по ссылке: <a href=${project.link}>${project.title.toLowerCase()}</a></p>\n` +
    `\t<p>${project.description}</p>\n` +
    '\t<button onclick="closePopup(this)">Close</button>\n' +
    '</div>'
  ev.target.parentNode.parentNode.appendChild(window);
}

function closePopup(ev) {
  const popup = ev.parentNode.parentNode;
  popup.parentNode.removeChild(popup);
}