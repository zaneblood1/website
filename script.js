function updateTime() {
    const now = new Date();
    const day=now.getDay()
    const month=now.getMonth()
    const year=now.getFullYear()

    let hours=now.getHours()
    let ampm=''
    if (hours>12) {
        hours=hours-12
        ampm='PM'
    }
    else{
        ampm='AM'
    }
    hours = String(hours).padStart(2, '0');

    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeZone = String(Intl.DateTimeFormat().resolvedOptions().timeZone)
    const lastUpdateTime='This website was last updated 11/2/2024.'
    const timeString = `The current time in your area is ${month}/${day}/${year} ${hours}:${minutes}:${seconds} ${ampm} ${timeZone}. ${lastUpdateTime}`;

    document.getElementById('time').textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();