document.addEventListener('DOMContentLoaded', function() {
    var darkenedDays = document.querySelectorAll('.darkened');

    darkenedDays.forEach(function(day) {
        day.addEventListener('click', function() {
            alert('You have a class on this day at 5pm!');
        });
    });
});