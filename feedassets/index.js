function milliInfo() {
    let millilitersInfo = document.getElementById("milli-info");
    alert("Input the total milliliters required of this feed. Leave blank if this is the information you are solving for.")

}

function hoursInfo() {
    let hoursInfo = document.getElementById("hours-info");
    alert("Input the total hours the feed should run. Convert minutes into a decimal by dividing total minutes by 60. For example, 45 minutes / 60 minutes = 0.75 hour. Leave blank if this is the information you are solving for.")

}

function milPerHourInfo() {
    let milPerHourInfo = document.getElementById("milPerHour-info");
    alert("Simply input the millilters, the one hour is already configured. Leave blank if this is the information you are solving for.")

}

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
                milPerHourColor()
                return document.getElementById("milperhour").value = `${answerMilPerHour.toFixed(2)} mL/hour`;
            } else {
                if (mil > 0) {
                    answerHour = mil / milPerHour;
                    hoursOutputColor()
                    return document.getElementById("hours").value = `${answerHour.toFixed(2)} hours`;
                } else {
                    if (hour > 0) {
                        answerMil = milPerHour * hour;
                        milliOutputColor()
                        return document.getElementById("milliliters").value = `${answerMil.toFixed(2)} mL`;
                    } else {
                        return alert("Please enter valid number.");
                    }
                }
            }
        };

document.getElementById("btn").addEventListener('click', feedRate);

if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("service-worker.js");
  }