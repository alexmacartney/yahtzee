function upperHalfScore(output, value) {
    if (!output.innerHTML) {
        var score = 0;
        for (let j = 1; j < 6; j++) {
            var diceScore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (diceScore == value) {
                score += diceScore;
            }
        }
        output.innerHTML = score;

        var upperHalfSum = Number(ones.innerHTML) + Number(twos.innerHTML) + Number(threes.innerHTML) + Number(fours.innerHTML) + Number(fives.innerHTML) + Number(sixes.innerHTML);
        upperHalf.innerHTML = upperHalfSum;

        if (upperHalfSum >= 63) {
            bonus.innerHTML = 35;
            totalUpperHalf.innerHTML = upperHalfSum + 35;
        }

        grandTotal.innerHTML = totalUpperHalf.innerHTML + lowerHalf.innerHTML;

        nextRound();
    }
}

button.onclick = upperHalfScore(ones, 1)