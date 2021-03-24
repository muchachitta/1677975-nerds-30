const linkFeedback = document.querySelector('.footer-button');
const pageBody = document.querySelector('.page-body');
const popupFeedback = document.querySelector('.modal-feedback');
const btnFeedbackClose = document.querySelector('.button-close');
const modalForm = document.querySelector('.modal-form');
const inputName = popupFeedback.querySelector('[name=name]');
const inputEmail = popupFeedback.querySelector('[name=email]');
const inputMessage = popupFeedback.querySelector('[name=text]');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('name');
  storage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

linkFeedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupFeedback.classList.add('modal-feedback-show');
  pageBody.classList.add('page-body-fixed');

  if (storage) {
    inputName.value = storage;
    inputEmail.focus();

  } else {
    inputName.focus();
  }

  if (storage) {
    inputEmail.value =storage;
    inputMessage.focus();
  } else {
    inputName.focus();
  }
});

btnFeedbackClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupFeedback.classList.remove('modal-feedback-show');
  popupFeedback.classList.remove('modal-feedback-error');
  pageBody.classList.remove('page-body-fixed');
});

modalForm.addEventListener('submit', function(evt) {
  if(!inputName.value || !inputEmail.value || !inputMessage.value) {
    evt.preventDefault();
    popupFeedback.classList.remove('modal-feedback-error');
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    popupFeedback.classList.add('modal-feedback-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', inputName.value);
      localStorage.setItem('email', inputEmail.value);
    }
  }

});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popupFeedback.classList.contains('modal-feedback-show')) {
      evt.preventDefault();
      popupFeedback.classList.remove('modal-feedback-show');
      popupFeedback.classList.remove('modal-feedback-error');
      pageBody.classList.remove('page-body-fixed');
    }
  }
});

