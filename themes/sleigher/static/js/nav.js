if (document.readyState !== 'loading') {
	addNavAccordionClickListener();
	addMainBackgroundClickListener();
} else {
	document.addEventListener('DOMContentLoaded', function() {
		addNavAccordionClickListener();
		addMainBackgroundClickListener();
	});
}

function addNavAccordionClickListener() {
	const button = document.querySelector("#nav-button");
	button.addEventListener("click", (event) => {
		const gridContainer = document.querySelector("#grid-container");
		gridContainer.classList.toggle("grid-container-nav-collapsed");
		if (gridContainer.classList.contains("grid-container-nav-collapsed")) {
			button.innerHTML = "+";
		} else {
			button.innerHTML = "-";
		}
	});
}

function addMainBackgroundClickListener() {
	const button = document.querySelector("#thunderstorm-button");
	button.addEventListener("click", (event) => {
		const gridItemMain = document.querySelector(".grid-item-main");
		gridItemMain.classList.toggle("starry");
		gridItemMain.classList.toggle("thunderstorm");

		const thunderstormButton = document.querySelector("#thunderstorm-button-image");
		const starryButton = document.querySelector("#starry-button-image");

		if (thunderstormButton.style.display !== "none") {
			thunderstormButton.style.display = "none";
			starryButton.style.display = "block";
		} else {
			thunderstormButton.style.display = "block";
			starryButton.style.display = "none";
		}
	});
}
