import "/style.css";
import { foods } from "./food.js";

const Dom = {
  men: document.getElementById("men"),
  veg: document.getElementById("veg"),
  main: document.getElementById("main"),
  drink: document.getElementById("drink"),
  des: document.getElementById("des"),
};

Dom.main.addEventListener("click", function (event) {
  everything();
  event.preventDefault();
});

function everything() {
  foods.forEach((thing) =>
    insertAdjacentHTML(
      "afterend",
      `
    <div class="card"> 
    <img class src="${foods.img}" /><img>
    <h2 class="name">${foods.name}</h2>
    <h3 class="price">${foods.price}</h3>
    </div>
    `
    )
  );
}

foods.forEach(
  foods.insertAdjacentHTML(
    "afterend",
    `
    <div class="card"> 
    <img class src="${foods.img}" /><img>
    <h2 class="name">${foods.name}</h2>
    <h3 class="price">${foods.price}</h3>
    </div>
    `
  )
);
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
