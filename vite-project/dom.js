import "/style.css";
import { foods } from "./food.js";

const DOMSelectors = {
  button: document.getElementById("btn"),
};
console.log(foods);

function card() {
  DOMSelectors.form.insertAdjacentHTML(
    "afterend",
    `
    <div class="card"> 
    <img class src="${DOMSelectors.foods.img.value}" /><img>
    <h2 class="artist">${DOMSelectors.foods.name.value}</h2>
    <h3 class="title">${DOMSelectors.foods.price.value}</h3>
    <button class="remove btn">Remove</button>
    </div>
    `
  );
}

//   <div class="display-card">   </div> PUT IN HTML!!!!!
