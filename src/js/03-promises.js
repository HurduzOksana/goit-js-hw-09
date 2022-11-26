
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const firstDelay = document.querySelector(`[name = "delay"]`);
const delayStep = document.querySelector(`[name = "step"]`);
const amountEl = document.querySelector(`[name = "amount"]`);
const form = document.querySelector(`.form`);



form.addEventListener(`submit`, onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let delay = Number(firstDelay.value);
  let step = Number(delayStep.value);
  let amount = Number(amountEl.value);
  for (let i = 1; i <= amount; i += 1) { 
    createPromise(i, delay)
      .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
       Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    })
     delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
    }
  }, delay);
  });
  return promise;
}



    
