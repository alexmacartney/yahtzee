var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

function printNumber(number, i) {
    var dice = document.getElementById('dice' + String(i));
    dice.innerHTML = number;
}

var button = document.getElementById('rolldice');

var rollsmade = 0

button.onclick = function() {
    if (rollsleft.innerHTML >= 1) {
        for (let j = 1; j < 6; j++) {
            var checkbox = document.getElementById('dicecheck' + String(j)).checked;
            if (!checkbox) {
                var result = dice.roll();
                printNumber(result, j);
            }
        }

        rollsmade++;
        rollsleft.innerHTML = 3 - rollsmade;
    }
};