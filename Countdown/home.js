'use strict';
const dayObject = {
	day: 1,
	month: 'Jan',
	year: 2023,
};

const {day,month,year} = dayObject;

// const dayy = +prompt('Input day', '1-31');
// const monthh = prompt('Input a month', 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec');
// const yearr = +prompt('Input year');

const theDay = new Date(`${day} ${month} ${year}`)

const daysContainer = document.getElementById('da');
const hoursContainer = document.getElementById('ho');
const minutesContainer = document.getElementById('mi');
const secondsContainer = document.getElementById('se');

function countdown(){
	const newYear = new Date(theDay);
	let now = new Date();
	let timeToYear = newYear-now;
	const daysTo = Math.floor(timeToYear/(24*3600*1000));
	const hoursTo = Math.floor(timeToYear/(3600*1000))%24;
	const minutesTo = Math.floor(timeToYear/(60*1000))%60;;
	const secondsTo = Math.floor(timeToYear/(1000))%60;;

	daysContainer.textContent = daysTo;
	hoursContainer.textContent = formatTime(hoursTo);
	minutesContainer.textContent = formatTime(minutesTo);
	secondsContainer.textContent = formatTime(secondsTo);
}

function formatTime(time){
	if(time<10){
		return `0${time}`
	}else{
		return time;
	}
}

countdown();
setInterval(countdown, 1000);

