const adPopup = document.querySelector(".ad-popup");
const x = document.querySelector(".ad-popup-content h1");

window.addEventListener("load", () => {
  adPopup.classList.add("showAdPopup");
  adPopup.childNodes[1].classList.add("showAdPopup");
});

x.addEventListener("click", () => {
  adPopup.classList.remove("showAdPopup");
  adPopup.childNodes[1].classList.remove("showAdPopup");
});
