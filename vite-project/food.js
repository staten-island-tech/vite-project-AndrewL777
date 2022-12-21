const foods = [
  {
    name: "Tomato Fried Eggs",
    vegan: false,
    price: 5,
    img: "https://www.yumofchina.com/wp-content/uploads/2018/08/egg-yolk-bun.jpg",
    type: "Dish",
  },
  {
    name: "Pi Dan Shou Rou Zhou",
    vegan: false,
    price: 7,
    img: "https://www.yumofchina.com/wp-content/uploads/2018/08/egg-yolk-bun.jpg",
    type: "Dish",
  },
  {
    name: "Sweet and Sour Pork",
    vegan: false,
    price: 7,
    img: "https://cafedelites.com/wp-content/uploads/2018/08/sweet-and-sour-pork-5.jpg",

    type: "Dish",
  },
  {
    name: "Wonton Soup",
    vegan: false,
    price: 7,
    img: "https://iamhomesteader.com/wp-content/uploads/2022/03/wonton-soup-1.jpg",

    type: "Dish",
  },
  {
    name: "Chrysanthemum Tea",
    vegan: true,
    price: 7,
    img: "https://draxe.com/wp-content/uploads/2020/05/ChrysanthemumTea_FB.jpg",

    type: "Drink",
  },
  {
    name: "Sesame Balls",
    vegan: true,
    price: 7,
    img: "https://www.yumofchina.com/wp-content/uploads/2018/08/egg-yolk-bun.jpg",
    type: "Dessert",
  },
  {
    name: "Char Siu",
    vegan: false,
    price: 7,
    img: "https://allwaysdelicious.com/wp-content/uploads/2020/03/char-siu-vert-1.jpg",

    type: "Dish",
  },
  {
    name: "Red Bean Bun",
    vegan: true,
    price: 7,
    img: "https://www.chinayummyfood.com/wp-content/uploads/2019/08/Red-Bean-Buns-1-500x500.jpg",

    type: "Dessert",
  },
  {
    name: "Sweet Egg Bun",
    vegan: false,
    price: 7,
    img: "https://www.yumofchina.com/wp-content/uploads/2018/08/egg-yolk-bun.jpg",

    type: "Dessert",
  },
  {
    name: "Wong Lo Kat / Wanglaoji ",
    vegan: false,
    price: 7,
    img: "https://www.yumofchina.com/wp-content/uploads/2018/08/egg-yolk-bun.jpg",
    type: "Drink",
  },

  {
    name: "Apple Sidra",
    vegan: false,
    price: 7,
    img: "https://www.yumofchina.com/wp-content/uploads/2018/08/egg-yolk-bun.jpg",
    type: "Drink",
  },
];

export { foods };

foods
  .filter((food) => food.type.includes("Dish"))
  .forEach((food) => console.log(food.name));
// dish

foods
  .filter((food) => food.type.includes("Dessert"))
  .forEach((food) => console.log(food.name));
// dessert

// foods
//   .filter((food) => food.vegan.includes("Yes"))
//   .forEach((food) => console.log(food.name));

function drinks() {
  foods
    .filter((food) => food.type.includes("Drink"))
    .forEach((food) => console.log(food.name));
  // drinks
}
