const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});

//Nav mobile animation
const hamburger = document.getElementById("hamburguer");
const navContainer = document.getElementById("nav-container");
const navLinksContainer = document.getElementsByClassName("nav-links__container");

hamburger.addEventListener("click", ()=> {
	navContainer.classList.toggle("showNavLinks");
})

navContainer.addEventListener("click", ()=>{
	navContainer.classList.remove("showNavLinks");
})

navLinksContainer[0].addEventListener("click", (e)=>{
e.stopPropagation()
})