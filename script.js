function updateTime() {
    const now = new Date();
    const day=now.getDate()
    const month=now.getMonth()+1 //Months are 0 indexed i.e. January = 0
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

//Toast code
const buttons = document.querySelectorAll('.toastButton');
const toast = document.getElementById('toast');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const message = 'Repository downloaded!'
        toast.textContent = message; // Set the toast message
        toast.classList.add('show'); // Show the toast

        setTimeout(() => {
            toast.classList.remove('show'); // Hide the toast after 3 seconds
        }, 3000);
    });
});
