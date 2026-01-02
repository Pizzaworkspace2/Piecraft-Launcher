document.addEventListener('DOMContentLoaded', (event) => {
// startup 
let user = "";

const login = document.getElementById("login");
const welcome = document.getElementById("welcome");

login.addEventListener("input", function(event) {
  user = event.target.value;

  welcome.textContent = "Welcome, " user;

});
  

