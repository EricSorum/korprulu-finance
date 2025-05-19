const date = new Date();
var ampm = date.getHours() < 12? 'A.M.' : 'P.M.';

const inlineClock = document.getElementById("inline-clock");
inlineClock.innerHTML = `${date.getHours()}<span class="inline-colon">:</span>${date.getMinutes() + 10} ${ampm}`;

