import "/style.css";
import { foods } from "./food.js";

const Dom = {
  button: document.getElementById("btn"),
  card: document.getElementById("card"),
  name: document.getElementsById("name"),
  price: document.getElementsById("pruce"),
};

function allfood() {
  Dom.foods
    .filter((food) => food.type.includes("Dish"))
    .forEach((food) =>
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

//   <div class="display-card">   </div> PUT IN HTML!!!!!
