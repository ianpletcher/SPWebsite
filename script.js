//script start
//Release Countdown Timer
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
//Countdown Timer end
//Password Protected Snippets
document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.getElementById("password");
    if (inputElement) {
        inputElement.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                revealSnippets();
            }
        });
    } else {
        console.error("Input field not found.");
    }
});
function revealSnippets(){
    let inputValue = document.getElementById("password").value
    if(inputValue === "VHS2025"){
        document.getElementById("snippet_content").style.display = "block";
    }
    else{
        alert("Incorrect Password!");
    }
}
function playSnippets(elementID) {
    let audio = document.getElementById(elementID);
    if (!audio) {
        console.error("Audio element not found:", elementID);
        return;
    }
    audio.play();
    
    // Find the correct button
    let button = document.querySelector(`[onclick="playSnippets('${elementID}')"]`);
    if (button) {
        button.innerHTML = "⏸︎";
        button.setAttribute("onclick", `pauseSnippets('${elementID}')`);
    }
}

function pauseSnippets(elementID) {
    let audio = document.getElementById(elementID);
    if (!audio) return;
    audio.pause();
    
    // Find the correct button
    let button = document.querySelector(`[onclick="pauseSnippets('${elementID}')"]`);
    if (button) {
        button.innerHTML = "▶";
        button.setAttribute("onclick", `playSnippets('${elementID}')`);
    }
}
//Snippet Player end
//Responsive Navigation Bar
function toggleMenu(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//Responsive Navigation Bar end
//script end