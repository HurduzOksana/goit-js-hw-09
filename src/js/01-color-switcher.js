
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Створюємо доступ до кнопок
const startEl = document.querySelector(`[data-start]`);
const stopEl = document.querySelector(`[data-stop]`);

// Створити доступ до body
const bodyEl = document.querySelector(`body`);

// Створюємо початкове значення таймера
let timerId = null;

// Створюємо обробку кнопки Старт та зміну кольору фону по кліку на неї
startEl.addEventListener(`click`, () => {
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
  }, 1000);
});

// Зупиняємо зміну фону по кліку на кнопку Стоп
stopEl.addEventListener("click", () => {
  clearInterval(timerId);
});
