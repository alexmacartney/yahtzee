var button = document.getElementById('resetGame');

button.onclick = function() {
    for (let j = 1; j < 6; j++) {
        document.getElementById('diceCheck' + String(j)).checked = 0;
        document.getElementById('dice' + String(j)).innerHTML = '';
    }
    rollsMade = 0;
    rollsLeft.innerHTML = 3;
    ones.innerHTML = '';
    twos.innerHTML = '';
    threes.innerHTML = '';
    fours.innerHTML = '';
    fives.innerHTML = '';
    sixes.innerHTML = '';
    threeOfAKind.innerHTML = '';
    fourOfAKind.innerHTML = '';
    fullHouse.innerHTML = '';
    lowStraight.innerHTML = '';
    highStraight.innerHTML = '';
    yahtzee.innerHTML = '';
    chance.innerHTML = '';
    upperHalf.innerHTML = 0;
    bonus.innerHTML = 0;
    totalUpperHalf.innerHTML = 0;
    lowerHalf.innerHTML = 0;
    grandTotal.innerHTML = 0;
};