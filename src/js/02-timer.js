
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonEl = document.querySelector(`[data-start]`);
const inputEl = document.querySelector(`#datetime-picker`);
const daysTime = document.querySelector(`[data-days]`);
const minutesTime = document.querySelector(`[data-minutes]`);
const secondsTime = document.querySelector(`[data-seconds]`);
const hoursTime = document.querySelector(`[data-hours]`);

const thisData = new Date();
buttonEl.disabled = true;
let chooseSelectedDates = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < thisData) {
          Notify.failure("Please choose a date in the future");
           buttonEl.disabled = true;
      } else {
          buttonEl.disabled = false;
      };

      chooseSelectedDates = selectedDates[0];
      
  },
};


const timer = {
    intervalId: null,

    start(deadline) {
        
        this.intervalId = setInterval(() => {
            const now = Date.now();
            const diff = deadline - now;

            if (diff <= 0) {
                this.stop();
                return;
            }

            const { days, hours, minutes, seconds } = this.convertMs(diff);

            daysTime.textContent = this.pad(days);
            hoursTime.textContent = this.pad(hours);
            minutesTime.textContent = this.pad(minutes);
            secondsTime.textContent = this.pad(seconds);

        }, 1000);
    },

    stop() {
        clearInterval(this.intervalId);
       

    },

    pad(value) {
        return String(value).padStart(2, 0);
    },
    
    convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
    },


};


flatpickr(inputEl, options);

buttonEl.addEventListener('click', () => {
    timer.start(chooseSelectedDates)
});