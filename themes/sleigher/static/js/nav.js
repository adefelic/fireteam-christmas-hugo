if (document.readyState !== 'loading') {
	addNavAccordionClickListener();
	addThunderstormClickListener();
} else {
	document.addEventListener('DOMContentLoaded', function() {
		addNavAccordionClickListener();
		addThunderstormClickListener();
	});
}

function addNavAccordionClickListener() {
	const button = document.querySelector("#nav-button");
	button.addEventListener("click", (event) => {
		document.querySelector("#grid-container").classList.toggle("grid-container-nav-collapsed");
		// todo find a way to toggle inner text
		// navButton.innerHTML += "Fuction executed! "
	});
}

function addThunderstormClickListener() {
	const button = document.querySelector("#thunderstorm-button");
	button.addEventListener("click", (event) => {
		document.querySelector(".grid-item-main").classList.toggle("starry");
		document.querySelector(".grid-item-main").classList.toggle("thunderstorm");
		if (document.querySelector("#thunderstorm-button-image").style.display !== "none") {
			document.querySelector("#thunderstorm-button-image").style.display = "none";
		} else {
			document.querySelector("#thunderstorm-button-image").style.display = "block";
		}
		if (document.querySelector("#thunderstorm-button-image").style.display !== "none") {
			document.querySelector("#starry-button-image").style.display = "none";
		} else {
			document.querySelector("#starry-button-image").style.display = "block";
		}
	});
}
