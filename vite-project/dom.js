import "/style.css";
import { foods } from "./food.js";

const Dom = {
  men: document.getElementById("men"),
  veg: document.getElementById("veg"),
  main: document.getElementById("main"),
  drink: document.getElementById("drink"),
  des: document.getElementById("des"),
};

<<<<<<< HEAD
Dom.des.addEventListener("click", function () {
  Desserts();
  reset();
});

Dom.drink.addEventListener("click", function () {
  Drinks();
  reset();
});

Dom.veg.addEventListener("click", function () {
  Vegans();
  reset();
});

function Desserts() {
  foods
    .filter((menu) => menu.type === "Dessert")
    .forEach((menu) =>
      Dom.men.insertAdjacentHTML(
        "beforeend",
        `
      <div class="card">
<h1>${menu.name}</h1>
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
<h1>${menu.name}</h1>
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
<h1>${menu.name}</h1>
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
=======
Dom.main.addEventListener("click", () => {
  const men = document.querySelector('#men');

  everything();

});

function everything() {
  foods.forEach(
    foods.insertAdjacentHTML(
      "afterend",
>>>>>>> 8a762e1903cfe89380cb83a7730474a23d377493
      `
      <div class="card">
<h1>${menu.name}</h1>
<img class src="${menu.img}" /><img>
<h3 class="price">${menu.price}</h3>
</div>
`
    )
  );
}

<<<<<<< HEAD
Allfoods();
=======

// function drinks() {
// Dom.foods
//   .filter((food) => food.type.includes("Drink"))
//   .forEach((food) =>
//     insertAdjacentHTML(
//         "afterend",
//         `
//     <div class="card">
//     <img class src="${foods.img}" /><img>
//     <h2 class="name">${foods.name}</h2>
//     <h3 class="price">${foods.price}</h3>
//     </div>
//     `
//       )
//     );
// }

// function allfood() {
//   Dom.foods
//     .filter((food) => food.type.includes("Dish"))
//     .forEach((food) =>
//       insertAdjacentHTML(
//         "afterend",
//         `
//     <div class="card">
//     <img class src="${foods.img}" /><img>
//     <h2 class="name">${foods.name}</h2>
//     <h3 class="price">${foods.price}</h3>
//     </div>
//     `
//       )
//     );
// }
>>>>>>> 8a762e1903cfe89380cb83a7730474a23d377493
