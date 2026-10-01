let cronometer

let ms = 0
let sec = 0
let min = 0
let hour = 0

const timer = document.getElementById("timer")
const start = document.getElementById("start")
const stop  = document.getElementById("stop")
const reset = document.getElementById("reset")

start.disabled = false;
stop.disabled  = true;
reset.disabled = true;

function printTime(hour_fmtd, min_fmtd, sec_fmtd, ms_fmtd) {
    hour_fmtd = String(hour_fmtd).padStart(2, '0');
    min_fmtd  = String(min_fmtd).padStart(2, '0');
    sec_fmtd  = String(sec_fmtd).padStart(2, '0');
    ms_fmtd   = String(ms_fmtd).padStart(3, '0');

    timer.innerHTML = `${hour_fmtd}:${min_fmtd}:${sec_fmtd}.${ms_fmtd}`
}

function start() {
    start.disabled = true;
    stop.disabled  = false;
    reset.disabled = false;

    cronometer =
        setInterval(() => {
            ms++
            if (ms === 1000) {
                sec++
                ms = 0
            }

            if (sec === 60) {
                min++
                sec = 0
            }

            if (min === 60) {
                hour++
                min = 0
            }

            printTime(hour, min, sec, ms)
        }, 1);
}

function stop() {
    start.disabled = false;
    stop.disabled  = true;
    reset.disabled = false;

    clearInterval(cronometer)
}

function reset() {
    start.disabled = false;
    stop.disabled  = true;
    reset.disabled = true;

    stop()
    printTime(0, 0, 0, 0)
}