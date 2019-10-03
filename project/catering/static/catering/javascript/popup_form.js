let closeButton = document.getElementsByClassName('close')[0],
    feedbackForm = document.getElementById('generic-form'),
    feedbackButton = document.getElementById('fb'),
    html = document.getElementsByClassName('page-wrapper')[0];

feedbackButton.addEventListener('mouseup', function (event) {
    console.log(!feedbackForm);

   if (feedbackForm.style.display !== 'block'){
       feedbackForm.style.display = 'block';
   } else {
       feedbackForm.style.display = 'none';
   }
});

window.addEventListener('mouseup', function (event) {
    if (event.target !== feedbackButton && feedbackForm.style.display !== 'none' && !feedbackForm.contains(event.target) && event.target !== closeButton){
        feedbackForm.style.display = 'none';
    }
});

closeButton.addEventListener('click', function () {
    feedbackForm.style.display = 'none';
});

window.addEventListener('click', function () {
   if (feedbackForm.style.display === 'block'){
           html.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
   } else {
       html.style.backgroundColor = 'transparent'
   }
});