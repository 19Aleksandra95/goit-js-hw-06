const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElement = document.querySelector("#ingredients");

console.log(ingredients);
console.log(ingredientsElement);

const listIngr = ingredients.map((ingredients) => {
  const listLi = document.createElement("li");
listLi.textContent = ingredients;
listLi.classList.add("item");

return listLi;
})

ingredientsElement.append(...listIngr);