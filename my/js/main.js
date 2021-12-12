import { showSpinner, hideSpinner } from './spinner.js';

const ERRORS = ['valueMissing', 'typeMismatch', 'patternMismatch', 'tooLong', 'tooShort',
  'rangeUnderflow', 'rangeOverflow', 'stepMismatch', 'badInput'];

const fields = [...subscribeForm.querySelectorAll('input,select')];

fields.forEach(el => {
  const name = el.type === 'checkbox' ? 'change' : 'blur';
  el.addEventListener(name, event => fieldError(event.target));
});

function fieldError(el) {
  const error = ERRORS.filter(err => el.validity[err])
    .map(err => el.dataset[err.toLowerCase()]).join('');

  return el.parentElement.querySelector('.error').innerHTML = error;
}

function formValid() {
  return !fields.filter(el => fieldError(el)).length;
}

function onSubmit(e) {
  e.preventDefault();
  if (formValid())
    post(new FormData(e.target)).finally(hideSpinner);
};

function post(data) {
  showSpinner(data);
  return new Promise(resolve => setTimeout(resolve, 3000));
}

subscribeForm.addEventListener('submit', onSubmit);