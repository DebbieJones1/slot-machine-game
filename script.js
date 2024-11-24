// Array of possible slot machine symbols
const symbols = ["🍒", "🍉", "🍇", "🍋", "🍊"];

// DOM elements
const spinButton = document.getElementById("spinButton");
const resultMessage = document.getElementById("result-message");
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");

// Function to spin the slot machine
function spinSlotMachine() {
    // Disable the spin button during animation
    spinButton.disabled = true;
    spinButton.innerText = "Spinning...";

    // Randomly pick symbols for each slot
    let rand1 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand2 = symbols[Math.floor(Math.random() * symbols.length)];
    let rand3 = symbols[Math.floor(Math.random() * symbols.length)];

    // Animate the spinning
    setTimeout(() => {
        slot1.innerText = rand1;
        slot2.innerText = rand2;
        slot3.innerText = rand3;

        // Check for a winning combination
        if (rand1 === rand2 && rand2 === rand3) {
            resultMessage.innerText = "Congratulations! You Win! 🎉";
            resultMessage.style.color = "#27ae60"; // Green text for win
        } else {
            resultMessage.innerText = "Sorry, you didn't win this time. Try again!";
            resultMessage.style.color = "#e74c3c"; // Red text for loss
        }

        // Enable the spin button again after the animation
        spinButton.disabled = false;
        spinButton.innerText = "Spin";
    }, 1000); // Delay for animation effect
}

// Event listener for the spin button
spinButton.addEventListener("click", spinSlotMachine);
