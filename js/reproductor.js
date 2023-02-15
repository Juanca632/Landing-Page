const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
const icon = document.querySelector(".play-btn")


playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    audio.play();
    icon.classList.remove("red") 
    icon.classList.add("green") 
  } else {
    audio.pause();
    icon.classList.remove("green") 
    icon.classList.add("red") 

  }
});