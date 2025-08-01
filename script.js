document.addEventListener("DOMContentLoaded", function () {
  const playLink = document.getElementById("playLink");
  const audio = document.getElementById("myAudio");

  playLink.addEventListener("click", function () {
    audio.play();
  });
});