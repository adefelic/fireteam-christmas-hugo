if (document.readyState !== 'loading') {
	addNavClickListener();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        addNavClickListener();
    });
}

function addNavClickListener() {
		document.querySelector("#nav-button").addEventListener("click", (event) => {
		document.querySelector("#grid-container").classList.toggle("grid-container-nav-collapsed");
	    // element.innerHTML += "Fuction executed! "
	});
}
