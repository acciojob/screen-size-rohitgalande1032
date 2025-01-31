//your JS code here. If required.
let size = document.getElementById("sizeInfo");

window.addEventListener("resize", () => {
	let x = window.innerWidth;
	let y = window.innerHeight;
	size.textContent = `Width: ${x} and Height: ${y}`
})