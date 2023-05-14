// iep10.js
document.addEventListener("DOMContentLoaded", function() {
    let table = document.querySelector('table');
    let selectedDay = null;

    table.addEventListener('click', function(event) {
        let target = event.target;

        // Check if a table cell was clicked
        if (target.tagName != 'TD') return;

        // Check if a day was selected
        if (target.textContent.trim() === '') return;

        // Darken and reserve the day
        highlight(target);
    });

    function highlight(day) {
        if (selectedDay) {
            selectedDay.classList.remove('reserved');
        }
        selectedDay = day;
        selectedDay.classList.add('reserved');

        // Show the reservation confirmation
        alert('You have reserved a class on this day at 5pm!');
    }
    
});