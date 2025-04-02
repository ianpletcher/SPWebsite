//script start
function getMidnightLocal(year, month, day) {
    return new Date(year, month - 1, day, 0, 0, 0, 0).getTime();
}

const sundownDate = getMidnightLocal(2025, 4, 18);
const vhsDate = getMidnightLocal(2025, 4, 25);

function updateCountdown(eventTime, elementId) {
    let now = new Date().getTime();
    let timeLeft = eventTime - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById(elementId).innerHTML = `${days}d ${hours}h ${minutes}m`;
}

setInterval(() => updateCountdown(sundownDate, "sundown-timer"), 1000);
setInterval(() => updateCountdown(vhsDate, "vhs-timer"), 1000);
//script end