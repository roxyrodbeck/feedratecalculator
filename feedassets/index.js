

const toggleButton = document.getElementById('darkModeToggle');
const bodyElement = document.body;

toggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');
});

function reset() {
    let mil = document.getElementById("milliliters");
    let hour = document.getElementById("hours");
    let milPerHour = document.getElementById("milperhour");

    mil.value = ""
    hour.value = "";
    milPerHour.value = "";
}

document.getElementById("resetButton").addEventListener('click', reset)

function milliOutputColor() {
    let milliColor = document.getElementById("milliliters");
     return milliColor.style.color = "#ba0000";
}

function hoursOutputColor() {
    let hoursColor = document.getElementById("hours");
    return hoursColor.style.color = "#ba0000";
}

function milPerHourColor() {
    let milPerHourColor = document.getElementById("milperhour");
    return milPerHourColor.style.color= "#ba0000";
}

function feedRate() {

    let mil = parseFloat(document.getElementById("milliliters").value);
    let hour = parseFloat(document.getElementById("hours").value);
    let milPerHour = parseFloat(document.getElementById("milperhour").value);

            if (mil > 0 && hour > 0) {
                answerMilPerHour = mil / hour;
                document.getElementById("milperhour").value = `${answerMilPerHour.toFixed(2)} mL/hour`;
                milPerHourColor()
            } else {
                if (mil > 0) {
                    answerHour = mil / milPerHour;
                    document.getElementById("hours").value = `${answerHour.toFixed(2)} hours`;
                    hoursOutputColor()
                } else {
                    if (hour > 0) {
                        answerMil = milPerHour * hour;
                        document.getElementById("milliliters").value = `${answerMil.toFixed(2)} mL`;
                        milliOutputColor()
                    } else {
                        return alert("Please enter valid number.");
                    }
                }
            }
        };

document.getElementById("btn").addEventListener('click', feedRate);

if ("serviceWorker" in navigator) {
 
    navigator.serviceWorker.register("service-worker.js");
  }