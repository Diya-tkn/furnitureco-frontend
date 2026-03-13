document.addEventListener("click", function(event) {
  const loginBox = document.getElementById("loginBox");

  if (!loginBox.contains(event.target)) {
    window.history.back();
  }
});