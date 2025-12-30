// startup 
let user = "";

const login = document.getElementById("login");

login.addEventListener("input", function(event) {
  user = event.target.value;

  welcome.textContent = user;

});
  

