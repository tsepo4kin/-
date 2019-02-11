let nick1 = document.querySelector('.first-nickname2').value;
let nick2 = document.querySelector('.second-nickname2').value;
let numbers = document.querySelectorAll('.num');
let start = document.querySelector('.start');

document.querySelector('.close').addEventListener('click', function() {
	document.querySelector('.popup-nick').classList.add('visually-hidden');
});

document.querySelector('.close2').addEventListener('click', function() {
	document.querySelector('.popup-start').classList.add('visually-hidden');
});
let starter = 0;
start.addEventListener('click', function() {
	let nickname1 = document.querySelector('.nickname1');
	let nickname2 = document.querySelector('.nickname2');
	let nick1 = document.querySelector('.first-nickname2').value;
	let nick2 = document.querySelector('.second-nickname2').value;
	if(nick1 == '' || nick2 == '' || nick1==nick2) {
		document.querySelector('.popup-nick').classList.remove('visually-hidden');
		return;
	}
	nickname1.classList.remove('visually-hidden');
	nickname2.classList.remove('visually-hidden');
	nickname2.textContent += nick2;
	nickname1.textContent += nick1;
	starter++;
	return;
})

classRemove = function() {
	for(let i = 0; i < numbers.length; i++) {
		if(numbers[i].textContent != '') {
			numbers[i].classList.remove('numActive');
		}
	}
	return ;
}
let checker = 0;
let first = document.querySelector('.first');
let second = document.querySelector('.second');
let third = document.querySelector('.third');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let markStep1 = document.querySelector('.first-player .player-go');
let markStep2 = document.querySelector('.second-player .player-go');
let markSymbol1 = document.querySelector('.first-player .symbol');
let markSymbol2 = document.querySelector('.second-player .symbol');
let firstPlayer = document.querySelector('.first-player');
let secondPlayer = document.querySelector('.second-player');
let congratulations = document.querySelector('.congratulations');
let winnerName = document.querySelector('.winner-name');

addSymbol = function(section) {
	if(checker == 0) {
		section.textContent = 'O';
		checker = 1;
		return;
	};

	if(checker == 1){
		section.textContent = 'X';
		checker = 0;
		return;
	};
}

textCont = function (section) {
	if(section.textContent != '') {
		return 1;
	}
	return 0;
}

playerStep = function (value) {
	if(value == 0) {
		markStep1.classList.add('marked-step');
		markSymbol1.classList.add('marked-symbol');
		firstPlayer.classList.add('marked-player');

		markStep2.classList.remove('marked-step');
		markSymbol2.classList.remove('marked-symbol');
		secondPlayer.classList.remove('marked-player');
		return;
	}
	markStep2.classList.add('marked-step');
	markSymbol2.classList.add('marked-symbol');
	secondPlayer.classList.add('marked-player');

	firstPlayer.classList.remove('marked-player');
	markSymbol1.classList.remove('marked-symbol');
	markStep1.classList.remove('marked-step');

	return;
}

winning = function() {
	if(first.textContent == 'X' && second.textContent == 'X' && third.textContent == 'X') return 1;
	if(four.textContent == 'X' && five.textContent == 'X' && six.textContent == 'X') return 1;
	if(seven.textContent == 'X' && eight.textContent == 'X' && nine.textContent == 'X') return 1;

	if(first.textContent == 'X' && four.textContent == 'X' && seven.textContent == 'X') return 1;
	if(second.textContent == 'X' && five.textContent == 'X' && eight.textContent == 'X') return 1;
	if(third.textContent == 'X' && six.textContent == 'X' && nine.textContent == 'X') return 1;

	if(first.textContent == 'X' && five.textContent == 'X' && nine.textContent == 'X') return 1;
	if(third.textContent == 'X' && five.textContent == 'X' && seven.textContent == 'X') return 1;


	if(first.textContent == 'O' && second.textContent == 'O' && third.textContent == 'O') return 2;
	if(four.textContent == 'O' && five.textContent == 'O' && six.textContent == 'O') return 2;
	if(seven.textContent == 'O' && eight.textContent == 'O' && nine.textContent == 'O') return 2;

	if(first.textContent == 'O' && four.textContent == 'O' && seven.textContent == 'O') return 2;
	if(second.textContent == 'O' && five.textContent == 'O' && eight.textContent == 'O') return 2;
	if(third.textContent == 'O' && six.textContent == 'O' && nine.textContent == 'O') return 2;

	if(first.textContent == 'O' && five.textContent == 'O' && nine.textContent == 'O') return 2;
	if(third.textContent == 'O' && five.textContent == 'O' && seven.textContent == 'O') return 2;

	return 0;
}


playerStep(checker);

first.addEventListener('click', function() {
	if(starter <= 0) {
		document.querySelector('.popup-start').classList.remove('visually-hidden');
		return;
	} 
	let nick1 = document.querySelector('.first-nickname2').value;
	let nick2 = document.querySelector('.second-nickname2').value;
	if(nick1 == '' || nick2 == '' || nick1==nick2) {
		document.querySelector('.popup-nick').classList.remove('visually-hidden');
		return;
	};
	if(textCont(first) == 1) return;
	addSymbol(first);
	classRemove();
	playerStep(checker);
	if(winning() == 1) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил второй игрок под ником: ' + nick1;
	};
	if(winning() == 2) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил первый игрок под ником: ' + nick2;
	}
	return;
})

second.addEventListener('click', function() {
	if(starter <= 0) {
		document.querySelector('.popup-start').classList.remove('visually-hidden');
		return;
	}
	let nick1 = document.querySelector('.first-nickname2').value;
	let nick2 = document.querySelector('.second-nickname2').value;
	if(nick1 == '' || nick2 == '' || nick1==nick2) {
		document.querySelector('.popup-nick').classList.remove('visually-hidden');
		return;
	};
	if(textCont(second) == 1) return;
	addSymbol(second);
	classRemove();
	playerStep(checker);
	if(winning() == 1) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил второй игрок под ником: ' + nick1;
	};
	if(winning() == 2) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил первый игрок под ником: ' + nick2;
	}
	return;
})

third.addEventListener('click', function() {
	if(starter <= 0) {
		document.querySelector('.popup-start').classList.remove('visually-hidden');
		return;
	}
	let nick1 = document.querySelector('.first-nickname2').value;
	let nick2 = document.querySelector('.second-nickname2').value;
	if(nick1 == '' || nick2 == '' || nick1==nick2) {
		document.querySelector('.popup-nick').classList.remove('visually-hidden');
		return;
	};
	if(textCont(third) == 1) return;
	addSymbol(third);
	classRemove();
	playerStep(checker);
	if(winning() == 1) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил второй игрок под ником: ' + nick1;
	};
	if(winning() == 2) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил первый игрок под ником: ' + nick2;
	}
	return;
})

four.addEventListener('click', function() {
	if(starter <= 0) {
		document.querySelector('.popup-start').classList.remove('visually-hidden');
		return;
	}
	let nick1 = document.querySelector('.first-nickname2').value;
	let nick2 = document.querySelector('.second-nickname2').value;
	if(nick1 == '' || nick2 == '' || nick1==nick2) {
		document.querySelector('.popup-nick').classList.remove('visually-hidden');
		return;
	};
	if(textCont(four) == 1) return;
	addSymbol(four);
	classRemove();
	playerStep(checker);
	if(winning() == 1) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил второй игрок под ником: ' + nick1;
	};
	if(winning() == 2) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил первый игрок под ником: ' + nick2;
	}
	return;
})

five.addEventListener('click', function() {
	if(starter <= 0) {
		document.querySelector('.popup-start').classList.remove('visually-hidden');
		return;
	}
	let nick1 = document.querySelector('.first-nickname2').value;
	let nick2 = document.querySelector('.second-nickname2').value;
	if(nick1 == '' || nick2 == '' || nick1==nick2) {
		document.querySelector('.popup-nick').classList.remove('visually-hidden');
		return;
	};
	if(textCont(five) == 1) return;
	addSymbol(five);
	classRemove();
	playerStep(checker);
	if(winning() == 1) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил второй игрок под ником: ' + nick1;
	};
	if(winning() == 2) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил первый игрок под ником: ' + nick2;
	}
	return;
})

six.addEventListener('click', function() {
	if(starter <= 0) {
		document.querySelector('.popup-start').classList.remove('visually-hidden');
		return;
	}
	let nick1 = document.querySelector('.first-nickname2').value;
	let nick2 = document.querySelector('.second-nickname2').value;
	if(nick1 == '' || nick2 == '' || nick1==nick2) {
		document.querySelector('.popup-nick').classList.remove('visually-hidden');
		return;
	};
	if(textCont(six) == 1) return;
	addSymbol(six);
	classRemove();
	playerStep(checker);
	if(winning() == 1) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил второй игрок под ником: ' + nick1;
	};
	if(winning() == 2) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил первый игрок под ником: ' + nick2;
	}
	return;
})

seven.addEventListener('click', function() {
	if(starter <= 0) {
		document.querySelector('.popup-start').classList.remove('visually-hidden');
		return;
	}
	let nick1 = document.querySelector('.first-nickname2').value;
	let nick2 = document.querySelector('.second-nickname2').value;
	if(nick1 == '' || nick2 == '' || nick1==nick2) {
		document.querySelector('.popup-nick').classList.remove('visually-hidden');
		return;
	};
	if(textCont(seven) == 1) return;
	addSymbol(seven);
	classRemove();
	playerStep(checker);
	if(winning() == 1) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил второй игрок под ником: ' + nick1;
	};
	if(winning() == 2) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил первый игрок под ником: ' + nick2;
	}
	return;
})

eight.addEventListener('click', function() {
	if(starter <= 0) {
		document.querySelector('.popup-start').classList.remove('visually-hidden');
		return;
	}
	let nick1 = document.querySelector('.first-nickname2').value;
	let nick2 = document.querySelector('.second-nickname2').value;
	if(nick1 == '' || nick2 == '' || nick1==nick2) {
		document.querySelector('.popup-nick').classList.remove('visually-hidden');
		return;
	};
	if(textCont(eight) == 1) return;
	addSymbol(eight);
	classRemove();
	playerStep(checker);
	if(winning() == 1) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил второй игрок под ником: ' + nick1;
	};
	if(winning() == 2) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил первый игрок под ником: ' + nick2;
	}
	return;
})

nine.addEventListener('click', function() {
	if(starter <= 0) {
		document.querySelector('.popup-start').classList.remove('visually-hidden');
		return;
	}
	let nick1 = document.querySelector('.first-nickname2').value;
	let nick2 = document.querySelector('.second-nickname2').value;
	if(nick1 == '' || nick2 == '' || nick1==nick2) {
		document.querySelector('.popup-nick').classList.remove('visually-hidden');
		return;
	};
	if(textCont(nine) == 1) return;
	addSymbol(nine);
	classRemove();
	playerStep(checker);
	if(winning() == 1) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил второй игрок под ником: ' + nick1;
	};
	if(winning() == 2) {
		congratulations.classList.remove('visually-hidden');
		winnerName.textContent = 'Поздравляем, победил первый игрок под ником: ' + nick2;
	}
	return;
})
