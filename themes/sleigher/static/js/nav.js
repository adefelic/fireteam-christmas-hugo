if (document.readyState !== 'loading') {
	addNavClickListener();
} else {
	document.addEventListener('DOMContentLoaded', function() {
		addNavClickListener();
	});
}

function addNavClickListener() {
	const navButton = document.querySelector("#nav-button");
	navButton.addEventListener("click", (event) => {
		document.querySelector("#grid-container").classList.toggle("grid-container-nav-collapsed");
		// todo find a way to toggle inner text
		// navButton.innerHTML += "Fuction executed! "
	});
}
