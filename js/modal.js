const linkFeedback = document.querySelector('.footer-button');
const popupFeedback = document.querySelector('.modal-feedback');
const btnFeedbackClose = document.querySelector('.button-close');
const modalForm = document.querySelector('.modal-form');
const inputName = document.querySelector('.feedback-input-name');
const inputEmail = document.querySelector('.feedback-input-email');
const inputMessage = document.querySelector('.feedback-input-message');



linkFeedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupFeedback.classList.add('modal-feedback-show');
  inputName.focus();
});

/*linkFeedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupFeedback.classList.remove('modal-feedback-show');
});*/

modalForm.addEventListener('submit', function(evt) {
  if(!inputName || !inputEmail || !inputMessage) {
    evt.preventDefault();
  }

});

