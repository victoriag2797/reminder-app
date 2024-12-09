let scoreContainer = document.getElementById("score");
let buttonbox1 = document.getElementById("buttonbox1");
let buttonbox2 = document.getElementById("buttonbox2");
let addButton = document.getElementById("addButton");
let resetButton = document.getElementById("resetButton");
let inputField = document.getElementById("input-field");
let outputbox = document.getElementById("outputbox");
let testButton = document.getElementById("testButton")


let reminders;
try {
    reminders = JSON.parse(localStorage.getItem('reminders')) || [];
} catch (e) {
    reminders = [];
}


let score = parseInt(localStorage.getItem('score')) || 0;
scoreContainer.textContent = score;


function updateoutputbox() {
    outputbox.innerHTML = "";
    reminders.forEach(r => {
        let newReminder = document.createElement("p");
        newReminder.classList.add("large-text");
        newReminder.textContent = r.text;
        outputbox.appendChild(newReminder);
    });
};
updateoutputbox();


addButton.addEventListener('click', () => {
    let outputboxText = inputField.value.trim();
    if (outputboxText) {
        console.log("Hello world!");
        reminders.push({ score: score, text: outputboxText });
        localStorage.setItem('reminders', JSON.stringify(reminders));
        let newReminder = document.createElement("p");
        newReminder.classList.add("large-text");
        newReminder.textContent = outputboxText;
        outputbox.appendChild(newReminder);
        inputField.value = "";
    }
});


buttonbox1.addEventListener('click', () => {
    console.log("Hello world!");
    score++;
    scoreContainer.textContent = score;
    localStorage.setItem('score', score);
    updateoutputbox();
});


buttonbox2.addEventListener('click', () => {
   if (score > 0) {
       score--;
       scoreContainer.textContent = score;
       localStorage.setItem('score', score);
       updateoutputbox();
   }
});


resetButton.addEventListener('click', () => {
   localStorage.removeItem('reminders');
   localStorage.removeItem('score');
   reminders = [];
   score = 0;
   outputbox.innerHTML = "";
   scoreContainer.textContent = score;
   inputField.value = "";
   updateoutputbox();
});

testButton.addEventListener('click', () => {
    console.log("Hello world!");
});



