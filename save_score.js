var score = 0;
var diceScore = 0;
var diceScores = [];
var upperHalfSum = 0;
var lowerHalfSum = 0;

var button = document.getElementById('onesButton');

button.onclick = function() {
    if (!ones.innerHTML) {
        score = 0;
        for (let j = 1; j < 6; j++) {
            diceScore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (diceScore == 1) {
                score += diceScore;
            }
        }
        ones.innerHTML = score;

        upperHalfSum = Number(ones.innerHTML) + Number(twos.innerHTML) + Number(threes.innerHTML) + Number(fours.innerHTML) + Number(fives.innerHTML) + Number(sixes.innerHTML);
        upperHalf.innerHTML = upperHalfSum;

        if (upperHalfSum >= 63) {
            bonus.innerHTML = 35;
        }

        if (score == 5 && Number(yahtzee.innerHTML) == 50) {
            yahtzee.innerHTML = Number(yahtzee.innerHTML) + 100;
        }

        totalUpperHalf.innerHTML = upperHalfSum + Number(bonus.innerHTML);

        lowerHalfSum = Number(threeOfAKind.innerHTML) + Number(fourOfAKind.innerHTML) + Number(fullHouse.innerHTML) + Number(lowStraight.innerHTML) + Number(highStraight.innerHTML) + Number(yahtzee.innerHTML) + Number(chance.innerHTML);
        lowerHalf.innerHTML = lowerHalfSum;

        grandTotal.innerHTML = Number(totalUpperHalf.innerHTML) + Number(lowerHalf.innerHTML);

        nextRound();
    }
};

var button = document.getElementById('twosButton');

button.onclick = function() {
    if (!twos.innerHTML) {
        score = 0;
        for (let j = 1; j < 6; j++) {
            diceScore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (diceScore == 2) {
                score += diceScore;
            }
        }
        twos.innerHTML = score;

        upperHalfSum = Number(ones.innerHTML) + Number(twos.innerHTML) + Number(threes.innerHTML) + Number(fours.innerHTML) + Number(fives.innerHTML) + Number(sixes.innerHTML);
        upperHalf.innerHTML = upperHalfSum;

        if (upperHalfSum >= 63) {
            bonus.innerHTML = 35;
        }

        if (score == 10 && Number(yahtzee.innerHTML) == 50) {
            yahtzee.innerHTML = Number(yahtzee.innerHTML) + 100;
        }

        totalUpperHalf.innerHTML = upperHalfSum + Number(bonus.innerHTML);

        lowerHalfSum = Number(threeOfAKind.innerHTML) + Number(fourOfAKind.innerHTML) + Number(fullHouse.innerHTML) + Number(lowStraight.innerHTML) + Number(highStraight.innerHTML) + Number(yahtzee.innerHTML) + Number(chance.innerHTML);
        lowerHalf.innerHTML = lowerHalfSum;

        grandTotal.innerHTML = Number(totalUpperHalf.innerHTML) + Number(lowerHalf.innerHTML);

        nextRound();
    }
};

var button = document.getElementById('threesButton');

button.onclick = function() {
    if (!threes.innerHTML) {
        score = 0;
        for (let j = 1; j < 6; j++) {
            diceScore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (diceScore == 3) {
                score += diceScore;
            }
        }
        threes.innerHTML = score;

        upperHalfSum = Number(ones.innerHTML) + Number(twos.innerHTML) + Number(threes.innerHTML) + Number(fours.innerHTML) + Number(fives.innerHTML) + Number(sixes.innerHTML);
        upperHalf.innerHTML = upperHalfSum;

        if (upperHalfSum >= 63) {
            bonus.innerHTML = 35;
        }

        if (score == 15 && Number(yahtzee.innerHTML) == 50) {
            yahtzee.innerHTML = Number(yahtzee.innerHTML) + 100;
        }

        totalUpperHalf.innerHTML = upperHalfSum + Number(bonus.innerHTML);

        lowerHalfSum = Number(threeOfAKind.innerHTML) + Number(fourOfAKind.innerHTML) + Number(fullHouse.innerHTML) + Number(lowStraight.innerHTML) + Number(highStraight.innerHTML) + Number(yahtzee.innerHTML) + Number(chance.innerHTML);
        lowerHalf.innerHTML = lowerHalfSum;

        grandTotal.innerHTML = Number(totalUpperHalf.innerHTML) + Number(lowerHalf.innerHTML);

        nextRound();
    }
};

var button = document.getElementById('foursButton');

button.onclick = function() {
    if (!fours.innerHTML) {
        score = 0;
        for (let j = 1; j < 6; j++) {
            diceScore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (diceScore == 4) {
                score += diceScore;
            }
        }
        fours.innerHTML = score;

        upperHalfSum = Number(ones.innerHTML) + Number(twos.innerHTML) + Number(threes.innerHTML) + Number(fours.innerHTML) + Number(fives.innerHTML) + Number(sixes.innerHTML);
        upperHalf.innerHTML = upperHalfSum;

        if (upperHalfSum >= 63) {
            bonus.innerHTML = 35;
        }

        if (score == 20 && Number(yahtzee.innerHTML) == 50) {
            yahtzee.innerHTML = Number(yahtzee.innerHTML) + 100;
        }

        totalUpperHalf.innerHTML = upperHalfSum + Number(bonus.innerHTML);

        lowerHalfSum = Number(threeOfAKind.innerHTML) + Number(fourOfAKind.innerHTML) + Number(fullHouse.innerHTML) + Number(lowStraight.innerHTML) + Number(highStraight.innerHTML) + Number(yahtzee.innerHTML) + Number(chance.innerHTML);
        lowerHalf.innerHTML = lowerHalfSum;

        grandTotal.innerHTML = Number(totalUpperHalf.innerHTML) + Number(lowerHalf.innerHTML);

        nextRound();
    }
};

var button = document.getElementById('fivesButton');

button.onclick = function() {
    if (!fives.innerHTML) {
        score = 0;
        for (let j = 1; j < 6; j++) {
            diceScore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (diceScore == 5) {
                score += diceScore;
            }
        }
        fives.innerHTML = score;

        upperHalfSum = Number(ones.innerHTML) + Number(twos.innerHTML) + Number(threes.innerHTML) + Number(fours.innerHTML) + Number(fives.innerHTML) + Number(sixes.innerHTML);
        upperHalf.innerHTML = upperHalfSum;

        if (upperHalfSum >= 63) {
            bonus.innerHTML = 35;
        }

        if (score == 25 && Number(yahtzee.innerHTML) == 50) {
            yahtzee.innerHTML = Number(yahtzee.innerHTML) + 100;
        }

        totalUpperHalf.innerHTML = upperHalfSum + Number(bonus.innerHTML);

        lowerHalfSum = Number(threeOfAKind.innerHTML) + Number(fourOfAKind.innerHTML) + Number(fullHouse.innerHTML) + Number(lowStraight.innerHTML) + Number(highStraight.innerHTML) + Number(yahtzee.innerHTML) + Number(chance.innerHTML);
        lowerHalf.innerHTML = lowerHalfSum;

        grandTotal.innerHTML = Number(totalUpperHalf.innerHTML) + Number(lowerHalf.innerHTML);

        nextRound();
    }
};

var button = document.getElementById('sixesButton');

button.onclick = function() {
    if (!sixes.innerHTML) {
        score = 0;
        for (let j = 1; j < 6; j++) {
            diceScore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (diceScore == 6) {
                score += diceScore;
            }
        }
        sixes.innerHTML = score;

        upperHalfSum = Number(ones.innerHTML) + Number(twos.innerHTML) + Number(threes.innerHTML) + Number(fours.innerHTML) + Number(fives.innerHTML) + Number(sixes.innerHTML);
        upperHalf.innerHTML = upperHalfSum;

        if (upperHalfSum >= 63) {
            bonus.innerHTML = 35;
        }

        if (score == 30 && Number(yahtzee.innerHTML) == 50) {
            yahtzee.innerHTML = Number(yahtzee.innerHTML) + 100;
        }

        totalUpperHalf.innerHTML = upperHalfSum + Number(bonus.innerHTML);

        lowerHalfSum = Number(threeOfAKind.innerHTML) + Number(fourOfAKind.innerHTML) + Number(fullHouse.innerHTML) + Number(lowStraight.innerHTML) + Number(highStraight.innerHTML) + Number(yahtzee.innerHTML) + Number(chance.innerHTML);
        lowerHalf.innerHTML = lowerHalfSum;

        grandTotal.innerHTML = Number(totalUpperHalf.innerHTML) + Number(lowerHalf.innerHTML);

        nextRound();
    }
};

var button = document.getElementById('threeOfAKindButton');

button.onclick = function() {
    if (!threeOfAKind.innerHTML) {
        score = 0;
        diceScores = [];
        for (let j = 1; j < 6; j++) {
            score += Number(document.getElementById('dice' + String(j)).innerHTML);
            diceScores.push(Number(document.getElementById('dice' + String(j)).innerHTML));
        }
        if (xAreEqual(diceScores, 3)) {
            threeOfAKind.innerHTML = score;
        } else {
            threeOfAKind.innerHTML = 0;
        }

        if (xAreEqual(diceScores, 5) && Number(yahtzee.innerHTML) == 50) {
            yahtzee.innerHTML = Number(yahtzee.innerHTML) + 100;
        }

        lowerHalfSum = Number(threeOfAKind.innerHTML) + Number(fourOfAKind.innerHTML) + Number(fullHouse.innerHTML) + Number(lowStraight.innerHTML) + Number(highStraight.innerHTML) + Number(yahtzee.innerHTML) + Number(chance.innerHTML);
        lowerHalf.innerHTML = lowerHalfSum;

        grandTotal.innerHTML = Number(totalUpperHalf.innerHTML) + Number(lowerHalf.innerHTML);

        nextRound();
    }
};

var button = document.getElementById('fourOfAKindButton');

button.onclick = function() {
    if (!fourOfAKind.innerHTML) {
        score = 0;
        diceScores = [];
        for (let j = 1; j < 6; j++) {
            score += Number(document.getElementById('dice' + String(j)).innerHTML);
            diceScores.push(Number(document.getElementById('dice' + String(j)).innerHTML));
        }
        if (xAreEqual(diceScores, 4)) {
            fourOfAKind.innerHTML = score;
        } else {
            fourOfAKind.innerHTML = 0;
        }

        if (xAreEqual(diceScores, 5) && Number(yahtzee.innerHTML) == 50) {
            yahtzee.innerHTML = Number(yahtzee.innerHTML) + 100;
        }

        lowerHalfSum = Number(threeOfAKind.innerHTML) + Number(fourOfAKind.innerHTML) + Number(fullHouse.innerHTML) + Number(lowStraight.innerHTML) + Number(highStraight.innerHTML) + Number(yahtzee.innerHTML) + Number(chance.innerHTML);
        lowerHalf.innerHTML = lowerHalfSum;

        grandTotal.innerHTML = Number(totalUpperHalf.innerHTML) + Number(lowerHalf.innerHTML);

        nextRound();
    }
};

var button = document.getElementById('fullHouseButton');

button.onclick = function() {
    if (!fullHouse.innerHTML) {
        score = 0;
        diceScores = [];
        for (let j = 1; j < 6; j++) {
            diceScores.push(Number(document.getElementById('dice' + String(j)).innerHTML));
        }
        if (fullHouseChecker(diceScores)) {
            fullHouse.innerHTML = 25;
        } else {
            fullHouse.innerHTML = 0;
        }

        if (xAreEqual(diceScores, 5) && Number(yahtzee.innerHTML) == 50) {
            yahtzee.innerHTML = Number(yahtzee.innerHTML) + 100;
        }

        lowerHalfSum = Number(threeOfAKind.innerHTML) + Number(fourOfAKind.innerHTML) + Number(fullHouse.innerHTML) + Number(lowStraight.innerHTML) + Number(highStraight.innerHTML) + Number(yahtzee.innerHTML) + Number(chance.innerHTML);
        lowerHalf.innerHTML = lowerHalfSum;

        grandTotal.innerHTML = Number(totalUpperHalf.innerHTML) + Number(lowerHalf.innerHTML);

        nextRound();
    }
};

var button = document.getElementById('lowStraightButton');

button.onclick = function() {
    if (!lowStraight.innerHTML) {
        score = 0;
        diceScores = [];
        for (let j = 1; j < 6; j++) {
            diceScores.push(Number(document.getElementById('dice' + String(j)).innerHTML));
        }
        if (xAreEqual(diceScores, 5) && upperAlreadyFull(diceScores[0])) {
            lowStraight.innerHTML = 30;
        } else if (straightChecker(diceScores, 4)) {
            lowStraight.innerHTML = 30;
        } else {
            lowStraight.innerHTML = 0;
        }

        if (xAreEqual(diceScores, 5) && Number(yahtzee.innerHTML) == 50) {
            yahtzee.innerHTML = Number(yahtzee.innerHTML) + 100;
        }

        lowerHalfSum = Number(threeOfAKind.innerHTML) + Number(fourOfAKind.innerHTML) + Number(fullHouse.innerHTML) + Number(lowStraight.innerHTML) + Number(highStraight.innerHTML) + Number(yahtzee.innerHTML) + Number(chance.innerHTML);
        lowerHalf.innerHTML = lowerHalfSum;

        grandTotal.innerHTML = Number(totalUpperHalf.innerHTML) + Number(lowerHalf.innerHTML);

        nextRound();
    }
};

var button = document.getElementById('highStraightButton');

button.onclick = function() {
    if (!highStraight.innerHTML) {
        score = 0;
        diceScores = [];
        for (let j = 1; j < 6; j++) {
            diceScores.push(Number(document.getElementById('dice' + String(j)).innerHTML));
        }
        if (xAreEqual(diceScores, 5) && upperAlreadyFull(diceScores[0])) {
            highStraight.innerHTML = 40;
        } else if (straightChecker(diceScores, 5)) {
            highStraight.innerHTML = 40;
        } else {
            highStraight.innerHTML = 0;
        }

        if (xAreEqual(diceScores, 5) && Number(yahtzee.innerHTML) == 50) {
            yahtzee.innerHTML = Number(yahtzee.innerHTML) + 100;
        }

        lowerHalfSum = Number(threeOfAKind.innerHTML) + Number(fourOfAKind.innerHTML) + Number(fullHouse.innerHTML) + Number(lowStraight.innerHTML) + Number(highStraight.innerHTML) + Number(yahtzee.innerHTML) + Number(chance.innerHTML);
        lowerHalf.innerHTML = lowerHalfSum;

        grandTotal.innerHTML = Number(totalUpperHalf.innerHTML) + Number(lowerHalf.innerHTML);

        nextRound();
    }
};

var button = document.getElementById('yahtzeeButton');

button.onclick = function() {
    if (!yahtzee.innerHTML) {
        score = 0;
        diceScores = [];
        for (let j = 1; j < 6; j++) {
            score += Number(document.getElementById('dice' + String(j)).innerHTML);
            diceScores.push(Number(document.getElementById('dice' + String(j)).innerHTML));
        }
        if (xAreEqual(diceScores, 5)) {
            yahtzee.innerHTML = 50;
        } else {
            yahtzee.innerHTML = 0;
        }

        lowerHalfSum = Number(threeOfAKind.innerHTML) + Number(fourOfAKind.innerHTML) + Number(fullHouse.innerHTML) + Number(lowStraight.innerHTML) + Number(highStraight.innerHTML) + Number(yahtzee.innerHTML) + Number(chance.innerHTML);
        lowerHalf.innerHTML = lowerHalfSum;

        grandTotal.innerHTML = Number(totalUpperHalf.innerHTML) + Number(lowerHalf.innerHTML);

        nextRound();
    }
};

var button = document.getElementById('chanceButton');

button.onclick = function() {
    if (!chance.innerHTML) {
        score = 0;
        diceScores = [];
        for (let j = 1; j < 6; j++) {
            score += Number(document.getElementById('dice' + String(j)).innerHTML);
            diceScores.push(Number(document.getElementById('dice' + String(j)).innerHTML));
        }
        chance.innerHTML = score;

        if (xAreEqual(diceScores, 5) && Number(yahtzee.innerHTML) == 50) {
            yahtzee.innerHTML = Number(yahtzee.innerHTML) + 100;
        }

        lowerHalfSum = Number(threeOfAKind.innerHTML) + Number(fourOfAKind.innerHTML) + Number(fullHouse.innerHTML) + Number(lowStraight.innerHTML) + Number(highStraight.innerHTML) + Number(yahtzee.innerHTML) + Number(chance.innerHTML);
        lowerHalf.innerHTML = lowerHalfSum;

        grandTotal.innerHTML = Number(totalUpperHalf.innerHTML) + Number(lowerHalf.innerHTML);

        nextRound();
    }
};