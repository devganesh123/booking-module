const axios = require("axios").default;

let seatItems = document.querySelectorAll(".seat-item");
let confirmModal = document.querySelector("#confirm-booking");
let closeBtn = document.querySelector("#close-btn");
let form = document.querySelector("#seatbooking-form");
let cancelBtn = document.querySelector("#cancel-btn");
let cancelBookingBtn = document.querySelector("#cancel-booking");

seatItems.forEach((item) => {
  item.addEventListener("click", () => setModal(item));
});

function setModal(seatItem) {
  // open the modal
  confirmModal.classList.add("show");

  //  insert desk id
  let deskInput = document.querySelector("#desk-id");
  let deskValue = seatItem.textContent;
  deskInput.value = deskValue;
}

// form submit function
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const result = Object.fromEntries(formData);
  const payload = JSON.stringify(result);

  for (item of formData) {
    console.log(item[0], item[1]);
  }

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: payload,
    headers: {
      "Content-Type": "application/json",
      "color-code": "amber",
    },
  })
    .then((res) => res.json())
    .then((output) => {
      console.log(output);
    })
    .catch((error) => {
      throw error;
    });
});

//close the modal
closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

function closeModal() {
  confirmModal.classList.remove("show");
}

function seatBooking(e) {
  // confirmModal.classList.remove("show");
  // let childrens = [...seat.parentElement.children];
  // console.log(childrens);
  // childrens.forEach((children) => {
  //   children.classList.remove("booked");
  // });
  // seat.classList.add("booked");
  // console.log(seat);
}

// cancelBookingBtn.addEventListener("click", (item) => cancelBooking(item));

// function cancelBooking(seat) {
//   let bookedSlot = document.querySelector(".seat-item.booked");
//   bookedSlot.classList.remove("booked");
// }
