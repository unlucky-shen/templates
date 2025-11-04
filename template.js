// Run code only after the page loads
document.addEventListener("DOMContentLoaded", function() {
	console.log("Page loaded and ready!"); // Test message in console

	// Selecting Elements
	const button = document.querySelector("#myButton"); // To select HTML id
	const message = document.querySelector(".message"); // To select HTML class

	// Event Listeners
	button.addEventListener("click", function() {
		message.textContent = "You clicked the button!";
		message.style.color = "green";
	});

	// Fnctions (Reusable Codes)
	function greet(name) { // Defines o/ne function to take input name
		console.log(`Hello, ${name}!`); // User input
	}

	greet("Taufiq");
});

