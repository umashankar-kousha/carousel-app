let leftNavEl = document.getElementById("leftNav");
let rightNavEl = document.getElementById("rightNav");
let containerEl = document.getElementById("container");
let totalImages = containerEl.childElementCount;
let index = 0;
let intervalId;

function onClickOnRightNav() {
  if (index >= totalImages - 1) {
    index = -1;
  }
  containerEl.style.transform = `translatex(-${(index + 1) * 300}px)`;
  index += 1;
}

function autoPlay() {
  onClickOnRightNav();
}

leftNavEl.addEventListener("click", function () {
  if (index === 0) {
    index = 4;
  }
  containerEl.style.transform = `translatex(-${(index - 1) * 300}px)`;
  index -= 1;
});

rightNavEl.addEventListener("click", onClickOnRightNav);

intervalId = setInterval(autoPlay, 7000);
