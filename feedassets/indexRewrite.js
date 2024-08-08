

function reset() {
    document.getElementById("milliliters").value = ""
    document.getElementById("hours").value = "";
    document.getElementById("milperhour").value = "";
}

document.getElementById("resetButton").addEventListener('click', reset)

function feedRate() {

    let mil = parseFloat(document.getElementById("milliliters").value);
    let hour = parseFloat(document.getElementById("hours").value);
    let milPerHour = parseFloat(document.getElementById("milperhour").value);


            if (mil > 0 && hour > 0) {
                answerMilPerHour = mil / hour;
                return document.getElementById("milperhour").value = `${answerMilPerHour.toFixed(2)} mL/hour`;
            } else {
                if (mil > 0) {
                    answerHour = mil / milPerHour;
                    return document.getElementById("hours").value = `${answerHour.toFixed(2)} hours`;
                } else {
                    if (hour > 0) {
                        answerMil = milPerHour * hour;
                        return document.getElementById("milliliters").value = `${answerMil.toFixed(2)} mL`;
                    } else {
                        return alert("please enter valid number");
                    }
                }
            }
        };

document.getElementById("btn").addEventListener('click', feedRate);