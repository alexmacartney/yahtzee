var button = document.getElementById('reset');

button.onclick = function() {
    for (let j = 1; j < 6; j++) {
        document.getElementById('dicecheck' + String(j)).checked = 0
        document.getElementById('dice' + String(j)).innerHTML = 0;
    }
    rollsmade = 0
    rollsleft.innerHTML = 3
};