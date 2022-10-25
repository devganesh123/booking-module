// const { default: axios } = require("axios");

let seatItems = document.querySelectorAll(".seat-item");
let modalContainer = document.querySelector("#modal-section");
let closeBtn = document.querySelector("#close-btn");
let form = document.querySelector("#seatbooking-form");
let cancelBtn = document.querySelector("#cancel-btn");
let cancelBookingBtn = document.querySelector("#cancel-booking");
const overlay = document.getElementById("overlay");

let message = document.querySelector("#message");

seatItems.forEach((item) => {
  item.addEventListener("click", () => setModal(item));
});

function setModal(seatItem) {
  // open the modal
  modalContainer.classList.add("show");
  overlay.classList.add("active");

  //  insert desk id
  let deskInput = document.querySelector("#desk-id");
  let deskValue = seatItem.textContent;
  deskInput.value = deskValue;

  // form submit function
  form.addEventListener("submit", (event) => {
    formSubmit(event, seatItem);
  });
}

function formSubmit(e, seat) {
  e.preventDefault();

  const formData = new FormData(form);
  const result = Object.fromEntries(formData);
  const payload = JSON.stringify(result);

  console.log(payload);
  for (item of formData) {
    console.log(item[0], item[1]);
  }

  //   fetch("https://httpbin.org/post", {
  //     method: "POST",
  //     body: payload,
  //     headers: {
  //       "Content-Type": "application/json",
  //       "color-code": "amber",
  //     },
  //   })
  //.then((res) => res.json())
  //   .then((output) => {
  //     console.log(output.data.form);
  //   })
  //   .catch((error) => {
  //     throw error;
  //   });

  // axios({
  //   method: "post",
  //   url: "https://httpbin.org/post",
  //   data: payload,
  //   headers: {
  //     "color-code": "amber",
  //   },
  // })
  //   .then((output) => {
  //     console.log(output);
  //     if (output.status === 200) {
  //       seatBooking(seat);
  //     }
  //   })
  //   .catch((error) => {
  //     throw error;
  //   });

  const url = "https://reqres.in/api/users";
  const fetchData = async () => {
    try {
      const response = await axios(url, {
        headers: {
          Accept: "application/json",
        },
      });
      response.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(fetchData());

  const postUrl = "https://reqres.in/api/users";
  const postData = async () => {
    try {
      const response = await axios.post(postUrl, {
        data: payload,
        headers: {
          "Content-Type": "application/json",
          "booked-status": "booked",
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(postData());
}

//close the modal
closeBtn.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);

function closeModal() {
  modalContainer.classList.remove("show");
  overlay.classList.remove("active");
}

function seatBooking(seat) {
  // resetting the form when response sends
  form.reset();
  // close the modal when the response is sent
  modalContainer.classList.remove("show");
  overlay.classList.remove("active");

  seatItems.forEach((item) => {
    item.classList.remove("booked");
  });
  seat.classList.add("booked");
}

// cancelBookingBtn.addEventListener("click", (item) => cancelBooking(item));

// function cancelBooking(seat) {
//   let bookedSlot = document.querySelector(".seat-item.booked");
//   bookedSlot.classList.remove("booked");
// }
