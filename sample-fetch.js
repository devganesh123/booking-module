let blogRow = document.querySelector(".booked-seats_row");

// function getData() {
//   fetch("https://reqres.in/api/users")
//     .then((response) => response.json())
//     .then((data) => {
//       let blogDatas = data.data;
//       console.log(blogDatas);
//       let html = blogDatas
//         .map((blog) => {
//           return `
//           <div class="col">
//         <div>${blog.first_name}</div>
//         <div>${blog.email}</div>
//         <div><img src="${blog.avatar}"/></div>
//         </div>
//         `;
//         })
//         .join("");
//       blogSection.insertAdjacentHTML("afterbegin", html);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// getData();

const bookedSeatsUrl = "https://reqres.in/api/users";
const bookedSeats = async () => {
  try {
    const response = await axios(bookedSeatsUrl, {
      headers: {
        Accept: "application/json",
      },
    });
    console.log(response.data.data);
    let blogDatas = response.data.data;
    let html = blogDatas
      .map((blog) => {
        return `
        <div class="booked-seats_col">
        <div class="booked-seats_container">
          <div class="booked-seats_details">
            <div class="booked-seats_input">Desk Id</div>
            <div class="booked-seats_value">H42</div>
          </div>
          <div class="booked-seats_details">
            <div class="booked-seats_input">Employee Id</div>
            <div class="booked-seats_value">T10148</div>
          </div>
          <div class="booked-seats_details">
            <div class="booked-seats_input">Booked Date</div>
            <div class="booked-seats_value">25-10-22</div>
          </div>
          <div class="booked-seats_details">
            <div class="booked-seats_input">Booked Time</div>
            <div class="booked-seats_value">6 - 2.30</div>
          </div>
          <div class="form-submit">
            <button type="submit">Cancel Seat</button>
          </div>
        </div>
      </div>
        `;
      })
      .join("");
    blogRow.insertAdjacentHTML("afterbegin", html);
  } catch (error) {
    console.log(error);
  }
};
console.log(bookedSeats());
