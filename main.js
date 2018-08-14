// ('h1')[5] accesses the index of the h1 element. h5 is
// the timer.

//creates a timer that counts up in ms

var h1 = document.getElementsByTagName('h1')[5],
    ms = 0, seconds = 0, minutes = 0,
    t;

function add() {
    ms++;
    if (ms >= 100) {
        ms = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
            minutes = 0;
            }
        }
    }

    h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (ms > 9 ? ms : "0" + ms);

    timer();
}
function timer() {
  // change this value to change count up speed
    t = setTimeout(add, 10);
}
timer();
