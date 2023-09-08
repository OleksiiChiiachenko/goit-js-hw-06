






const listCategories = document.querySelectorAll('.item');
console.log('Number of categories:', listCategories.length);

listCategories.forEach(function (list) {
    console.log('Category:', list.firstElementChild.textContent);
    console.log('Elements:', list.lastElementChild.children.length);
});

  
 