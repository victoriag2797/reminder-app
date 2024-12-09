document.addEventListener("DOMContentLoaded", function() {
    let addButton = document.getElementById("addButton");
    let inputField = document.getElementById("inputField");
    let outputbox = document.getElementById("outputbox");
    let score = 0;

    addButton.addEventListener("click", function() { 
        let inputValue = inputField.value;
        outputbox.innerText = inputValue;
    });
});
