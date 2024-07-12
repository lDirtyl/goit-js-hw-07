const categoriesList = document.querySelector('#categories');

const items = categoriesList.querySelectorAll('.item');

console.log(items.length);

items.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;

  const elementsCount = item.querySelectorAll('ul li').length;

  console.log(categoryTitle);
  console.log(elementsCount);
});
