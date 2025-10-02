let leftNavEl = document.getElementById("leftNav");
let rightNavEl = document.getElementById("rightNav");
let containerEl = document.getElementById("container");
let totalImages = containerEl.childElementCount;
let navEl = document.querySelectorAll(".nav");

let index = 0;
let intervalId;

for (let i = 0; i < totalImages; i++) {
  navEl[i].addEventListener("click", () => {
    containerEl.style.transform = `translatex(-${i * 300}px)`;
    navEl[i].classList.add("active");

    navEl[index].classList.remove("active");
    index = i;
  });
}

function onClickOnRightNav() {
  navEl[index].classList.remove("active");
  if (index >= totalImages - 1) {
    index = -1;
  }

  containerEl.style.transform = `translatex(-${(index + 1) * 300}px)`;
  navEl[index + 1].classList.add("active");

  index += 1;
}

function autoPlay() {
  onClickOnRightNav();
}

leftNavEl.addEventListener("click", function () {
  navEl[index].classList.remove("active");
  if (index === 0) {
    index = 4;
  }
  containerEl.style.transform = `translatex(-${(index - 1) * 300}px)`;
  navEl[index - 1].classList.add("active");
  index -= 1;
});

rightNavEl.addEventListener("click", onClickOnRightNav);

intervalId = setInterval(autoPlay, 7000);
