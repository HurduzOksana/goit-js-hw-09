
// Створюємо константу - кінцеву дату

const DEADLINE = new Date(2023, 5, 21);

// Робимо доступ до елементу
 const timerEl = document.querySelector(`#datetime-picker`)


// Описуємо таймер через об'єкт

const timer = {
    // Описуємо метод запуски
    start(deadline) {
        setInterval(() => {
            const now = new Date();
            const time = deadline - now;
        }, 1000)
    },
    // Описуємо метод припинення
    stop() {},

};

timer.start(DEADLINE);