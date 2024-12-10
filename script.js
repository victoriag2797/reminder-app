let scoreContainer = document.getElementById("scoreContainer");
let buttonbox1 = document.getElementById("buttonbox1");
let buttonbox2 = document.getElementById("buttonbox2");
let addButton = document.getElementById("addButton");
let resetButton = document.getElementById("resetButton");
let inputField = document.getElementById("inputField");
let outputbox = document.getElementById("outputbox");

let reminders;
try {
    reminders = JSON.parse(localStorage.getItem('reminders')) || [];
} catch (e) {
    reminders = [];
}

if (localStorage.getItem('score') === null) {
    localStorage.setItem('score', '1');
}

let score = parseInt(localStorage.getItem('score')) || 1;

if (isNaN(score)) {
    alert("The score is not a valid number.");
    score = 1; 
}

scoreContainer.textContent = score;

function updateoutputbox() {
    outputbox.innerHTML = "";
    reminders.forEach(r => {
        if (r.score === score) {
            let newReminder = document.createElement("p");
            newReminder.classList.add("large-text");
            newReminder.textContent = r.text;
            outputbox.appendChild(newReminder);
        }
    });
}
updateoutputbox();


addButton.addEventListener("click", function() {
    let outputboxText = inputField.value.trim();
    if (outputboxText) {
        reminders.push({ score: score, text: outputboxText });
        localStorage.setItem('reminders', JSON.stringify(reminders));
        let newReminder = document.createElement("p");
        newReminder.classList.add("large-text");
        newReminder.textContent = outputboxText;
        outputbox.appendChild(newReminder);
        inputField.value = "";
    }
});

buttonbox2.addEventListener("click", function() {
    score++;
    scoreContainer.textContent = score;
    localStorage.setItem('score', score);
    updateoutputbox();
});


buttonbox1.addEventListener("click", function() {
    if (score > 1) {
       score--;
       scoreContainer.textContent = score;
       localStorage.setItem('score', score);
       updateoutputbox();
   }
});


resetButton.addEventListener("click", function() {
    localStorage.removeItem('reminders');
    localStorage.removeItem('score');
    reminders = [];
    score = 1;
    outputbox.innerHTML = "";
    scoreContainer.textContent = score;
    inputField.value = "";
    updateoutputbox();
});