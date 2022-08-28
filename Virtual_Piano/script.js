const pianoButtons = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];

document.onkeydown = ev => {
  if(!pianoButtons.includes(ev.code)){
    console.warn("Unknown key");
    return;
  }

  let audio = document.createElement("audio");
  audio.setAttribute("src", `audio/${ev.key.toUpperCase()}.mp3`);
  audio.play();
}
