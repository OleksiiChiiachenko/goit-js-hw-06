const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngred = document.querySelector('#ingredients');

const newLiClass = ingredients.map((elem) => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = elem;
  return li;
}
)

listIngred.append(...newLiClass);