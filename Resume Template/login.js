document
	.getElementById("login-form")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		var username = "user";
		var password = "user";

		var User = document.getElementById("username").value;
		var Pass = document.getElementById("password").value;
		// Validate username and password
		if (User === username && Pass === password) {
			localStorage.setItem("loggedIn", "true");
			window.location.href = "resume.html"; // Redirects to the resume page if login is successful
		} else {
			document.getElementById("login-error").innerText =
				"Invalid Username/Password";
		}
	});

//Function to Restrict user from going back to the login page
function restrictBack() {
	window.history.forward();
}
setTimeout("restrictBack()", 0);
window.onunload = function () {
	alert("Back to login page is restricted");
};
