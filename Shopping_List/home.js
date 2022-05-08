const inputRef = document.querySelector('input');
const ulRef = document.querySelector('ul');
const buttonRef = document.querySelector('#submit');

buttonRef.onclick = function(){
	let currentValue = inputRef.value;
	inputRef.value = ' ';

	const listItem = document.createElement('li');
	const spanItem = document.createElement('em');
	const buttonItem = document.createElement('button');

	listItem.appendChild(spanItem);
	listItem.appendChild(buttonItem);

	spanItem.textContent = currentValue;
	buttonItem.textContent = 'X';
	ulRef.appendChild(listItem);

	buttonItem.onclick = function(d){
		ulRef.removeChild(listItem);
	}
	inputRef.focus();
}

