var result = 0;
var score = 0;

function upperhalf(output, value) {
    if (output.innerHTML == 0) {
        score = 0;
        for (let j = 1; j < 6; j++) {
            dicescore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (dicescore == value) {
                score += dicescore;
            }
        }
        output.innerHTML = score;
    }

    nextround();
}

var button = document.getElementById('onesbutton');

button.onclick = upperhalf(ones, 1)

button.onclick = function() {
    if (ones.innerHTML == 0) {
        score = 0;
        for (let j = 1; j < 6; j++) {
            dicescore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (dicescore == 1) {
                score += dicescore;
            }
        }
        ones.innerHTML = score;
    }

    nextround();
};

var button = document.getElementById('twosbutton');

button.onclick = function() {
    if (twos.innerHTML == 0) {
        score = 0;
        for (let j = 1; j < 6; j++) {
            dicescore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (dicescore == 2) {
                score += dicescore;
            }
        }
        twos.innerHTML = score;
    }

    nextround();
};

var button = document.getElementById('threesbutton');

button.onclick = function() {
    if (threes.innerHTML == 0) {
        score = 0;
        for (let j = 1; j < 6; j++) {
            dicescore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (dicescore == 3) {
                score += dicescore;
            }
        }
        threes.innerHTML = score;
    }

    nextround();
};

var button = document.getElementById('foursbutton');

button.onclick = function() {
    if (fours.innerHTML == 0) {
        score = 0;
        for (let j = 1; j < 6; j++) {
            dicescore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (dicescore == 4) {
                score += dicescore;
            }
        }
        fours.innerHTML = score;
    }

    nextround();
};

var button = document.getElementById('fivesbutton');

button.onclick = function() {
    if (fives.innerHTML == 0) {
        score = 0;
        for (let j = 1; j < 6; j++) {
            dicescore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (dicescore == 5) {
                score += dicescore;
            }
        }
        fives.innerHTML = score;
    }

    nextround();
};

var button = document.getElementById('sixesbutton');

button.onclick = function() {
    if (sixes.innerHTML == 0) {
        score = 0;
        for (let j = 1; j < 6; j++) {
            dicescore = Number(document.getElementById('dice' + String(j)).innerHTML);
            if (dicescore == 6) {
                score += dicescore;
            }
        }
        sixes.innerHTML = score;
    }

    nextround();
};

