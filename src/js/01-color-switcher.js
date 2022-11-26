
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startEl = document.querySelector(`[data-start]`);
const stopEl = document.querySelector(`[data-stop]`);

const bodyEl = document.querySelector(`body`);

let timerId = null;

startEl.addEventListener(`click`, () => {
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
  }, 1000);
});

stopEl.addEventListener("click", () => {
  clearInterval(timerId);
});
