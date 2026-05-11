function updateCalender() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["JANUARY" , "FEBRUARY" , "MARCH" , "APRIL" , "MAY" , "JUNE" , "JULY" , "AUGUST" , "SEPTEMBER" , "OCTOBER" , "NOVEMBER" , "DECEMBER"];

    const month = monthNames[now.getMonth()];     

    document.getElementById("day").textContent = day;
    document.getElementById("month").textContent = month;

}

updateCalender();

function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const time = `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);

updateClock();