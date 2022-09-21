function nextRound() {
    for (let j = 1; j < 6; j++) {
        document.getElementById('diceCheck' + String(j)).checked = 0;
        document.getElementById('dice' + String(j)).innerHTML = 0;
    }
    rollsMade = 0
    rollsLeft.innerHTML = 3
}