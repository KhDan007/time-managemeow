// Create a new list item when clicking on the "Add" button
const addBtn = document.querySelector('.addBtn');

function addNewTask() {
	var li = document.createElement("li");
	var inputValue = document.querySelector(".tool__input").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert("You must write something!");
	} else {
		document.querySelector(".tool__list").appendChild(li);
	}
	document.querySelector(".tool__input").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}

addBtn.addEventListener('click', () => {
	addNewTask();
});

document.addEventListener("keydown", function (ev) {
	
	if (ev.key == "Enter") {
		addNewTask();
	}

}), true;

// Create a "close" button and append it to each list item
var myNodelist = document.querySelectorAll(".tool__list li");

for (let i = 0; i < myNodelist.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('.tool__list');
list.addEventListener('click', function (ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);