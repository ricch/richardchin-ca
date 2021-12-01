var d = new Date();
var hr = d.getHours();
var greeting = document.getElementById('greeting');

if (hr < 12) {
    greeting.innerHTML = "Good Morning";
} else if (hr >= 18) {
    greeting.innerHTML = "Good Evening";
} else if (hr > 12) {
    greeting.innerHTML = "Good Afternoon";
} else if (hr == 12) {
    greeting.innerHTML = "Lunch Time";
}