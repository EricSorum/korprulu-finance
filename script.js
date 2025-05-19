const date = new Date();
var ampm = date.getHours() < 12? 'A.M.' : 'P.M.';

const clocks = document.querySelectorAll("#inline-clock");
clocks.forEach((clock) => clock.innerHTML = `${date.getHours()}<span class="inline-colon">:</span>${date.getMinutes() + 10} ${ampm}`);
