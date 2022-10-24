let blogSection = document.querySelector(".blog-section");

function getData() {
  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => {
      let blogDatas = data.data;
      console.log(blogDatas);
      let html = blogDatas
        .map((blog) => {
          return `
          <div class="col">
        <div>${blog.first_name}</div>
        <div>${blog.email}</div>
        <div><img src="${blog.avatar}"/></div>
        </div>
        `;
        })
        .join("");
      blogSection.insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
getData();
