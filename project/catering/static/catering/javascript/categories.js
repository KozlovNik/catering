let categoriesButton = document.getElementsByClassName('category-buttons-wrapper')[0],
    image = document.getElementsByClassName('generic-page__image--modified')[0],
    categoriesBlocks = document.getElementsByClassName('subcategories');

categoriesButton.addEventListener('click', e => {
   let category = e.target;
   image.style.display = 'none';
   for (let categoriesBlock of categoriesBlocks) {
       let blockId = categoriesBlock.getAttribute('data-category-id');
       categoriesBlock.style.display = 'none';
       if (blockId == category.id) {
           categoriesBlock.style.display = 'block';
       }
   }
});