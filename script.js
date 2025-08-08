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
