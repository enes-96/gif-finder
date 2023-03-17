"use strict";
const image = document.querySelector("img");
const input = document.querySelector("input");
const loadingAnimation = document.querySelector(".wrapper");

function requestApi(search) {
  fetch("API_KES" + search, { mode: "cors" })
    .then((response) => {
      if (!response.ok) throw new Error("API ERROR");
      return response.json();
    })
    .then((responseData) => {
      image.src = responseData.data.images.original.url;
    })
    .catch((error) => {
      console.log(error);

      image.src =
        "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FkJTIwYW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    });
}
input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    loadingAnimation.classList.remove("hide");
    requestApi(input.value);

    setTimeout(() => {
      loadingAnimation.classList.add("hide");
    }, 1000);
  }
});
