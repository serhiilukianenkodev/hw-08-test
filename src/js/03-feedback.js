import throttle from 'lodash.throttle';

const KEY_FORM = 'form_data';

const form = document.querySelector('.feedback-form');

const savedData = getData();
if (savedData) {
  form.elements.email.value = savedData.email;
  form.elements.message.value = savedData.message;
}

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  const formData = new FormData(form);
  saveData(Object.fromEntries(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const email = evt.currentTarget.elements.email.value;
  const message = evt.currentTarget.elements.message.value;

  if (!(email && message)) {
    alert('Введи всі дані!!!!!!');
    return;
  }

  evt.currentTarget.reset();
  localStorage.removeItem(KEY_FORM);
  console.log({ email, message });
}

function saveData(data) {
  localStorage.setItem(KEY_FORM, JSON.stringify(data));
}

function getData() {
  return JSON.parse(localStorage.getItem(KEY_FORM));
}
