"use strict";
const image = document.querySelector("img");
const input = document.querySelector("input");
const loadingAnimation = document.querySelector(".wrapper");
const defaultImage =
  "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FkJTIwYW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=70";

async function requestApi(search) {
  try {
    const response = await fetch("API_KES" + search, { mode: "cors" });
    const data = await response.json();
    image.src = data.data.imaes.original.url;
  } catch (error) {
    console.error(error);
    image.src = defaultImage;
  }
}
//

//
input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    loadingAnimation.classList.remove("hide");
    requestApi(input.value);

    setTimeout(() => {
      loadingAnimation.classList.add("hide");
    }, 1000);
  }
});
