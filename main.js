function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    document.querySelector("#hours").innerHTML = hrs;
    document.querySelector("#minutes").innerHTML = min;
    document.querySelector("#seconds").innerHTML = sec;
}
setInterval(displayTime, 10);