const daysOnСounter = document.querySelector('span[data-value="days"]');
const hoursOnСounter = document.querySelector('span[data-value="hours"]');
const minsOnСounter = document.querySelector('span[data-value="mins"]');
const secsOnСounter = document.querySelector('span[data-value="secs"]');

class CountdownTimer {
  constructor(expirationDate) {
    this.expirationDate = expirationDate;
  }

  timerValues(days, hours, mins, secs) {
    daysOnСounter.textContent = days;
    hoursOnСounter.textContent = hours;
    minsOnСounter.textContent = mins;
    secsOnСounter.textContent = secs;
  }

  countdownTimer() {
    setInterval(() => {
        const time = this.expirationDate - Date.now();
        this.days = Math.floor(time / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        this.secs = Math.floor((time % (1000 * 60)) / 1000);

      this.timerValues(this.days, this.hours, this.mins, this.secs);
    }, 1000);
  }
}

expirationDate = new Date(2021, 06, 12);
const clock = new CountdownTimer(expirationDate);
clock.countdownTimer();
