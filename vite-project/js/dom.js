import "../styles/style.css";
import { foods } from "./food.js";

const Dom = {
  men: document.getElementById("men"),
  veg: document.getElementById("veg"),
  main: document.getElementById("main"),
  drink: document.getElementById("drink"),
  des: document.getElementById("des"),
};

document.getElementById("theme").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList = ["dark"];
  } else {
    document.body.classList = ["light"];
  }
});

const mendiv = document.querySelector("#men");

document.querySelector("#veg").addEventListener("click", function () {
  mendiv.innerHTML = "";
});

document.querySelector("#main").addEventListener("click", function () {
  mendiv.innerHTML = "";
});

document.querySelector("#drink").addEventListener("click", function () {
  mendiv.innerHTML = "";
});

document.querySelector("#des").addEventListener("click", function () {
  mendiv.innerHTML = "";
});

Dom.main.addEventListener("click", function () {
  Allfoods();
});

Dom.des.addEventListener("click", function () {
  Desserts();
});

Dom.drink.addEventListener("click", function () {
  Drinks();
});

Dom.veg.addEventListener("click", function () {
  Vegans();
});

function Desserts() {
  foods
    .filter((menu) => menu.type === "Dessert")
    .forEach((menu) =>
      Dom.men.insertAdjacentHTML(
        "beforeend",
        `
      <div class="card">
      <h1 class="dess">${menu.name}</h1>
<img class src="${menu.img}" /><img>
<h3 class="price">${menu.price}</h3>


</div>
`
      )
    );
}

function Drinks() {
  foods
    .filter((menu) => menu.type === "Drink")
    .forEach((menu) =>
      Dom.men.insertAdjacentHTML(
        "beforeend",
        `
      <div class="card">
<h1 class="drin">${menu.name}</h1>
<img class src="${menu.img}" /><img>
<h3 class="price">${menu.price}</h3>


</div>
`
      )
    );
}

function Vegans() {
  foods
    .filter((menu) => menu.vegan === "true")
    .forEach((menu) =>
      Dom.men.insertAdjacentHTML(
        "beforeend",
        `
      <div class="card">
      <h1 class="vegs">${menu.name}</h1>
<img class src="${menu.img}" /><img>
<h3 class="price">${menu.price}</h3>


</div>
`
      )
    );
}

function Allfoods() {
  foods.forEach((menu) =>
    Dom.men.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card">
      <h1 class="all">${menu.name}</h1>
<img class src="${menu.img}" /><img>
<h3 class="price">${menu.price}</h3>
</div>
`
    )
  );
}

Allfoods();
