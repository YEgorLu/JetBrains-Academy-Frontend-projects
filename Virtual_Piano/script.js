const pianoButtons = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];
let kbds = document.querySelectorAll("kbd");
kbds = kbds.map(el => [el.textContent, el]);

document.onkeydown = ev => {
  if(!pianoButtons.includes(ev.code)){
    console.warn("Unknown key");
    return;
  }
  kbd

  let audio = document.createElement("audio");
  audio.setAttribute("src", `audio/${ev.key.toUpperCase()}.mp3`);
  audio.play();
}