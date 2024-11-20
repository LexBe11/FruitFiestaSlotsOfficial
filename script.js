// Array of slot symbols with their respective prize values
const symbols = [
    { symbol: "🍒", prize: 5 },
    { symbol: "🍋", prize: 10 },
    { symbol: "🍊", prize: 15 },
    { symbol: "🍉", prize: 20 },
    { symbol: "⭐", prize: 50 },
    { symbol: "🍇", prize: 30 },
    { symbol: "7", prize: 100 },
    { symbol: "<span style='color:red;'>7</span>", prize: 150 }, // Red 7
    { symbol: "<span style='color:green;'>7</span>", prize: 200 }, // Green 7
    { symbol: "<span style='color:blue;'>7</span>", prize: 250 }, // Blue 7
    { symbol: "<span style='color:gold;'>7</span>", prize: 500 }, // Gold 7
    { symbol: "BAR", prize: 50 },
    { symbol: "2BAR", prize: 100 },
    { symbol: "3BAR", prize: 150 },
];

// DOM elements
const reel1 = document.getElementById("reel1");
const reel2 = document.getElementById("reel2");
const reel3 = document.getElementById("reel3");
const result = document.getElementById("result");
const prize = document.getElementById("prize");
const spinButton = document.getElementById("spin-button");

// Spin function
function spin() {
    // Generate random symbols for each reel
    const spin1 = symbols[Math.floor(Math.random() * symbols.length)];
    const spin2 = symbols[Math.floor(Math.random() * symbols.length)];
    const spin3 = symbols[Math.floor(Math.random() * symbols.length)];

    // Update reel content (with possible HTML for color)
    reel1.innerHTML = spin1.symbol;
    reel2.innerHTML = spin2.symbol;
    reel3.innerHTML = spin3.symbol;

    // Check results
    let totalPrize = spin1.prize + spin2.prize + spin3.prize;
    let resultMessage = "😞 You Lose! Spin Again!";
    
    // Check if all three symbols match
    if (spin1.symbol === spin2.symbol && spin2.symbol === spin3.symbol) {
        resultMessage = "🎉 JACKPOT! You Win! 🎉";
        totalPrize = spin1.prize * 3; // All matching symbols have higher prize
    } else if (spin1.symbol === spin2.symbol || spin2.symbol === spin3.symbol || spin1.symbol === spin3.symbol) {
        resultMessage = "😊 Close! Try Again!";
    }

    // Update the result message
    result.innerHTML = resultMessage;
    prize.innerHTML = `Prize: $${totalPrize}`;
}

// Add event listener to the button
spinButton.addEventListener("click", spin);
