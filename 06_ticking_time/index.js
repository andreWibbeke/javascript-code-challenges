/*
- Initialize a global timer object with default values
- Attach methods that manipulate the time
- Use setInterval() to mutate the timer instance automatically
- Create a private (internal) method (use a Symbol) that updates the DOM
 after the timer instance has been updated
*/

// for a more independet testing, we need seperate instances of an object
// (instead of a single timer object which gets stored in memory)

class Timer {
  constructor(seconds = 0, minutes = 0, hours = 0) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
  }
  addSecond() {
    this.seconds += 1;
  }
  addMinute() {
    this.minutes += 1;
  }
  addHour() {
    this.hours += 1;
  }
  initializeTimer() {
    const clock = document.querySelector("#clock");
    clock.textContent = "0:0:0";
    return setInterval(() => {
      this.addSecond();
      if (this.seconds === 60) {
        this.seconds = 0;
        this.addMinute();
      }
      if (this.minutes === 60) {
        this.minutes = 0;
        this.addHour();
      }

      clock.textContent = `${this.hours}:${this.minutes}:${this.seconds}`;
    }, 1000);
  }
  initializeTimerAlt() {
    const clock = document.querySelector("#clock");
    return setInterval(() => {
      const date = new Date();
      const tick = date.toLocaleTimeString();

      clock.textContent = tick;
    }, 1000);
  }
}

// just for testing on a live server

window.addEventListener("DOMContentLoaded", () => {
  const clock = document.querySelector("#clock");
  const timer = new Timer();
  const intervalID = timer.initializeTimerAlt();

  // clean-up
  setTimeout(() => {
    clearInterval(intervalID);
    clock.textContent = "";
  }, 5500);
});

export default Timer;
