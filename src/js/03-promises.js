
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Створюємо посилання на елементи

const firstDelay = document.querySelector(`[name = "delay"]`);
const delayStep = document.querySelector(`[name = "step"]`);
const amountEl = document.querySelector(`[name = "amount"]`);
const form = document.querySelector(`.form`);


// HTML містить розмітку форми, в поля якої користувач буде вводити першу затримку в мілісекундах,
// крок збільшення затримки для кожного промісу після першого і кількість промісів, яку необхідно створити.

// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів,
// скільки ввели в поле amount.Під час кожного виклику передай їй номер промісу(position), що створюється, і затримку,
// враховуючи першу затримку(delay), введену користувачем, і крок(step).

// Назначаємо слухача на форму
form.addEventListener(`submit`, onSubmit);

function onSubmit(event) {
  event.preventDefault();
  // прив'язуємо інпути до їх значень
  let delay = Number(firstDelay.value);
  let step = Number(delayStep.value);
  let amount = Number(amountEl.value);
  // на кожній ітерації передаєм номер промісу, затримку
  for (let i = 1; i <= amount; i += 1) { 
    // викликаємо  проміс createPromise стільки разів скільки вказано в amount, передаємо індекс(номер) промісу і затримку
    createPromise(i, delay)
      .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
       Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    })
    // до затримки додаємо крок
     delay += step;
  }
}

// Функція-обробник приймає позицію та затримку
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
// Функція приймає новий проміс
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
// Значенням промісу є об'єкт, в якому будуть властивості position і delay
      resolve({position, delay});
    } else {
// Значенням промісу є об'єкт, в якому будуть властивості position і delay
      reject({position, delay});
    }
    // Вказуємо затримку
  }, delay);
  });
  // повертаєм проміс
  return promise;
}


  
  
  // Доповни код функції createPromise таким чином, щоб вона повертала один проміс,
  // який виконується або відхиляється через delay часу.Значенням промісу повинен бути об'єкт, 
  // в якому будуть властивості position і delay зі значеннями однойменних параметрів.Використовуй 
  // початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.

    
