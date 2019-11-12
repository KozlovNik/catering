let buttonsParent = document.getElementsByClassName('category-buttons-wrapper')[0],
    image = document.getElementsByClassName('generic-page__image--modified')[0];


// Function deletes active class from all buttons and adds one to the pressed button
function toggleButtonClass(pressedButton) {
    let buttonList = document.getElementsByClassName('category-button');
    for (let button of buttonList) {
        button.classList.remove('category-button--active');
    }
    pressedButton.classList.add('category-button--active');
}


// Function shows the category related to the pressed button and hides all others
function toggleCategory(button) {
    let categoriesBlocks = document.getElementsByClassName('subcategories');
    for (let categoriesBlock of categoriesBlocks) {
        let blockId = categoriesBlock.getAttribute('data-category-id');
        categoriesBlock.style.display = 'none';
        if (blockId == button.id) {
            categoriesBlock.style.display = 'block';
        }
    }
}


buttonsParent.addEventListener('click', e => {
    let pressedButton = e.target;
    image.style.display = 'none';
    toggleButtonClass(pressedButton);
    toggleCategory(pressedButton);
});
