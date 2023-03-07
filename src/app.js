function bookings(event) {
  let firstName = prompt("What is your First Name?");

  alert("Thanks " + firstName + " for booking with us");
}
let button = document.querySelector("#button");
button.addEventListener("click", bookings);
