//your JS code here. If required.
function capsLetter(str) {
	return str.toUpperCase()
}

const myElement = document.getElementById("fname").innerText;

let nLetter=capsLetter(myElement);

document.getElementById("fname").innerText=nLetter;
