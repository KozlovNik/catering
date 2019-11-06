let closeButton = document.getElementsByClassName('close')[0],
    feedbackForm = document.getElementById('generic-form'),
    feedbackButton = document.getElementById('fb'),
    html = document.getElementById('modal');

feedbackButton.addEventListener('click', function (event) {

   if (feedbackForm.style.display !== 'block'){
       feedbackForm.style.display = 'block';
       html.style.display = 'block'
   }
});

html.addEventListener('click', function () {
   html.style.display = 'none';
   feedbackForm.style.display = 'none';
});

closeButton.addEventListener('click', function () {
   feedbackForm.style.display = 'none';
   html.style.display = 'none';
});