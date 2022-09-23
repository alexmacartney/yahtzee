function upperAlreadyFull(x) {
	if (x == 1) {
		if (ones.innerHTML) {
			return true;
		} else {
			return false;
		}
	} else if (x == 2) {
		if (twos.innerHTML) {
			return true;
		} else {
			return false;
		}
	} else if (x == 3) {
		if (threes.innerHTML) {
			return true;
		} else {
			return false;
		}
	} else if (x == 4) {
		if (fours.innerHTML) {
			return true;
		} else {
			return false;
		}
	} else if (x == 5) {
		if (fives.innerHTML) {
			return true;
		} else {
			return false;
		}
	} else {
		if (sixes.innerHTML) {
			return true;
		} else {
			return false;
		}
	}
}